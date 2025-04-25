'use client';

import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ChatBox() {
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState([
        { role: 'MattBot', text: "Hi! I'm MattBot." },
        { role: 'MattBot', text: "I'm a RAG (Retrieval-Augmented Generation) AI chatbot that Matt built to answer questions about his career history, skills, and experience." },
        { role: 'MattBot', text: "If you think I sound like Matt, then 1.) I'm deeply sorry, and 2.) that's on purpose. I've got a whole vector DB chock-full of Matt's talks and articles to help set my tone and style." },
        { role: 'MattBot', text: "Come on! Ask me anything. I can tell you're just dying to know about Matt's favorite pizza toppings." }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const sessionIdRef = useRef<string>(uuidv4());
    const chatBoxRef = useRef<HTMLDivElement>(null);

    function fixParagraphs(text: string): string {
        return text.replace(
            /([a-z0-9])([.!?:])([A-Z])/g,
            '$1$2\n\n$3'
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoading || !prompt.trim()) return;
        setIsLoading(true);

        const newMessages = [...messages.slice(3), { role: 'user', text: prompt }, { role: 'MattBot', text: '' }];
        setMessages(newMessages);
        setPrompt('');

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (process.env.NEXT_PUBLIC_DEV_CORS_SECRET) {
            headers['X-Dev-Cors-Secret'] = process.env.NEXT_PUBLIC_DEV_CORS_SECRET;
        }

        const body = JSON.stringify({
            user_id: sessionIdRef.current,
            query: prompt
        });

        if (process.env.NODE_ENV === 'development') {
            console.log('🛰️ Sending request to API:');
            console.log('URL:', 'https://matthewpsimons.com/api/v1/chat');
            console.log('Headers:', headers);
            console.log('Body:', body);
        }

        try {
            const res = await fetch('https://matthewpsimons.com/api/v1/chat', {
                method: 'POST',
                headers,
                body,
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const reader = res.body?.getReader();
            const decoder = new TextDecoder('utf-8');
            let buffer = '';

            if (!reader) {
                setIsLoading(false);
                return;
            }

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const chunk = line.slice(6);
                        setMessages((msgs) => {
                            const updated = [...msgs];
                            updated[updated.length - 1] = {
                                role: 'MattBot',
                                text: (updated[updated.length - 1].text || '') + chunk
                            };
                            return updated;
                        });
                    }
                }
            }
        } catch (err) {
            console.error('🚨 Fetch error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const el = chatBoxRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [messages]);

    return (
        <div className="bg-white bg-opacity-90 p-6 rounded shadow min-h-[500px] max-h-[500px] flex flex-col max-w-2xl mx-auto self-center" ref={chatBoxRef}>
            <div className="flex-1 overflow-y-auto space-y-2 mb-4">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`transition-opacity duration-700 ease-in ${msg.role === 'user'
                            ? 'text-red-900'
                            : idx < 4
                                ? 'text-gray-500 italic animate-fade-in'
                                : 'text-gray-800'
                            }`}
                    >
                        <span className="font-bold">
                            {msg.role === 'user' ? 'You:' : 'MattBot:'}
                        </span>{' '}
                        {fixParagraphs(msg.text).split(/\n{2,}/).map((paragraph, i) => (
                            <div key={i} className="mb-4">
                                {paragraph}
                            </div>
                        ))}

                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex space-x-2 mt-auto">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded px-2 py-1"
                    placeholder="Ask something..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={isLoading}
                    required
                />
                <button
                    type="submit"
                    className="bg-red-900 text-white px-4 py-1 rounded disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading ? 'Thinking...' : 'Send'}
                </button>
            </form>
        </div>
    );
}
