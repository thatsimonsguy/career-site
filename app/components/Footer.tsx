'use client';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-600 py-6 border-t">
            <div className="max-w-6xl mx-auto px-8 flex justify-center space-x-6">
                <a
                    href="https://github.com/thatsimonsguy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-900 flex items-center space-x-2"
                >
                    <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
                    <span>GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/matt-simons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-900 flex items-center space-x-2"
                >
                    <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </footer>
    );
}
