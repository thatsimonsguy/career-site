// /app/public-speaking/page.tsx
'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PublicSpeakingHero from "./PublicSpeakingHero";
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