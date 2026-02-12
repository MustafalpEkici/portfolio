import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'; // Google Analytics kütüphanesi

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustafa Alp Ekici | Researcher",
  description: "Portfolio of Mustafa Alp Ekici",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar /> 
        {children}
        
        {/* Senin Ölçüm Kimliğin: G-QSXQMZXV1E */}
        <GoogleAnalytics gaId="G-QSXQMZXV1E" />
      </body>
    </html>
  );
}