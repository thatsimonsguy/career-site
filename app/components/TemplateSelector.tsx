'use client';

import { Template, ThemePack } from '@/data/Template';

interface TemplateSelectorProps {
    templates: Template[];
    selectedTemplate: Template;
    selectedThemePack: ThemePack | null;
    isSubmitting: boolean;
    onTemplateChange: (templateId: string) => void;
    onThemePackChange: (themePackId: string) => void;
}

const getTemplateIcon = (templateId: string) => {
    switch (templateId) {
        case 'boring':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            );
        case 'buzzword':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            );
        case 'not_sales':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            );
        case 'flattery':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            );
        case 'bureaucracy':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            );
        default:
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            );
    }
};

const getTemplateTagline = (templateId: string) => {
    switch (templateId) {
        case 'boring':
            return 'Simple, professional, and to the point';
        case 'buzzword':
            return 'Corporate speak and startup jargon';
        case 'not_sales':
            return 'Definitely not trying to sell anything';
        case 'flattery':
            return 'Over-the-top praise and worship';
        case 'bureaucracy':
            return 'Official forms and red tape';
        default:
            return 'A unique way to get in touch';
    }
};

const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
};

export default function TemplateSelector({ 
    templates, 
    selectedTemplate, 
    selectedThemePack, 
    isSubmitting, 
    onTemplateChange, 
    onThemePackChange 
}: TemplateSelectorProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-steel/10 p-6">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-power/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-power" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-ink">Choose Your Template</h2>
                    <p className="text-sm text-steel">Pick a style that matches your vibe</p>
                </div>
            </div>

            <div className="space-y-3 mb-6">
                {templates.map((template) => (
                    <button
                        key={template.id}
                        type="button"
                        onClick={() => onTemplateChange(template.id)}
                        disabled={isSubmitting}
                        className={`
                            w-full p-4 rounded-lg border-2 text-left transition-all duration-200 
                            ${selectedTemplate.id === template.id 
                                ? 'border-power bg-power/5 shadow-md' 
                                : 'border-steel/20 hover:border-power/30 hover:bg-power/2'
                            }
                            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        `}
                    >
                        <div className="flex items-center space-x-4">
                            <div className={`
                                p-3 rounded-lg flex-shrink-0
                                ${selectedTemplate.id === template.id 
                                    ? 'bg-power text-white' 
                                    : 'bg-steel/10 text-steel'
                                }
                            `}>
                                {getTemplateIcon(template.id)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className={`
                                    font-semibold text-base mb-1 
                                    ${selectedTemplate.id === template.id ? 'text-power' : 'text-ink'}
                                `}>
                                    {template.name}
                                </h3>
                                <p className="text-sm text-steel leading-relaxed">
                                    {getTemplateTagline(template.id)}
                                </p>
                            </div>
                            {selectedTemplate.id === template.id && (
                                <div className="flex-shrink-0">
                                    <svg className="w-5 h-5 text-power" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {selectedTemplate.themePacks.length > 0 && (
                <div>
                    <label htmlFor="themePack" className="block text-sm font-medium text-ink mb-3">
                        Theme Pack
                    </label>
                    <select
                        id="themePack"
                        value={selectedThemePack?.id || ''}
                        onChange={(e) => onThemePackChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full px-4 py-3 border border-steel/20 rounded-lg focus:ring-2 focus:ring-power/20 focus:border-power bg-white text-ink transition-colors"
                        disabled={isSubmitting}
                    >
                        <option value="">Select a theme pack...</option>
                        {selectedTemplate.themePacks.map(themePack => (
                            <option key={themePack.id} value={themePack.id}>
                                {themePack.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}