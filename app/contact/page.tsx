'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-4xl font-bold text-red-900 mb-6">Contact</h1>
                <Image
                    src="images/DSC_3058.JPG"
                    alt="Under construction"
                    width={300}
                    height={300}
                    className="mb-6"
                />
                <p className="text-gray-700 text-lg">
                    🚧 Matt’s still building this page.
                    <br></br>In the meantime, please enjoy this picture of a sunbathing dog.
                </p>
            </main>
            <Footer />
        </>
    );
}
