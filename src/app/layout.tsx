import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import { BackgroundBlobs, Footer, Navbar, ThemeProvider } from "@/components/layout";
import { profile } from "@/data/profile";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio.vercel.app";
const description = `${profile.name} — ${profile.title}. 15+ years supporting large-scale maternal, newborn and child nutrition programmes with UNICEF, NHM and AIIMS across India.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — ${profile.title}`, template: `%s · ${profile.name}` },
  description,
  keywords: [
    "Shubha Rawat",
    "public health nutrition",
    "UNICEF",
    "maternal and child nutrition",
    "IYCF",
    "SAM",
    "IMSAM",
    "ICDS",
    "Poshan Abhiyaan",
    "NHM",
    "Uttar Pradesh",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "profile",
    title: `${profile.name} — ${profile.title}`,
    description,
    url: siteUrl,
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: profile.name, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef0fb" },
    { media: "(prefers-color-scheme: dark)", color: "#17152a" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${fredoka.variable}`}>
      <body className="min-h-dvh overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="clay-sm sr-only z-[100] rounded-full bg-primary px-5 py-3 font-bold text-on-primary focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <BackgroundBlobs />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
