'use client';

import { useState } from 'react';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        body: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.body.trim()) {
            setSubmitStatus('error');
            setErrorMessage('Please fill in all required fields (name, email, subject, and message).');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const structuredBody = `Name: ${formData.name}
Email: ${formData.email}${formData.phone.trim() ? `
Phone: ${formData.phone}` : ''}

Message:
${formData.body}`;

            const formDataObj = new FormData();
            formDataObj.append('subject', formData.subject);
            formDataObj.append('body', structuredBody);

            const response = await fetch('https://matthewpsimons.com/contact', {
                method: 'POST',
                headers: {
                    'Origin': 'https://matthewpsimons.com'
                },
                body: formDataObj
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: '', body: '' });
            } else {
                throw new Error(`Server responded with status: ${response.status}`);
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-2xl">
                    <h1 className="text-4xl font-bold text-power text-center mb-8">Contact</h1>
                    
                    <div className="bg-parchment rounded-lg shadow-lg p-8 border border-steel/20">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                                    Name <span className="text-power">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:ring-2 focus:ring-power focus:border-power bg-white text-ink"
                                    placeholder="Your name"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                                    Email <span className="text-power">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:ring-2 focus:ring-power focus:border-power bg-white text-ink"
                                    placeholder="your@email.com"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:ring-2 focus:ring-power focus:border-power bg-white text-ink"
                                    placeholder="(555) 123-4567"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                                    Subject <span className="text-power">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:ring-2 focus:ring-power focus:border-power bg-white text-ink"
                                    placeholder="What's this about?"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="body" className="block text-sm font-medium text-ink mb-2">
                                    Message <span className="text-power">*</span>
                                </label>
                                <textarea
                                    id="body"
                                    name="body"
                                    rows={6}
                                    value={formData.body}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-steel/30 rounded-md focus:ring-2 focus:ring-power focus:border-power bg-white text-ink resize-vertical"
                                    placeholder="Tell me what's on your mind..."
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-power text-parchment font-medium py-3 px-6 rounded-md hover:bg-power/90 focus:ring-2 focus:ring-power focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {submitStatus === 'success' && (
                            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                Thanks for reaching out! I&apos;ll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                                {errorMessage}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
