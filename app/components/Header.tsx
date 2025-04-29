'use client';

import Link from "next/link";

interface HeaderProps {
    isDimmed?: boolean;
}

export default function Header({ isDimmed = false }: HeaderProps) {
    return (
        <header className={`w-full bg-white shadow-sm py-4 px-8 sticky top-0 z-50 transition-all duration-300 ${isDimmed ? 'blur-sm opacity-50 pointer-events-none' : ''}`}>
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-red-900">Matt Simons</div>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/public-speaking">Public Speaking</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}