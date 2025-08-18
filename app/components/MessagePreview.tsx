'use client';

interface MessagePreviewProps {
    subject: string;
    body: string;
    isSubmitting: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.currentTarget.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
};

export default function MessagePreview({ subject, body, isSubmitting, onChange }: MessagePreviewProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-steel/10 p-6">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-power/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-power" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-ink">Message Preview</h2>
                    <p className="text-sm text-steel">Review and edit your generated message</p>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-ink mb-3">
                        Subject Line
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={subject}
                            onChange={onChange}
                            onKeyDown={handleKeyDown}
                            className="w-full px-4 py-3 border border-steel/20 rounded-lg focus:ring-2 focus:ring-power/20 focus:border-power bg-white text-ink transition-colors pr-12"
                            placeholder="Generated subject will appear here"
                            disabled={isSubmitting}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg className="w-4 h-4 text-steel/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="body" className="block text-sm font-medium text-ink mb-3">
                        Message Body
                    </label>
                    <div className="relative">
                        <textarea
                            id="body"
                            name="body"
                            rows={12}
                            value={body}
                            onChange={onChange}
                            className="w-full px-4 py-3 border border-steel/20 rounded-lg focus:ring-2 focus:ring-power/20 focus:border-power bg-white text-ink resize-vertical font-mono text-sm leading-relaxed transition-colors"
                            placeholder="Generated message will appear here"
                            disabled={isSubmitting}
                        />
                        <div className="absolute top-3 right-3">
                            <svg className="w-4 h-4 text-steel/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-xs text-steel mt-2 flex items-center space-x-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>You can edit this message before sending</span>
                    </p>
                </div>
            </div>
        </div>
    );
}