import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeTransitionProvider } from "@/components/theme-transition";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8f0dc" },
    { media: "(prefers-color-scheme: dark)", color: "#12180f" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "Hugo Piedanna",
    "développeur web Toulouse",
    "développeur full-stack Toulouse",
    "développeur React Toulouse",
    "développeur Next.js",
    "TypeScript",
    "freelance développeur web",
    "création application web",
    "formateur React",
    "Ynov Toulouse",
    "Chariot",
  ],
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    firstName: "Hugo",
    lastName: "Piedanna",
    username: "hugo-piedanna",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeTransitionProvider>
            <a
              href="#contenu"
              className="bg-primary text-primary-foreground focus-visible:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:shadow-lg focus-visible:ring-3 focus-visible:outline-none"
            >
              Aller au contenu principal
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
          </ThemeTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
