import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import Header from "@/componets/header/Header";
import Footer from "@/componets/footer/Footer";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const metadata: Metadata = {
  title: "Supercanais",
  description: "Um site para você assistir tv online de graça. Selecione seu programa de tv favorito ou encontre outros.",
  openGraph: {
    title: "Supercanais  — canais de tv",
    description:
      "Assista tv online grátis, canais abertos tudo livre",
    url: baseUrl,
    siteName: "Supercanais",
    images: [
      {
        url: "/logo/supercanais-logo.png",
        width: 1200,
        height: 630,
        alt: "Supercanais — imagem de compartilhamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/clappr@0.3.13/dist/clappr.min.js" defer></script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EE3JQHNF34"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EE3JQHNF34');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
