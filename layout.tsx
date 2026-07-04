import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abrekgear.com"),
  title: {
    default: "Abrek Gear | Sahada Test Edilmiş Taktik Giyim",
    template: "%s | Abrek Gear",
  },
  description:
    "Abrek Gear, profesyoneller için tasarlanmış premium taktik giyim markasıdır. Tişört, polar, hoodie, şapka, patch ve taktik aksesuar koleksiyonlarını keşfedin.",
  keywords: [
    "taktik giyim",
    "abrek gear",
    "premium outdoor giyim",
    "taktik hoodie",
    "taktik tişört",
  ],
  openGraph: {
    title: "Abrek Gear | Sahada Test Edilmiş Taktik Giyim",
    description: "Profesyoneller için taktik giyim.",
    url: "https://www.abrekgear.com",
    siteName: "Abrek Gear",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
