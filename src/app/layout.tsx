import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AW GO TRAVEL | Premium Travel Agency",
  description:
    "AW GO TRAVEL LLC - Your premium travel agency for unforgettable experiences. Expert travel planning, exclusive destinations, and personalized service.",
  keywords: [
    "travel agency",
    "luxury travel",
    "vacation planning",
    "travel booking",
    "AW GO TRAVEL",
  ],
  openGraph: {
    title: "AW GO TRAVEL | Premium Travel Agency",
    description:
      "Your premium travel agency for unforgettable experiences worldwide.",
    url: "https://www.awgotravel.com",
    siteName: "AW GO TRAVEL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
