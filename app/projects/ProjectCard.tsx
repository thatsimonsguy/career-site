// /app/projects/ProjectCard.tsx
'use client';

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/Project";

interface ProjectCardProps {
    project: Project;
    isActive: boolean;
    isInactive: boolean;
    setActiveProjectTitle: (title: string | null) => void;
}

export default function ProjectCard({ project, isActive, isInactive, setActiveProjectTitle }: ProjectCardProps) {
    const mainImageSrc = project.images[0]?.src || "/placeholder.jpg";
    const cardRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: React.MouseEvent) => {
        if ((event.target as HTMLElement).closest("a")) {
            return; // Don't collapse card if clicking on a link
        }
        if (isActive) {
            setActiveProjectTitle(null);
        } else {
            setActiveProjectTitle(project.title);
        }
    };

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (isActive && cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setActiveProjectTitle(null);
            }
        }

        if (isActive) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.body.classList.add("overflow-hidden");
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.body.classList.remove("overflow-hidden");
        };
    }, [isActive, setActiveProjectTitle]);

    return (
        <>
            {isActive && (
                <div className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 opacity-100"></div>
            )}
            <div
                ref={cardRef}
                className={`bg-white rounded-lg shadow-md flex flex-col cursor-pointer transition-all duration-300 ease-in-out transform ${isActive ? "fixed top-1/2 left-1/2 z-50 p-8 bg-white max-w-3xl max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 scale-100" :
                    isInactive ? "opacity-30 blur-sm pointer-events-none" :
                        "hover:scale-105"
                    }`}
                onClick={handleClick}
            >
                {/* Main Image */}
                <div className="relative w-full flex-none h-80">
                    <Image
                        src={mainImageSrc}
                        alt={project.title}
                        fill
                        className="object-cover rounded-md"
                    />
                </div>

                {/* Scrollable Content */}
                <div className="flex-grow p-6">
                    <h3 className="text-xl font-semibold mb-2 text-red-900">
                        {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{project.shortDescription}</p>

                    {isActive && (
                        <div className="mt-4 space-y-4">
                            {/* Full Description */}
                            <p className="text-gray-800 whitespace-pre-line">{project.fullDescription}</p>

                            {/* Additional Images */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.images.map((image, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <a href={image.src} target="_blank" rel="noopener noreferrer" className="relative w-full h-48 block group">
                                            <Image
                                                src={image.src}
                                                alt={image.caption || project.title}
                                                fill
                                                className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </a>
                                        {image.caption && (
                                            <span className="text-sm text-gray-500 mt-2 text-center">
                                                {image.caption}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Links */}
                            {project.links && project.links.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold mb-2">Related Links</h4>
                                    <ul className="list-disc list-inside text-blue-600">
                                        {project.links.map((link, index) => (
                                            <li key={index}>
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
