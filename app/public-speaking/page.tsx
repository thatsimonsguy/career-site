// /app/public-speaking/page.tsx
'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { talks } from "@/data/talks";
import Image from "next/image";
import PublicSpeakingHero from "./PublicSpeakingHero";
import PublicSpeakingMap from "./PublicSpeakingMap";
import PublicSpeakingList from "./PublicSpeakingList";

export default function PublicSpeakingPage() {
    return (
        <>
            <Header />
            <PublicSpeakingHero />
            <PublicSpeakingList />
            <main className="max-w-6xl mx-auto py-8 px-4">
                {/* Talks List */}
                

                {/* Call to Action */}
                <section className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Interested in Having Matt Speak?</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Get in touch to discuss keynotes, conference talks, or workshops tailored to your audience.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                        Contact Me
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
}