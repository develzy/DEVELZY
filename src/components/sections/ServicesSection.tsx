import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesSection() {
    return (
        <section id="services" className="section-padding">
            <div className="container">
                <ScrollReveal className="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Layanan Unggulan Kami</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Solusi digital lengkap untuk meningkatkan kredibilitas dan jangkauan pasar Anda.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))' }}>
                    <ScrollReveal className="fade-up" delay={100}>
                        <div className="card">
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <h3>Sistem Informasi & Web App</h3>
                            <p>Sistem Akademik Sekolah/Pesantren, Manajemen Inventaris Kantor, dan dashboard kustom.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="fade-up" delay={200}>
                        <div className="card">
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </div>
                            <h3>Website & E-Commerce</h3>
                            <p>Landing Page UMKM, Profil Sekolah/Instansi, dan Toko Online modern yang SEO Friendly.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="fade-up" delay={300}>
                        <div className="card">
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                            <h3>Mobile Application</h3>
                            <p>Aplikasi monitoring santri/siswa, sistem absensi karyawan, hingga aplikasi kasir UMKM.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="fade-up" delay={400}>
                        <div className="card">
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                            </div>
                            <h3>Internet of Things (IoT)</h3>
                            <p>Smart Office, Monitoring energi industri, dan otomasi pertanian/peternakan cerdas.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
