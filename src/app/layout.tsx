import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AW GOTRAVEL | Luxury Travel Planning & Concierge Services",
  description:
    "AW GOTRAVEL LLC provides luxury travel planning, bespoke itinerary design, hotel and flight booking assistance, vacation package coordination, and personal travel concierge services.",
  keywords: [
    "luxury travel agency",
    "travel planning",
    "bespoke itineraries",
    "travel concierge",
    "AW GOTRAVEL",
    "booking assistance",
  ],
  openGraph: {
    title: "AW GOTRAVEL | Luxury Travel Planning & Concierge Services",
    description:
      "Bespoke luxury travel planning, itinerary design, and personal concierge services for discerning travelers.",
    url: "https://www.awgotravel.com",
    siteName: "AW GOTRAVEL",
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
      className={`${raleway.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
