import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "./components/ThemeSwitch";
import FloatingNav from "./components/FloatingNav";
import ScrollProgress from "./components/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnat N. | Software Engineer",
  description: "Personal portfolio showcasing my work in software engineering, web development, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased cursor-none md:cursor-none`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          <ParticleBackground />
          <FloatingNav />
          <ThemeSwitch />
          <div className="relative z-10 min-h-screen bg-white/80 dark:bg-[#111111]/90 backdrop-blur-[2px] text-gray-900 dark:text-gray-300 transition-colors duration-300">
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
