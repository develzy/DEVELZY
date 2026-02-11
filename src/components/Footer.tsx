import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo text-gradient" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>DEVELZY</div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Solusi Digital Terpercaya untuk Transformasi Kebutuhan Anda. Kami membangun masa depan digital dengan inovasi dan kualitas tanpa kompromi.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Navigasi</h4>
                        <ul>
                            <li><Link href="/">Beranda</Link></li>
                            <li><Link href="/layanan">Layanan</Link></li>
                            <li><Link href="/portfolio">Portofolio</Link></li>
                            <li><Link href="/tentang">Tentang Kami</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Layanan</h4>
                        <ul>
                            <li><Link href="/layanan#web-application">Web Application</Link></li>
                            <li><Link href="/layanan#website">Website</Link></li>
                            <li><Link href="/layanan#mobile-application">Mobile App</Link></li>
                            <li><Link href="/layanan#iot">IoT Solution</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Kontak Kami</h4>
                        <p>Tegal, Jawa Tengah, Indonesia</p>
                        <p>develzy@gmail.com</p>
                        <p>0858-7958-4257</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DEVELZY. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
