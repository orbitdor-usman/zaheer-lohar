import { Rajdhani } from "next/font/google";
import { artistDescription, artistKeywords, artistName, siteUrl } from "@/lib/seo/site";
import "./globals.css";
import "./motion.css";
import "./site-theme.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${artistName} — Singer & Songwriter`,
    template: `%s — ${artistName}`,
  },
  description: artistDescription,
  keywords: artistKeywords,
  applicationName: `${artistName} official website`,
  category: "music",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${artistName} — Singer & Songwriter`,
    description: artistDescription,
    type: "website",
    url: siteUrl,
    siteName: artistName,
    locale: "en_PK",
    images: [{ url: "/images/banner.png", width: 1774, height: 887, alt: `${artistName} performing` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${artistName} — Singer & Songwriter`,
    description: artistDescription,
    images: ["/images/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/images/logo/logo.png", apple: "/images/logo/logo.png" },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "htXX3gt7vmS4qlaa1lY8a8-u-egd3MvN9uihJtH3tYs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
