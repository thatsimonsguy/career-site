// /app/public-speaking/page.tsx
'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { talks } from "@/data/talks";
import Image from "next/image";
import PublicSpeakingHero from "./PublicSpeakingHero";
import PublicSpeakingMap from "./PublicSpeakingMap";

export default function PublicSpeakingPage() {
    return (
        <>
            <Header />
            <PublicSpeakingHero />
            <PublicSpeakingMap />
            <main className="max-w-6xl mx-auto py-8 px-4">
                {/* Talks List */}
                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-center">Speaking History</h2>
                    <div className="space-y-8">
                        {talks.sort((a, b) => b.year - a.year).map((talk, index) => (
                            <div key={index} className="border-b pb-4">
                                <h3 className="text-2xl font-bold text-red-900">{talk.title}</h3>
                                <p className="text-gray-700">
                                    {talk.event} &bull; {talk.location} &bull; {talk.year}
                                </p>
                                {talk.recordingUrl && (
                                    <a
                                        href={talk.recordingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline mt-2 inline-block"
                                    >
                                        Watch Recording
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

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