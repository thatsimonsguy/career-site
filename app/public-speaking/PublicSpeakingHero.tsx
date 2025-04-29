// /app/public-speaking/PublicSpeakingHero.tsx
'use client';

import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export default function PublicSpeakingHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        slides: {
            perView: 1,
            spacing: 10,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created(slider) {
            setInterval(() => {
                slider.next();
            }, 4000); 
        },
    });

    // Hardcoded images for now
    const images = [
        "speaking/ams.png",
        "speaking/cccccc.png",
        "speaking/ggabb.png",
        "speaking/IMG-20240530-WA0018.jpg",
        "speaking/map.png",
    ];

    return (
        <section className="w-full bg-black">
            <div
                className="relative max-w-6xl mx-auto bg-cover bg-center py-12"
                style={{ backgroundImage: "url('/images/speaking-bg.png')" }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8">
                    {/* Left 30%: Tagline */}
                    <div className="w-full md:w-3/10 text-center md:text-left space-y-4 flex flex-col justify-start md:justify-center h-full">
                        <h2 className="text-3xl font-bold text-white">
                            Conferences, keynotes, and workshops around the world.
                        </h2>
                    </div>

                    {/* Right 70%: Slideshow */}
                    <div className="w-full md:w-7/10 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg group">
                        <div ref={sliderRef} className="keen-slider h-full w-full">
                            {images.map((src, idx) => (
                                <div className="keen-slider__slide relative" key={idx}>
                                    <Image
                                        src={src}
                                        alt={`Speaking photo ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Arrows */}
                        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => instanceRef.current?.prev()}
                                className="text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                            >
                                ◀
                            </button>
                            <button
                                onClick={() => instanceRef.current?.next()}
                                className="text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                            >
                                ▶
                            </button>
                        </div>
                        {/* Pagination Dots */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                                    className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-white' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
