'use client';

import Image from "next/image";
import { FaCalendar, FaVideo } from "react-icons/fa";
import { featuredTalks } from "@/data/featuredTalks";

export default function FeaturedTalks() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Featured Talks</h2>
                <p className="text-center text-gray-600 mb-10">
                    Highlights from recent speaking engagements and presentations.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {featuredTalks.map((talk, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
                        >
                            {/* Thumbnail Image */}
                            <a
                                href={talk.recordingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative h-40"
                            >
                                <Image
                                    src={talk.image}
                                    alt={talk.title}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                                {talk.recordingUrl && (
                                    <span className="absolute top-2 right-2 bg-gray-200 text-xs text-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                                        <FaVideo className="text-sm" /> Recording Available
                                    </span>
                                )}
                            </a>

                            <div className="p-5 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-lg font-semibold text-black mb-1">{talk.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                                        <FaCalendar className="text-xs" />
                                        {talk.event} &middot; {talk.year}
                                    </p>
                                    <p className="text-sm text-gray-700 mb-3">{talk.description}</p>

                                    {talk.tags && talk.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {talk.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {talk.recordingUrl ? (
                                    <a
                                        href={talk.recordingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 text-sm font-medium text-blue-600 hover:underline flex items-center gap-1"
                                    >
                                        Watch Recording →
                                    </a>
                                ) : (
                                    <span className="mt-2 text-sm font-medium text-gray-500 italic">
                                        Recording not available
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
