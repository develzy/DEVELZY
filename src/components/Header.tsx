"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    return (
        <header id="header" className={scrolled ? "scrolled" : ""}>
            <div className="container">
                <nav>
                    <Link href="/" className="logo text-gradient" onClick={() => setMobileMenuOpen(false)}>DEVELZY</Link>

                    {/* Desktop Navigation */}
                    <ul className="nav-links desktop-nav">
                        <li>
                            <Link href="/">Beranda</Link>
                        </li>
                        <li>
                            <Link href="/layanan">Layanan</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Portofolio</Link>
                        </li>
                        <li>
                            <Link href="/tentang">Tentang Kami</Link>
                        </li>
                        <li>
                            <Link href="/kontak">Kontak</Link>
                        </li>
                    </ul>

                    <a href="https://wa.me/6285879584257" className="btn btn-primary desktop-cta">Konsultasi Gratis</a>

                    {/* Hamburger Button */}
                    <button
                        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-inner">
                    <ul className="mobile-nav-links">
                        <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Beranda</Link></li>
                        <li>
                            <Link href="/layanan" onClick={() => setMobileMenuOpen(false)}>Layanan</Link>
                        </li>
                        <li><Link href="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portofolio</Link></li>
                        <li><Link href="/tentang" onClick={() => setMobileMenuOpen(false)}>Tentang</Link></li>
                        <li><Link href="/kontak" onClick={() => setMobileMenuOpen(false)}>Kontak</Link></li>
                    </ul>
                    <div className="mobile-cta-wrapper">
                        <a href="https://wa.me/6285879584257" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Konsultasi Gratis
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
