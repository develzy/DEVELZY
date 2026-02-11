import ContactSection from "@/components/sections/ContactSection";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "Kontak - DEVELZY | Hubungi Kami",
    description: "Hubungi DEVELZY untuk konsultasi gratis. Kami siap membantu mewujudkan solusi digital terbaik untuk bisnis Anda.",
};

export default function KontakPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="container">
                    <ScrollReveal className="fade-up">
                        <div className="hero-content" style={{ maxWidth: '800px' }}>
                            <h1 className="font-heading" style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                                Mari Bicara <span className="text-gradient">Project</span> Anda
                            </h1>
                            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                Konsultasi gratis untuk mengubah ide Anda menjadi solusi digital bernilai tinggi.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
                <div className="hero-blob"></div>
            </section>

            {/* Main Contact Section (Form + Info) */}
            <ContactSection />

            {/* Grid Contact Info - Simplified 2x2 */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <ScrollReveal className="fade-up">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                Informasi <span className="text-gradient">Lengkap</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                Pilih jalur komunikasi yang paling nyaman bagi Anda.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid" style={{ maxWidth: '1000px', margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                        <ScrollReveal className="scale-in" delay={100}>
                            <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>WhatsApp</h3>
                                <a href="https://wa.me/6285879584257" style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '700' }}>
                                    0858-7958-4257
                                </a>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Respon cepat, chat ramah.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="scale-in" delay={200}>
                            <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Email</h3>
                                <a href="mailto:develzy@gmail.com" style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '700' }}>
                                    develzy@gmail.com
                                </a>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Untuk penawaran project formal.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="scale-in" delay={300}>
                            <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Waktu Pelayanan</h3>
                                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>24 / 7 Non-Stop</p>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Kami siap melayani Anda kapan saja.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="scale-in" delay={400}>
                            <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Lokasi Utama</h3>
                                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>Tegal, Indonesia</p>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Jawa Tengah, Remote Available.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
