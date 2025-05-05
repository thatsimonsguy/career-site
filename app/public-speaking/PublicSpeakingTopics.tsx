'use client';

import { Users, Video, MessageCircle } from 'lucide-react';

const topics = [
    {
        title: "Building Effective Teams",
        description: "Learn strategies for creating high-performing teams that communicate effectively and drive results.",
        icon: <Users className="w-5 h-5" />,
    },
    {
        title: "Future of Technology",
        description: "Insights on emerging tech trends and how they're reshaping industries and careers.",
        icon: <Video className="w-5 h-5" />,
    },
    {
        title: "Leadership in Transition",
        description: "Navigate change management and lead teams through organizational transformation.",
        icon: <MessageCircle className="w-5 h-5" />,
    },
];

export default function SpeakingTopics() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Speaking Topics</h2>
                <p className="text-center text-gray-600 mb-10">
                    Thought-provoking talks customized for your audience and event goals.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {topics.map((topic, idx) => (
                        <div key={idx} className="border rounded-lg p-6 text-center bg-white shadow-sm">
                            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
                                {topic.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                            <p className="text-gray-600 text-sm">{topic.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
