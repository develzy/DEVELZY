import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingWA from "@/components/FloatingWA";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "DEVELZY | Jasa Pembuatan Website Profesional",
  description: "DEVELZY menyediakan jasa pembuatan website terbaik, desain modern, responsif, dan SEO friendly untuk bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <CustomCursor />
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <FloatingWA />
      </body>
    </html>
  );
}
