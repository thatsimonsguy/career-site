'use client';

import { SUBJECT_OPTIONS, SubjectOptionValue } from '@/data/Template';

interface ContactInformationProps {
    formData: {
        name: string;
        email: string;
        phone: string;
        subjectType: SubjectOptionValue;
        customSubject: string;
    };
    isSubmitting: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function ContactInformation({ formData, isSubmitting, onChange }: ContactInformationProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-steel/10 p-6">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-power/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-power" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-ink">Contact Information</h2>
                    <p className="text-sm text-steel">Tell us about yourself</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                        Name <span className="text-power">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-steel/20 rounded-lg focus:ring-2 focus:ring-power/20 focus:border-power bg-white text-ink transition-colors"
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
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-steel/20 rounded-lg focus:ring-2 focus:ring-power/20 focus:border-power bg-white text-ink transition-colors"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                        Phone <span className="text-steel text-xs">(Optional)</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-steel/20 rounded-lg focus:ring-2 focus:ring-power/20 focus:border-power bg-white text-ink transition-colors"
                        placeholder="(555) 123-4567"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="subjectType" className="block text-sm font-medium text-ink mb-2">
                        Contact Reason <span className="text-power">*</span>
                    </label>
                    <select
                        id="subjectType"
                        name="subjectType"
                        value={formData.subjectType}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-steel/20 rounded-lg focus:ring-2 focus:ring-power/20 focus:border-power bg-white text-ink transition-colors"
                        disabled={isSubmitting}
                    >
                        {SUBJECT_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {formData.subjectType === 'custom' && (
                <div className="mt-4">
                    <label htmlFor="customSubject" className="block text-sm font-medium text-ink mb-2">
                        Custom Subject <span className="text-power">*</span>
                    </label>
                    <input
                        type="text"
                        id="customSubject"
                        name="customSubject"
                        value={formData.customSubject}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-steel/20 rounded-lg focus:ring-2 focus:ring-power/20 focus:border-power bg-white text-ink transition-colors"
                        placeholder="Enter your custom subject"
                        disabled={isSubmitting}
                    />
                </div>
            )}
        </div>
    );
}