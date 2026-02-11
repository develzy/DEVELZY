import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
    {
        id: 1,
        name: "Budi Santoso",
        role: "CEO TechStartup",
        content: "DEVELZY membantu kami membangun aplikasi web yang sangat kompleks dengan hasil yang luar biasa. Timnya sangat ahli dan profesional.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Siska Amelia",
        role: "Owner Fashion Brand",
        content: "Website e-commerce kami sekarang sangat cepat dan penjualannya meningkat drastis sejak dikerjakan oleh DEVELZY. Desainnya sangat modern!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Ahmad Fauzi",
        role: "Marketing Manager",
        content: "Respons tim sangat cepat dan kualitas kodingnya sangat rapi. Dokumentasi yang diberikan juga sangat jelas. Sangat merekomendasikan jasa mereka.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=150&auto=format&fit=crop"
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <ScrollReveal className="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Apa Kata Klien Kami</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Kepercayaan klien adalah prioritas utama kami. Berikut adalah pengalaman mereka bekerja bersama DEVELZY.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid">
                    {testimonials.map((testi, index) => (
                        <ScrollReveal key={testi.id} className="fade-up" delay={index * 150}>
                            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#fbbf24' }}>
                                    {[...Array(testi.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>

                                <p style={{
                                    color: 'var(--text-primary)',
                                    fontStyle: 'italic',
                                    marginBottom: '2rem',
                                    flex: 1,
                                    lineHeight: '1.8'
                                }}>
                                    "{testi.content}"
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <img
                                        src={testi.avatar}
                                        alt={testi.name}
                                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>{testi.name}</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
