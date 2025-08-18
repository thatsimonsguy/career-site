'use client';

import { useState, useEffect } from 'react';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactInformation from "@/app/components/ContactInformation";
import TemplateSelector from "@/app/components/TemplateSelector";
import MessagePreview from "@/app/components/MessagePreview";
import { templates } from '@/data/templates';
import { Template, ThemePack, SUBJECT_OPTIONS, SubjectOptionValue } from '@/data/Template';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subjectType: 'speaking' as SubjectOptionValue,
        customSubject: '',
        subject: '',
        body: ''
    });
    const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);
    const [selectedThemePack, setSelectedThemePack] = useState<ThemePack | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Render template when template, form data, or theme pack changes
    useEffect(() => {
        renderTemplate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTemplate, formData.name, formData.email, formData.phone, formData.subjectType, formData.customSubject, selectedThemePack]);

    const renderTemplate = () => {
        // Get the subject based on type
        const subject = formData.subjectType === 'custom' 
            ? formData.customSubject || selectedTemplate.subjectMappings.custom
            : selectedTemplate.subjectMappings[formData.subjectType];

        // Get the subject text with proper phrasing for each template
        const getSubjectText = () => {
            if (formData.subjectType === 'custom') {
                return formData.customSubject || 'your inquiry';
            }
            
            // Special handling for "hello" case per template
            if (formData.subjectType === 'hello') {
                switch (selectedTemplate.id) {
                    case 'boring':
                        return 'just to say hello and introduce myself';
                    case 'buzzword':
                        return 'establishing meaningful stakeholder connectivity';
                    case 'not_sales':
                        return 'just saying hi (seriously, no agenda)';
                    case 'flattery':
                        return 'offering my humble greetings to your magnificence';
                    case 'bureaucracy':
                        return 'general communication purposes as outlined in Form 127a-g5';
                    default:
                        return 'just saying hello';
                }
            }
            
            // Regular cases with proper articles
            const subjectLabel = SUBJECT_OPTIONS.find(opt => opt.value === formData.subjectType)?.label.toLowerCase() || 'your inquiry';
            const startsWithVowel = /^[aeiou]/i.test(subjectLabel);
            return `${startsWithVowel ? 'an' : 'a'} ${subjectLabel}`;
        };

        // Replace placeholders in body template
        let renderedBody = selectedTemplate.bodyTemplate
            .replace(/\{name\}/g, formData.name || '[Your Name]')
            .replace(/\{email\}/g, formData.email || '[Your Email]')
            .replace(/\{subject\}/g, getSubjectText());

        // Replace template-specific variables with theme pack values
        if (selectedThemePack) {
            Object.entries(selectedThemePack.variables).forEach(([key, value]) => {
                renderedBody = renderedBody.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            });
        } else {
            // If no theme pack selected, show placeholders
            // Find all variables in the template and replace with placeholders
            const variables = renderedBody.match(/\{[^}]+\}/g) || [];
            variables.forEach(variable => {
                const varName = variable.slice(1, -1); // Remove { and }
                if (!['name', 'email', 'subject'].includes(varName)) {
                    renderedBody = renderedBody.replace(new RegExp(`\\{${varName}\\}`, 'g'), `[Select theme pack]`);
                }
            });
        }

        // Add phone number under signature if provided
        if (formData.phone.trim() && formData.name.trim()) {
            // Find the last occurrence of the name (usually the signature)
            const namePattern = new RegExp(`\\b${formData.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b(?!.*\\b${formData.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b)`, 'g');
            const lastNameMatch = [...renderedBody.matchAll(namePattern)].pop();
            
            if (lastNameMatch && lastNameMatch.index !== undefined) {
                const insertIndex = lastNameMatch.index + lastNameMatch[0].length;
                renderedBody = renderedBody.slice(0, insertIndex) + `\n${formData.phone}` + renderedBody.slice(insertIndex);
            }
        }

        setFormData(prev => ({
            ...prev,
            subject,
            body: renderedBody
        }));
    };

    const handleTemplateChange = (templateId: string) => {
        const template = templates.find(t => t.id === templateId) || templates[0];
        setSelectedTemplate(template);
        // Reset theme pack selection when changing templates
        setSelectedThemePack(null);
    };

    const handleThemePackChange = (themePackId: string) => {
        const themePack = selectedTemplate.themePacks.find(tp => tp.id === themePackId) || null;
        setSelectedThemePack(themePack);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

        if (formData.subjectType === 'custom' && !formData.customSubject.trim()) {
            setSubmitStatus('error');
            setErrorMessage('Please enter a custom subject or select a different option.');
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
                setFormData({ 
                    name: '', 
                    email: '', 
                    phone: '', 
                    subjectType: 'speaking',
                    customSubject: '',
                    subject: '', 
                    body: '' 
                });
                setSelectedThemePack(null);
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
            <main className="min-h-screen bg-gradient-to-br from-parchment to-mist/30 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-power mb-4">Get In Touch</h1>
                        <p className="text-lg text-steel max-w-2xl mx-auto">
                            Fill this out and Matt will (probably) respond. He&apos;s great like that.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column - Input Components */}
                            <div className="space-y-8">
                                <ContactInformation 
                                    formData={formData}
                                    isSubmitting={isSubmitting}
                                    onChange={handleChange}
                                />
                                
                                <TemplateSelector 
                                    templates={templates}
                                    selectedTemplate={selectedTemplate}
                                    selectedThemePack={selectedThemePack}
                                    isSubmitting={isSubmitting}
                                    onTemplateChange={handleTemplateChange}
                                    onThemePackChange={handleThemePackChange}
                                />
                            </div>

                            {/* Right Column - Preview */}
                            <div className="space-y-8">
                                <MessagePreview 
                                    subject={formData.subject}
                                    body={formData.body}
                                    isSubmitting={isSubmitting}
                                    onChange={handleChange}
                                />
                                
                                {/* Send Button */}
                                <div className="bg-white rounded-xl shadow-sm border border-steel/10 p-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-red-900 text-white font-semibold py-4 px-6 rounded-lg hover:bg-red-800 focus:ring-2 focus:ring-red-900/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center space-x-2">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Sending Message...</span>
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center space-x-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                <span>Send Message</span>
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
                                        <p className="text-green-600">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-800">Oops! Something went wrong</h3>
                                        <p className="text-red-600">{errorMessage}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}