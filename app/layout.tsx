import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Upepo Insights - Africa's Premier Cloud & Cyber Research Platform",
  description: "Leading research, analytics, and knowledge-intelligence for cloud computing and cybersecurity in Africa. Reports, insights, and data-driven analysis.",
  keywords: ["cloud computing", "cybersecurity", "Africa tech", "research", "analytics", "AWS", "DevOps", "insights"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
