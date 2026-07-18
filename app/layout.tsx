import type { Metadata, Viewport } from "next";
// TEMP-TEST: google fonts disabled for offline sandbox build check

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { LoadingScreen } from "@/components/loading-screen";
import { CustomCursor } from "@/components/custom-cursor";
import { WhatsAppBadge } from "@/components/whatsappbadge";

const display = { variable: "--font-display" };
const body = { variable: "--font-body" };
const mono = { variable: "--font-mono" };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e17" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
    },
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          display.variable,
          body.variable,
          mono.variable,
          "font-sans"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <WhatsAppBadge
  phoneNumber="918105031246"
  message="Hi Tejas! I checked out your portfolio and wanted to connect."
  showNotificationBadge
/>
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}