"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
    { id: "web", name: "Website Profil", basePrice: 1000000, icon: "🌐" },
    { id: "app", name: "Web Application", basePrice: 3500000, icon: "💻" },
    { id: "mobile", name: "Mobile App", basePrice: 5500000, icon: "📱" },
    { id: "iot", name: "IoT Solution", basePrice: 8500000, icon: "🦾" }
];

const tiers = [
    { id: "basic", name: "Basic", multiplier: 1, desc: "Fitur standar & esensial" },
    { id: "pro", name: "Bisnis", multiplier: 1.5, desc: "Fitur lengkap & kustomisasi" },
    { id: "enterprise", name: "Premium", multiplier: 2.5, desc: "Sistem kompleks & high-security" }
];

export default function QuotationBuilder() {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [selectedTier, setSelectedTier] = useState(tiers[0]);
    const [estimate, setEstimate] = useState(0);
    const [isPromoActive, setIsPromoActive] = useState(false);
    const [currentDiscount, setCurrentDiscount] = useState(0);

    useEffect(() => {
        const today = new Date();
        const dayOfMonth = today.getDate();

        // LOGIKA: Tanggal 1-10
        const dateIsPromo = (dayOfMonth >= 1 && dayOfMonth <= 10);
        setIsPromoActive(dateIsPromo);

        // Diskon Berjenjang
        let discount = 0;
        if (selectedTier.id === 'basic') discount = 5;
        else if (selectedTier.id === 'pro') discount = 10;
        else if (selectedTier.id === 'enterprise') discount = 15;

        setCurrentDiscount(discount);

        let finalPrice = selectedService.basePrice * selectedTier.multiplier;
        if (dateIsPromo && discount > 0) {
            finalPrice = finalPrice * (1 - (discount / 100));
        }
        setEstimate(finalPrice);
    }, [selectedService, selectedTier]);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleConsultation = () => {
        const promoText = (isPromoActive && currentDiscount > 0) ? `(Termasuk Promo -${currentDiscount}%)` : "";
        const text = `Halo DEVELZY, saya ingin konsultasi mengenai proyek:\n\n` +
            `- Jenis: ${selectedService.name}\n` +
            `- Paket: ${selectedTier.name}\n` +
            `- Estimasi: ${formatPrice(estimate)} ${promoText}\n\n` +
            `Mohon info lebih lanjut untuk penawaran resminya. Terima kasih!`;

        window.open(`https://wa.me/6285879584257?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <section id="quotation" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <ScrollReveal className="fade-up">
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                            Digital <span className="text-gradient">Price Builder</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Dapatkan estimasi investasi proyek Anda secara instan. Transparan, cepat, dan tanpa biaya tersembunyi.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid quotation-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {/* Controls */}
                    <ScrollReveal className="fade-left">
                        <div className="glass quotation-controls" style={{ padding: '2.5rem', borderRadius: '30px', height: '100%' }}>
                            <h3 className="font-heading" style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>1. Pilih Jenis Layanan</h3>
                            <div className="quotation-service-grid">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setSelectedService(service)}
                                        className={`quotation-btn ${selectedService.id === service.id ? 'active' : ''}`}
                                    >
                                        <div className="icon">{service.icon}</div>
                                        <div className="name">{service.name}</div>
                                    </button>
                                ))}
                            </div>

                            <h3 className="font-heading" style={{ fontSize: '1.25rem', margin: '2.5rem 0 1.5rem' }}>2. Pilih Level Kompleksitas</h3>
                            <div className="quotation-tier-list">
                                {tiers.map((tier) => (
                                    <button
                                        key={tier.id}
                                        onClick={() => setSelectedTier(tier)}
                                        className={`tier-btn ${selectedTier.id === tier.id ? 'active' : ''}`}
                                    >
                                        <div className="tier-info">
                                            <div className="tier-name">{tier.name}</div>
                                            <div className="tier-desc">{tier.desc}</div>
                                        </div>
                                        <div className="tier-radio"></div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Result Card */}
                    <ScrollReveal className="fade-right">
                        <div className="glass quotation-result-card">
                            <div className="result-glow"></div>

                            <div className="result-content">
                                {isPromoActive && (
                                    <div style={{ marginBottom: '1rem' }}>
                                        <span className="promo-badge">
                                            🔥 PROMO {selectedTier.name} -{currentDiscount}%
                                        </span>
                                    </div>
                                )}
                                <span className="badge">Estimasi Investasi</span>

                                <div className="price-display">
                                    <h4 className="label">Mulai Dari:</h4>
                                    {isPromoActive && (
                                        <div style={{ color: 'var(--text-secondary)', textDecoration: 'line-through', fontSize: '1rem', marginBottom: '0.25rem' }}>
                                            {formatPrice(selectedService.basePrice * selectedTier.multiplier)}
                                        </div>
                                    )}
                                    <div className="text-gradient price-value">
                                        {formatPrice(estimate)}
                                    </div>
                                </div>

                                <div className="features-list">
                                    <div className="feature-item">✓ {selectedService.name} - {selectedTier.name}</div>
                                    <div className="feature-item">✓ Cloud Server High-Performance</div>
                                    <div className="feature-item">✓ Desain Modern & Responsif</div>
                                    <div className="feature-item">✓ Support Pasca Launch</div>
                                </div>

                                <button
                                    onClick={handleConsultation}
                                    className="btn btn-primary cta-btn"
                                >
                                    Dapatkan Penawaran Resmi
                                </button>
                                <p className="disclaimer">
                                    *Harga di atas adalah estimasi awal. Penawaran final menyesuaikan detail fitur.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
