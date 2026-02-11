import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function PremiumCTA() {
    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <ScrollReveal className="scale-in">
                    <div className="glass" style={{
                        padding: '5rem 2rem',
                        borderRadius: '40px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                        border: '1px solid var(--accent-primary)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative Background Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            left: '-20%',
                            width: '600px',
                            height: '600px',
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                            filter: 'blur(80px)',
                            zIndex: -1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-50%',
                            right: '-20%',
                            width: '600px',
                            height: '600px',
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                            filter: 'blur(80px)',
                            zIndex: -1
                        }}></div>

                        <h2 className="font-heading" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Siap Digitalisasi <br /> <span className="text-gradient">Kebutuhan & Instansi</span> Anda?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
                            Dari Sekolah hingga Perusahaan, kami siap membantu Anda membangun sistem digital yang efisien dan modern. Konsultasikan kebutuhan Anda sekarang.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Konsultasi Gratis Sekarang
                            </Link>
                            <a href="https://wa.me/6285879584257" target="_blank" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Chat via WhatsApp
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
