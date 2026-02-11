import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | DEVELZY",
    description: "Syarat dan ketentuan penggunaan layanan DEVELZY.",
};

export default function TermsPage() {
    return (
        <main className="section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="font-heading" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Terms of <span className="text-gradient">Service</span></h1>

                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p>Terakhir diperbarui: 11 Februari 2026</p>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Penerimaan Ketentuan</h2>
                        <p>Dengan mengakses website DEVELZY atau menggunakan layanan kami, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>2. Cakupan Layanan</h2>
                        <p>DEVELZY menyediakan jasa pengembangan perangkat lunak, website, dan aplikasi mobile. Estimasi harga yang dihasilkan oleh Price Builder bersifat awal dan dapat berubah berdasarkan kesepakatan detail fitur.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Kewajiban Klien</h2>
                        <p>Klien setuju untuk memberikan informasi yang akurat dan materi yang diperlukan tepat waktu untuk kelancaran pengerjaan proyek.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>4. Hak Kekayaan Intelektual</h2>
                        <p>Setelah pelunasan pembayaran, hak kepemilikan kode sumber proyek akan diserahkan kepada klien sesuai dengan kesepakatan proyek masing-masing.</p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>5. Batasan Tanggung Jawab</h2>
                        <p>DEVELZY tidak bertanggung jawab atas kerugian tidak langsung yang diakibatkan oleh penggunaan layanan atau gangguan teknis yang berada di luar kendali kami (seperti gangguan dari penyedia hosting pihak ketiga).</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
