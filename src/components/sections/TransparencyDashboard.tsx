"use client";

import ScrollReveal from "@/components/ScrollReveal";

const steps = [
    { title: "Discovery", progress: 100, status: "Done" },
    { title: "UI/UX Design", progress: 100, status: "Done" },
    { title: "Development", progress: 65, status: "In Progress" },
    { title: "QA Testing", progress: 0, status: "Pending" }
];

export default function TransparencyDashboard() {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="grid transparency-grid" style={{ alignItems: 'center' }}>

                    <ScrollReveal className="fade-left">
                        <div>
                            <h2 className="font-heading transparency-title" style={{ marginBottom: '1.5rem' }}>
                                Kendalikan Proyek <span className="text-gradient">Dalam Satu Genggaman</span>
                            </h2>
                            <p className="transparency-desc" style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                                Kami tidak suka bekerja dalam gelap. Setiap klien DEVELZY mendapatkan akses ke Dashboard Progres Real-Time. Anda bisa memantau perkembangan proyek setiap saat tanpa perlu repot bertanya balik.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>✓</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>Laporan Real-Time</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Update otomatis setiap ada perubahan kode.</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)' }}>✓</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>Transparansi Penuh</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Lihat detail pengerjaan langkah demi langkah.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="fade-right">
                        <div className="glass transparency-card" style={{ position: 'relative', overflow: 'hidden' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Dashboard Proyek</div>
                                <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', padding: '0.4rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                    Active Project
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {steps.map((step, idx) => (
                                    <div key={idx}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                                            <span style={{ fontWeight: 'bold' }}>{step.title}</span>
                                            <span style={{ color: step.progress === 100 ? '#10b981' : 'var(--text-secondary)' }}>{step.status}</span>
                                        </div>
                                        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                            <div style={{
                                                width: `${step.progress}%`,
                                                height: '100%',
                                                background: step.progress === 100 ? '#10b981' : 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                                                borderRadius: '10px',
                                                transition: 'width 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
                                            }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--card-border)', overflow: 'hidden' }}>
                                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)', opacity: 0.5 }}></div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Project Manager</div>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>DEVELZY Team</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
