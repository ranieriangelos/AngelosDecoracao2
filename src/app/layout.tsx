import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../styles/globals.css";
import Header from '../components/Header';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Angelos Decoração - Cortinas e Persinas para toda Região Metropolitana do Recife',
  description: 'Compre sua cortina ou persiana, lavagem de cortinas e persianas.',
  icons: {
    icon: '/images/icon.png',  // Coloque o caminho do favicon aqui
  },
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
