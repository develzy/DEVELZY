"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function TrustBar() {
    const technologies = [
        "Next.js", "TypeScript", "React Native", "Node.js", "Python", "Flutter", "Tailwind CSS", "AWS"
    ];

    return (
        <section style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
            <div className="container">
                <ScrollReveal className="fade-up">
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        Trusted Technologies We Use
                    </p>
                </ScrollReveal>

                <ScrollReveal className="fade-up" delay={200}>
                    <div className="trust-bar-flex">
                        {technologies.map((tech, idx) => (
                            <span key={idx} className="tech-stack-item font-heading">
                                {tech}
                            </span>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
