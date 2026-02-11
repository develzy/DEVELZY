import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="home" className="hero">
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                <div className="hero-content animate-fade-in" style={{ flex: '1', minWidth: '300px' }}>
                    <h1 className="font-heading">
                        Wujudkan Website Impian Anda Bersama <span className="text-gradient">DEVELZY</span>
                    </h1>
                    <p>
                        Solusi digital kustom untuk <strong>Sekolah, Pesantren, UMKM, hingga Korporasi</strong>.
                        Kami membangun sistem berperforma tinggi dengan desain modern untuk digitalisasi instansi dan bisnis Anda.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link href="#contact" className="btn btn-primary">Mulai Sekarang</Link>
                        <Link href="/portfolio" className="btn btn-outline">Lihat Karya</Link>
                    </div>
                </div>

                <div className="hero-image animate-fade-in" style={{ flex: '1', minWidth: '300px', position: 'relative', zIndex: '2', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '400px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', border: '1px solid var(--card-border)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                            alt="Technology Illustration"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), transparent)' }}></div>
                    </div>
                </div>
            </div>
            <div className="hero-blob"></div>
        </section>
    );
}
