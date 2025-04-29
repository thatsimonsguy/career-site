'use client';

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ProjectsPage() {
    const [activeProjectTitle, setActiveProjectTitle] = useState<string | null>(null);

    const currentProjects = projects.filter((p) => p.status === "current");
    const pastProjects = projects.filter((p) => p.status === "past");

    return (
        <>
            <Header isDimmed={activeProjectTitle !== null} />

            <main className="max-w-6xl mx-auto py-8 px-4 relative">
                {/* Blur only the headings */}
                <div className={activeProjectTitle ? "transition-all duration-300 blur-sm opacity-50 pointer-events-none" : "transition-all duration-300"}>
                    <h1 className="text-4xl font-bold mb-8 text-red-900">Personal Projects</h1>
                    <h2 className="text-2xl font-semibold mb-6">Current Projects</h2>
                </div>

                {/* Current Projects Grid */}
                <section className="mb-16 relative grid gap-8 md:grid-cols-2">
                    {currentProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            isActive={activeProjectTitle === project.title}
                            isInactive={activeProjectTitle !== null && activeProjectTitle !== project.title}
                            setActiveProjectTitle={setActiveProjectTitle}
                        />
                    ))}
                </section>

                {/* Past Projects */}
                <div className={activeProjectTitle ? "transition-all duration-300 blur-sm opacity-50 pointer-events-none" : "transition-all duration-300"}>
                    <h2 className="text-2xl font-semibold mb-6">Past Projects</h2>
                </div>

                <section className="relative grid gap-8 md:grid-cols-2">
                    {pastProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            isActive={activeProjectTitle === project.title}
                            isInactive={activeProjectTitle !== null && activeProjectTitle !== project.title}
                            setActiveProjectTitle={setActiveProjectTitle}
                        />
                    ))}
                </section>
            </main>

            <Footer />


        </>
    );
}
