import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function PortfolioSection() {
    const featuredProjects = [
        {
            title: "E-Commerce System",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
            category: "Web Application"
        },
        {
            title: "Company Branding",
            image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=600&q=80",
            category: "Website"
        },
        {
            title: "Mobile Solution",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
            category: "Mobile App"
        },
        {
            title: "Smart IoT Dashboard",
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80",
            category: "IoT Solution"
        }
    ];

    return (
        <section id="portfolio" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <ScrollReveal className="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Proyek Terbaru</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Eksplorasi karya terbaik kami dalam membangun solusi digital.</p>
                    </div>
                </ScrollReveal>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))' }}>
                    {featuredProjects.map((project, index) => (
                        <ScrollReveal key={index} className="scale-in" delay={index * 150}>
                            <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.2rem 0.8rem', background: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                        {project.category}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Solusi digital kustom yang dirancang untuk performa tinggi.</p>
                                    <Link href="/portfolio" style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Lihat Detail <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link href="/portfolio" className="btn btn-outline">Lihat Seluruh Portfolio</Link>
                </div>
            </div>
        </section>
    );
}
