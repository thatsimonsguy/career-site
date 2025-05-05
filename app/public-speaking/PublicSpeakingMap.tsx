/*
// /app/public-speaking/PublicSpeakingMap.tsx
'use client';

import Image from "next/image";
import { useState } from "react";
import { talks } from "@/data/talks";

interface GroupedLocation {
    latitude: number;
    longitude: number;
    talks: {
        conference: string;
        title: string;
    }[];
}

export default function PublicSpeakingMap() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Simple equirectangular projection conversion
    const getPosition = (lat: number, lon: number) => {
        const x = ((lon + 180) / 360) * 100; // in %
        const y = ((90 - lat) / 180) * 100; // in %
        return { left: `${x}%`, top: `${y}%` };
    };

    // Group talks by latitude and longitude (rounded to 4 decimals)
    const groupedLocations: GroupedLocation[] = [];

    talks.forEach((talk) => {
        if (talk.latitude !== undefined && talk.longitude !== undefined) {
            //const key = `${talk.latitude.toFixed(4)}-${talk.longitude.toFixed(4)}`;
            let group = groupedLocations.find(
                (g) => g.latitude.toFixed(4) === talk.latitude!.toFixed(4) && g.longitude.toFixed(4) === talk.longitude!.toFixed(4)
            );
            if (!group) {
                group = {
                    latitude: talk.latitude,
                    longitude: talk.longitude,
                    talks: [],
                };
                groupedLocations.push(group);
            }
            group.talks.push({
                conference: talk.event,
                title: talk.title,
            });
        }
    });

    return (
        <section className="w-full py-12">
            <div className="relative max-w-6xl mx-auto aspect-[2/1]">
                <Image
                    src="/images/world-map.jpg"
                    alt="World Map"
                    width={1200}
                    height={600}
                    className="rounded-lg"
                />

                {groupedLocations.map((location, idx) => {
                    const pos = getPosition(location.latitude, location.longitude);
                    return (
                        <div
                            key={idx}
                            className="absolute group"
                            style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="w-4 h-4 bg-red-600 rounded-full shadow-lg"></div>

                            {hoveredIndex === idx && (
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs p-2 rounded shadow-md whitespace-nowrap">
                                    {location.talks.map((talk, i) => (
                                        <div key={i} className="mb-1">
                                            <strong>{talk.conference}</strong>
                                            <br />
                                            {talk.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
*/