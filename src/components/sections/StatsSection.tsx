import ScrollReveal from "@/components/ScrollReveal";

export default function StatsSection() {
    const stats = [
        { label: "Proyek Selesai", value: "50+", desc: "Solusi digital yang diluncurkan" },
        { label: "Klien Puas", value: "30+", desc: "Kemitraan jangka panjang" },
        { label: "Pengalaman", value: "5+", valueSuffix: "Tahun", desc: "Expertise di industri tech" },
        { label: "Rating Layanan", value: "4.9", valueSuffix: "/5", desc: "Berdasarkan review klien" }
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                    {stats.map((stat, idx) => (
                        <ScrollReveal key={idx} className="fade-up" delay={idx * 100}>
                            <div style={{ textAlign: 'center' }}>
                                <div className="text-gradient" style={{
                                    fontSize: '3.5rem',
                                    fontWeight: '800',
                                    fontFamily: 'Space Grotesk',
                                    marginBottom: '0.5rem',
                                    letterSpacing: '-2px'
                                }}>
                                    {stat.value}
                                    {stat.valueSuffix && (
                                        <span style={{ fontSize: '1.5rem', marginLeft: '2px', color: 'var(--text-primary)', verticalAlign: 'middle' }}>
                                            {stat.valueSuffix}
                                        </span>
                                    )}
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '700' }}>{stat.label}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
