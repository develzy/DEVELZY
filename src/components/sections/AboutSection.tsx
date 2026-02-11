import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                {/* Header */}
                <ScrollReveal className="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                            Tentang <span className="text-gradient">DEVELZY</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                            Mitra strategis Anda dalam membangun masa depan digital yang inovatif.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Story */}
                <ScrollReveal className="fade-up">
                    <div className="glass" style={{ padding: '4rem', borderRadius: '30px', marginBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-primary)', filter: 'blur(100px)', opacity: '0.1' }}></div>
                        <h3 className="font-heading" style={{ fontSize: '2.25rem', marginBottom: '2rem', textAlign: 'center' }}>
                            Cerita Kami
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.15rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>DEVELZY</strong> lahir untuk mendemokrasi teknologi berkualitas tinggi bagi berbagai sektor di Indonesia. Kami spesialis dalam membangun ekosistem digital untuk <strong style={{ color: 'var(--text-primary)' }}>Sekolah, Pondok Pesantren, UMKM, hingga Perkantoran Modern</strong>. Kami bukan sekadar vendor, melainkan <strong style={{ color: 'var(--accent-primary)' }}>partner digitalisasi</strong> yang berdedikasi menciptakan sistem yang efisien, mudah digunakan, dan tepat sasaran.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Vision & Mission */}
                <div className="grid" style={{ marginBottom: '5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))' }}>
                    <ScrollReveal className="fade-left">
                        <div className="card" style={{ height: '100%', borderLeft: '4px solid var(--accent-primary)' }}>
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                            <h3 className="font-heading" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Visi Kami</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Menjadi katalisator utama transformasi digital di Indonesia, dikenal karena inovasi disruptif dan kualitas tanpa cela yang memberdayakan setiap lini bisnis.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="fade-right">
                        <div className="card" style={{ height: '100%', borderLeft: '4px solid var(--accent-secondary)' }}>
                            <div style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                            </div>
                            <h3 className="font-heading" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Misi Kami</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Menyediakan ekosistem solusi digital yang intuitif, aman, dan skalabel yang dirancang khusus untuk mempercepat pencapaian target strategis klien kami.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Why Choose Us */}
                <div style={{ marginTop: '6rem' }}>
                    <ScrollReveal className="fade-up">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h3 className="font-heading" style={{ fontSize: '2.5rem' }}>Mengapa Memilih Kami?</h3>
                        </div>
                    </ScrollReveal>

                    <div className="bento-grid">
                        <ScrollReveal className="scale-in bento-item bento-large" delay={100}>
                            <div className="card h-full">
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                                </div>
                                <h4 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Kualitas Terjamin</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    Kami menerapkan standar koding internasional dengan pengujian ketat di setiap tahap pengembangan. Setiap baris kode ditulis dengan presisi untuk memastikan keamanan dan performa maksimal.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="bento-stack">
                            <ScrollReveal className="scale-in bento-item" delay={200}>
                                <div className="card">
                                    <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                                    </div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Pengerjaan Cepat</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Metodologi Agile untuk pengiriman project yang efisien.</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal className="scale-in bento-item" delay={300}>
                                <div className="card">
                                    <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                    </div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Transparansi Penuh</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Laporan progres berkala dan komunikasi terbuka.</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal className="scale-in bento-item bento-medium" delay={400}>
                            <div className="card h-full">
                                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Dukungan 24/7</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                    Tim kami siap membantu Anda kapan saja, memastikan sistem Anda tetap online dan berjalan tanpa hambatan.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
