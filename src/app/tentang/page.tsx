import AboutSection from "@/components/sections/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami - DEVELZY | Visi, Misi & Tim",
    description: "Kenali lebih dekat DEVELZY, tim profesional di balik solusi digital terbaik untuk bisnis Anda. Visi, misi, dan nilai-nilai kami.",
};

export default function TentangPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="container">
                    <div className="hero-content animate-fade-in" style={{ maxWidth: '800px' }}>
                        <h1 className="font-heading" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                            Tentang <span className="text-gradient">DEVELZY</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                            Mitra terpercaya dalam transformasi digital bisnis Indonesia sejak 2020.
                        </p>
                    </div>
                </div>
                <div className="hero-blob"></div>
            </section>

            {/* About Content */}
            <AboutSection />
        </main>
    );
}
