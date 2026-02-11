import ScrollReveal from "@/components/ScrollReveal";

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            desc: "Kami mulai dengan memahami visi, target pasar, dan kebutuhan spesifik bisnis Anda untuk merumuskan strategi digital yang tepat.",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        },
        {
            number: "02",
            title: "UI/UX Design",
            desc: "Tim desain kami menciptakan konsep visual yang modern, intuitif, dan fokus pada pengalaman pengguna yang berkesan.",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
        },
        {
            number: "03",
            title: "Development",
            desc: "Proses koding dilakukan dengan standar industri tertinggi menggunakan teknologi terbaru untuk performa yang optimal.",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        },
        {
            number: "04",
            title: "Testing & Launch",
            desc: "Project melalui pengujian ketat sebelum diluncurkan untuk memastikan segalanya berjalan sempurna tanpa celah.",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        }
    ];

    return (
        <section id="process" className="section-padding">
            <div className="container">
                <ScrollReveal className="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                            Alur Kerja <span className="text-gradient">Profesional</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                            Bagaimana kami mengubah ide Anda menjadi produk digital yang luar biasa.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', position: 'relative' }}>
                    {/* Connector Line (Desktop Only) */}
                    <div className="desktop-only" style={{
                        position: 'absolute',
                        top: '45px',
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'linear-gradient(to right, transparent, var(--card-border), transparent)',
                        zIndex: 0
                    }}></div>

                    {steps.map((step, idx) => (
                        <ScrollReveal key={idx} className="fade-up" delay={idx * 150}>
                            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '30px',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--card-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 2.5rem',
                                    position: 'relative',
                                    color: 'var(--accent-primary)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'var(--transition-smooth)'
                                }} className="process-icon-container">
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        right: '-15px',
                                        width: '36px',
                                        height: '36px',
                                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.85rem',
                                        fontWeight: 'bold',
                                        color: 'white',
                                        boxShadow: '0 5px 15px rgba(59,130,246,0.4)'
                                    }}>
                                        {step.number}
                                    </div>
                                    {step.icon}
                                </div>
                                <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>{step.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', padding: '0 1rem' }}>
                                    {step.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
