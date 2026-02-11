"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Web Design",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format message for WhatsApp
        const text = `Halo DEVELZY,\n\nSaya ${formData.name} (${formData.email}).\nSaya tertarik dengan layanan: ${formData.service}.\n\nPESAN:\n${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const waUrl = `https://wa.me/6285879584257?text=${encodedText}`;

        // Redirect to WhatsApp
        window.open(waUrl, '_blank');
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <ScrollReveal className="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                            Mari <span className="text-gradient">Berkolaborasi</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Siap untuk memulai proyek digital Anda? Isi form di bawah ini dan tim kami akan segera menghubungi Anda.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start', gap: '4rem' }}>
                    {/* Contact Info */}
                    <ScrollReveal className="fade-left">
                        <div className="glass" style={{ padding: '3.5rem', borderRadius: '30px', height: '100%' }}>
                            <h3 className="font-heading" style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Informasi Kontak</h3>

                            <div className="contact-info-grid">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div className="contact-icon-box" style={{ margin: 0 }}>📍</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Lokasi</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Tegal, Jawa Tengah, Indonesia</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div className="contact-icon-box" style={{ margin: 0 }}>📧</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>develzy@gmail.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div className="contact-icon-box" style={{ margin: 0 }}>📱</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>WhatsApp</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>0858-7958-4257</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div className="contact-icon-box" style={{ margin: 0 }}>🕒</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Jam Kerja</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>24/7 Pelayanan</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--card-border)' }}>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic' }}>
                                    "Kami menjamin respon cepat dalam waktu kurang dari 24 jam."
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal className="fade-right">
                        <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Masukkan nama Anda"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Alamat Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="email@perusahaan.com"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Layanan yang Dibutuhkan</label>
                                    <select
                                        name="service"
                                        className="form-input"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option>Web Application</option>
                                        <option>Website Profile</option>
                                        <option>E-Commerce</option>
                                        <option>Mobile App</option>
                                        <option>IoT Solution</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Pesan / Detail Proyek</label>
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Ceritakan sedikit tentang proyek Anda..."
                                        className="form-input"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                                    Kirim Pesan ke WhatsApp
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
