// /app/public-speaking/page.tsx
'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { talks } from "@/data/talks";
import Image from "next/image";
import PublicSpeakingHero from "./PublicSpeakingHero";
import PublicSpeakingMap from "./PublicSpeakingMap";
import PublicSpeakingList from "./PublicSpeakingList";
import PublicSpeakingTopics from "./PublicSpeakingTopics";
import FeaturedTalks from "./FeaturedTalks";

export default function PublicSpeakingPage() {
    return (
        <>
            <Header />
            <PublicSpeakingHero />
            <PublicSpeakingTopics />
            <FeaturedTalks />
            <PublicSpeakingList />
            <Footer />
        </>
    );
}