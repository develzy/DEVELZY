"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Berapa lama waktu pengerjaan untuk satu project?",
            answer: "Waktu pengerjaan bervariasi tergantung kompleksitasnya. Landing page biasanya memakan waktu 1-2 minggu, sementara aplikasi web atau mobile yang kompleks bisa memakan waktu 1-3 bulan. Kami selalu memberikan timeline yang jelas di awal project."
        },
        {
            question: "Apakah saya akan mendapatkan dukungan teknis setelah pengerjaan selesai?",
            answer: "Tentu! Kami memberikan masa pemeliharaan gratis selama 1-3 bulan (tergantung paket) untuk memastikan sistem berjalan lancar. Setelah itu, Anda juga bisa berlangganan paket maintenance kami."
        },
        {
            question: "Bagaimana sistem pembayarannya?",
            answer: "Sistem pembayaran kami biasanya terbagi dalam 2-3 termin (Down Payment, Milestone, dan Final). Kami sangat transparan dalam kontrak kerja untuk melindungi kenyamanan kedua belah pihak."
        },
        {
            question: "Apakah website yang dibuat sudah SEO Friendly?",
            answer: "Ya, semua website yang kami kembangkan dibangun dengan prinsip SEO Dasar (on-page), kecepatan loading yang optimal, dan struktur metadata yang benar untuk memudahkan Google meriset website Anda."
        },
        {
            question: "Bisakah saya mengelola konten website sendiri?",
            answer: "Sangat bisa. Kami menyediakan Content Management System (CMS) yang mudah digunakan, atau jika menggunakan teknologi kustom, kami akan memberikan panduan pengelolaan konten untuk Anda."
        }
    ];

    return (
        <section id="faq" className="section-padding">
            <div className="container">
                <ScrollReveal className="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                            Pertanyaan <span className="text-gradient">Umum</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                            Beberapa hal yang sering ditanyakan oleh klien kami.
                        </p>
                    </div>
                </ScrollReveal>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, idx) => (
                        <ScrollReveal key={idx} className="fade-up" delay={idx * 100}>
                            <div
                                className="glass"
                                style={{
                                    marginBottom: '1rem',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: `1px solid ${openIndex === idx ? 'var(--accent-primary)' : 'var(--card-border)'}`,
                                    transition: 'var(--transition-smooth)'
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    style={{
                                        width: '100%',
                                        padding: '1.5rem 2rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    <span style={{ fontSize: '1.1rem', fontWeight: '600', paddingRight: '1.5rem' }}>{faq.question}</span>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0)',
                                        transition: 'transform 0.3s ease',
                                        color: openIndex === idx ? 'var(--accent-primary)' : 'var(--text-secondary)'
                                    }}>+</span>
                                </button>
                                <div
                                    style={{
                                        maxHeight: openIndex === idx ? '500px' : '0',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s cubic-bezier(0, 1, 0, 1)',
                                        background: 'rgba(255,255,255,0.02)'
                                    }}
                                >
                                    <div style={{ padding: '0 2rem 2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                        {faq.answer}
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
