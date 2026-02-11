import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "Portfolio - DEVELZY | Proyek & Karya Kami",
    description: "Lihat portfolio dan proyek-proyek yang telah kami kerjakan untuk berbagai klien. Hasil kerja berkualitas tinggi dari DEVELZY.",
};

export default function PortfolioPage() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "Web Application",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            description: "Platform e-commerce lengkap dengan sistem pembayaran, inventory management, dan analytics dashboard.",
            tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
            results: "Meningkatkan penjualan online 150% dalam 3 bulan pertama"
        },
        {
            id: 2,
            title: "Company Profile Website",
            category: "Website",
            image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&q=80",
            description: "Website company profile modern dengan CMS untuk perusahaan manufaktur.",
            tech: ["Next.js", "TailwindCSS", "Headless CMS"],
            results: "Meningkatkan kredibilitas dan inquiry dari calon klien 40%"
        },
        {
            id: 3,
            title: "Food Delivery App",
            category: "Mobile Application",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
            description: "Aplikasi mobile untuk layanan pesan antar makanan dengan real-time tracking.",
            tech: ["React Native", "Firebase", "Google Maps API"],
            results: "10,000+ downloads dalam 2 bulan pertama"
        },
        {
            id: 4,
            title: "Smart Home System",
            category: "IoT",
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
            description: "Sistem otomasi rumah pintar dengan kontrol lampu, AC, dan keamanan via mobile app.",
            tech: ["Arduino", "MQTT", "React Native", "Node.js"],
            results: "Menghemat konsumsi listrik hingga 30%"
        },
        {
            id: 5,
            title: "Learning Management System",
            category: "Web Application",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
            description: "Platform pembelajaran online dengan fitur video streaming, quiz, dan sertifikat digital.",
            tech: ["Next.js", "Express", "MongoDB", "AWS"],
            results: "Melayani 5,000+ siswa aktif"
        },
        {
            id: 6,
            title: "Portfolio Personal",
            category: "Website",
            image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80",
            description: "Website portfolio untuk fotografer profesional dengan galeri interaktif.",
            tech: ["Next.js", "Framer Motion", "Cloudinary"],
            results: "Meningkatkan booking klien 60%"
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="container">
                    <div className="hero-content animate-fade-in" style={{ maxWidth: '800px' }}>
                        <h1 className="font-heading" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                            Portfolio <span className="text-gradient">DEVELZY</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                            Hasil kerja keras kami untuk klien yang puas. Setiap project dikerjakan dengan dedikasi penuh dan standar kualitas tertinggi.
                        </p>
                    </div>
                </div>
                <div className="hero-blob"></div>
            </section>

            {/* Portfolio Grid */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid">
                        {projects.map((project, index) => (
                            <ScrollReveal key={project.id} className="scale-in" delay={index * 100}>
                                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                                    <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            padding: '1.5rem'
                                        }}>
                                            <div style={{ padding: '0.25rem 0.75rem', background: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>
                                                {project.category}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ padding: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            {project.description}
                                        </p>

                                        <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {project.tech.map((tech, idx) => (
                                                <span key={idx} style={{ padding: '0.2rem 0.6rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '8px', fontSize: '0.8rem' }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '12px', borderLeft: '3px solid var(--accent-primary)' }}>
                                            <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                                                📊 {project.results}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="glass" style={{ padding: '4rem', borderRadius: '30px', textAlign: 'center' }}>
                        <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Siap Menjadi Klien Berikutnya?
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Mari wujudkan project digital Anda bersama tim profesional DEVELZY.
                        </p>
                        <a href="https://wa.me/6285879584257" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                            Mulai Project Anda
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
