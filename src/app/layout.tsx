import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Aranya Chatterjee — AI / ML Engineer";
const description =
  "Portfolio of Aranya Chatterjee — computer science undergrad at MITS Gwalior, machine learning intern, and published researcher working on multi-agent AI systems, RAG, computer vision, and LLMs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Aranya Chatterjee",
  },
  description,
  applicationName: "Aranya Chatterjee",
  authors: [{ name: "Aranya Chatterjee", url: siteUrl }],
  creator: "Aranya Chatterjee",
  keywords: [
    "Aranya Chatterjee",
    "AI engineer",
    "machine learning",
    "agentic AI",
    "Google ADK",
    "LangGraph",
    "RAG",
    "computer vision",
    "LLM",
    "PyTorch",
    "LangChain",
    "Cloudflare Workers",
    "full-stack",
    "portfolio",
    "MITS Gwalior",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Aranya Chatterjee",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#03030a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aranya Chatterjee",
  jobTitle: "AI / ML Engineer",
  email: "mailto:chatterjeearanya0910@gmail.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gwalior",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Madhav Institute of Technology and Science, Gwalior",
  },
  knowsAbout: [
    "Machine Learning",
    "Multi-Agent Systems",
    "Retrieval-Augmented Generation",
    "Computer Vision",
    "Large Language Models",
    "Web Development",
  ],
  sameAs: [
    "https://github.com/aranya-chatterjee",
    "https://www.linkedin.com/in/aranya-chatterjee",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="bg-[#03030a] text-white">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
