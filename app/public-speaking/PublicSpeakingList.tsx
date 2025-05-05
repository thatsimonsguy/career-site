'use client';

import { talks } from "@/data/talks";
import { FaVideo } from "react-icons/fa";

// Group talks by title
const groupedTalks = talks.reduce((acc, talk) => {
    const key = talk.title;
    if (!acc[key]) acc[key] = [];
    acc[key].push(talk);
    return acc;
}, {} as Record<string, typeof talks>);

export default function PublicSpeakingList() {
    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Past Speaking Engagements
                </h2>
                <p className="text-center text-gray-600 mb-10">
                    A comprehensive list of previous talks and presentations.
                </p>

                <div className="space-y-4">
                    {Object.entries(groupedTalks).map(([title, instances], index) => {
                        const recording = instances.find(t => t.recordingUrl)?.recordingUrl;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow p-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-black">{title}</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {instances.map((talk, i) => (
                                            <span
                                                key={i}
                                                className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                                            >
                                                {talk.event} · {talk.year}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {recording && (
                                    <a
                                        href={recording}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 md:mt-0 flex items-center text-blue-600 hover:underline"
                                    >
                                        <FaVideo className="mr-2" /> Watch Recording
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
