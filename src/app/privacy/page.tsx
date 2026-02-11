import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | DEVELZY",
    description: "Kebijakan privasi penggunaan layanan DEVELZY.",
};

export default function PrivacyPage() {
    return (
        <main className="section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="font-heading" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Privacy <span className="text-gradient">Policy</span></h1>

                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p>Terakhir diperbarui: 11 Februari 2026</p>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Informasi yang Kami Kumpulkan</h2>
                        <p>Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami melalui formulir kontak, WhatsApp, dan penggunaan fitur Price Builder kami.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>2. Penggunaan Informasi</h2>
                        <p>Informasi yang kami kumpulkan digunakan untuk menyediakan, memelihara, dan meningkatkan layanan kami, serta untuk berkomunikasi dengan Anda mengenai proyek dan penawaran kami.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Perlindungan Data</h2>
                        <p>DEVELZY berkomitmen untuk menjaga keamanan data Anda. Kami menerapkan langkah-langika teknis yang diperlukan untuk mencegah akses yang tidak sah atau pengungkapan informasi Anda.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>4. Layanan Pihak Ketiga</h2>
                        <p>Kami mungkin menggunakan layanan pihak ketiga seperti WhatsApp atau analitik web untuk membantu operasional kami. Pihak ketiga ini memiliki kebijakan privasi mereka sendiri.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>5. Kontak Kami</h2>
                        <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui kontak yang tersedia di website ini.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
