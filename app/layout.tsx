import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Venduzz — Gestão multicanal para sellers",
  description:
    "Venda no Mercado Livre, Shopee, Amazon e muito mais. Gerencie anúncios, estoque, pedidos e preços em um único lugar.",
  metadataBase: new URL("https://venduzz.com.br"),
  openGraph: {
    title: "Venduzz — Gestão multicanal para sellers",
    description:
      "Plataforma completa para sellers que querem escalar nos marketplaces brasileiros.",
    url: "https://venduzz.com.br",
    siteName: "Venduzz",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geist.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-800" suppressHydrationWarning>{children}</body>
    </html>
  );
}
