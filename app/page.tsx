'use client';

import ChatBox from './components/ChatBox';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <main className="min-h-screen bg-gray-100 text-gray-900">
                <section
                    className="relative bg-cover bg-center py-12"
                    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
                >
                    <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-8">
                        <div className="w-full max-w-500 md:w-2/3">
                            <ChatBox />
                        </div>
                        <div className="w-full md:w-1/3">
                            <img
                                src="/headshot.png"
                                alt="Matt Simons Headshot"
                                width={400}
                                height={400}
                                className="rounded-full shadow-lg"
                            />
                        </div>
                    </div>
                </section>
                <style jsx>{`
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1.0s ease forwards;
}
`}</style>
            </main>
            <Footer />
        </div>
    );
}
