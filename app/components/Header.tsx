'use client';

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm py-4 px-8 sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-red-900">Matt Simons</div>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li><a href="#home" className="hover:text-red-900">Home</a></li>
                    <li><a href="#public-speaking" className="hover:text-red-900">Public Speaking</a></li>
                    <li><a href="#projects" className="hover:text-red-900">Projects</a></li>
                    <li><a href="#contact" className="hover:text-red-900">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}