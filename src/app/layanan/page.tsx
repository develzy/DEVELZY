import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "Layanan Kami - DEVELZY | Solusi Digital Instansi & Kebutuhan",
    description: "Layanan lengkap DEVELZY: Sistem Informasi Sekolah, Website UMKM, Mobile Application, dan IoT untuk transformasi digital Anda.",
};

export default function LayananPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="container">
                    <ScrollReveal className="fade-up">
                        <div className="hero-content" style={{ maxWidth: '800px' }}>
                            <h1 className="font-heading" style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                                Layanan <span className="text-gradient">Premium</span>
                            </h1>
                            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                Solusi digital terintegrasi untuk Sekolah, Pondok Pesantren, UMKM, hingga Perusahaan Besar.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
                <div className="hero-blob"></div>
            </section>

            {/* Services Grid 2-2 */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>

                        {/* Sistem Informasi & Web App */}
                        <ScrollReveal className="fade-up" delay={100}>
                            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </div>
                                <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }} className="font-heading">Sistem Informasi & Web App</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    Digitalisasi operasional dengan sistem kustom. Sangat cocok untuk <strong>Manajemen Akademik Sekolah/Pesantren</strong>, Inventaris Kantor, hingga Dashboard Analytics Korporasi.
                                </p>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Implementasi:</h3>
                                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '2.2', marginBottom: '2.5rem' }}>
                                        <li>✓ Sistem Informasi Akademik (SIAKAD)</li>
                                        <li>✓ Manajemen Pondok Pesantren Terpadu</li>
                                        <li>✓ Sistem ERP & CRM Perusahaan</li>
                                        <li>✓ Portal Administrasi Perkantoran</li>
                                    </ul>
                                </div>
                                <a href="https://wa.me/6285879584257" className="btn btn-primary" style={{ justifyContent: 'center' }}>Konsultasi Sistem</a>
                            </div>
                        </ScrollReveal>

                        {/* Website & E-Commerce */}
                        <ScrollReveal className="fade-up" delay={200}>
                            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                </div>
                                <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }} className="font-heading">Website & E-Commerce</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    Tingkatkan kredibilitas instansi dan penjualan produk. Mulai dari <strong>Website Profil Sekolah</strong> hingga <strong>Toko Online UMKM</strong> yang modern dan SEO-optimized.
                                </p>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Implementasi:</h3>
                                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '2.2', marginBottom: '2.5rem' }}>
                                        <li>✓ Website Profil Instansi & Perusahaan</li>
                                        <li>✓ Landing Page Produk UMKM</li>
                                        <li>✓ E-Commerce (Toko Online) Multipayment</li>
                                        <li>✓ Website Portfolio & Personal Branding</li>
                                    </ul>
                                </div>
                                <a href="https://wa.me/6285879584257" className="btn btn-primary" style={{ justifyContent: 'center' }}>Buat Website</a>
                            </div>
                        </ScrollReveal>

                        {/* Mobile Application */}
                        <ScrollReveal className="fade-up" delay={300}>
                            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                </div>
                                <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }} className="font-heading">Mobile Application</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    Aplikasi Android & iOS untuk akses instan di genggaman. Solusi untuk <strong>Monitoring Santri/Siswa</strong>, Absensi Karyawan, hingga Point of Sales (POS) UMKM.
                                </p>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Implementasi:</h3>
                                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '2.2', marginBottom: '2.5rem' }}>
                                        <li>✓ App Monitoring & Info Akademik</li>
                                        <li>✓ Mobile POS & Kasir UMKM</li>
                                        <li>✓ Sistem Presensi Berbasis GPS</li>
                                        <li>✓ Aplikasi Layanan Publik</li>
                                    </ul>
                                </div>
                                <a href="https://wa.me/6285879584257" className="btn btn-primary" style={{ justifyContent: 'center' }}>Diskusi Mobile App</a>
                            </div>
                        </ScrollReveal>

                        {/* IoT Solution */}
                        <ScrollReveal className="fade-up" delay={400}>
                            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                </div>
                                <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }} className="font-heading">Internet of Things (IoT)</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    Integrasi cerdas antara hardware dan software. Implementasi <strong>Smart School</strong>, Otomasi Kantor, Monitoring Energi Industri, hingga Smart Farming.
                                </p>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Implementasi:</h3>
                                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '2.2', marginBottom: '2.5rem' }}>
                                        <li>✓ Smart Building & Office Automation</li>
                                        <li>✓ Monitoring Sensor Real-time</li>
                                        <li>✓ Sistem Keamanan Pintar</li>
                                        <li>✓ Kontrol Jarak Jauh Berbasis Web/Mobile</li>
                                    </ul>
                                </div>
                                <a href="https://wa.me/6285879584257" className="btn btn-primary" style={{ justifyContent: 'center' }}>Jelajahi Solusi IoT</a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Trust & CTA Section */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <ScrollReveal className="scale-in">
                        <div className="glass" style={{ padding: '5rem 2rem', borderRadius: '40px', textAlign: 'center' }}>
                            <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                                Butuh Solusi <span className="text-gradient">Spesifik?</span>
                            </h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                                Setiap instansi dan bisnis memiliki tantangan unik. Kami siap merancang sistem yang paling sesuai dengan kebutuhan operasional Anda.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="https://wa.me/6285879584257" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                                    Hubungi Kami di WhatsApp
                                </a>
                                <a href="/kontak" className="btn btn-outline" style={{ padding: '1rem 3rem' }}>
                                    Halaman Kontak
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
