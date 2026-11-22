import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { FloatingContact } from "@/components/floating-contact"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const siteUrl = "https://gmgvisual.com"
const siteName = "GMG Visual"
const title = "GMG Visual | Photography & Virtual Tours in Hội An, Da Nang"
const description =
  "Photography, videography, Google Maps & 360° virtual tours and websites for hotels, restaurants and brands in Hội An, Da Nang and across Vietnam."
const ogImage = "https://gmgvisual.com/gmgvisual-v02-assets/graphok.jpg"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    other: { "msvalidate.01": "07666E54F5BC40DA319E9F699931FC90" },
  },
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "GMG Visual: Photography, Videography & Virtual Tours in Hội An and Da Nang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
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
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F7F8",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      alternateName: ["GMG Visual Hoi An", "GMG Visual Da Nang"],
      image: ogImage,
      logo: `${siteUrl}/gmgvisual-v02-assets/gmgvisual-logo-v2-black-transp.png`,
      url: siteUrl,
      telephone: "+84369007610",
      email: "gianmarcomaccabrunogiometti@gmail.com",
      description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hoi An",
        addressCountry: "VN",
      },
      areaServed: [
        { "@type": "City", name: "Hội An" },
        { "@type": "City", name: "Da Nang" },
        { "@type": "City", name: "Tam Kỳ" },
        { "@type": "AdministrativeArea", name: "Quảng Nam" },
        { "@type": "Country", name: "Vietnam" },
      ],
      knowsAbout: [
        "Hospitality photography",
        "Food photography",
        "Event photography",
        "Videography",
        "Google Maps 360° virtual tours",
        "Interactive virtual tours",
        "Website design",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GMG Visual services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Food and hospitality photography" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event photography" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Promotional and advertising video production" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Maps 360° virtual tours" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom interactive virtual tours" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monthly content plans" } },
        ],
      },
      founder: {
        "@type": "Person",
        name: "Gianmarco Maccabruno Giometti",
        jobTitle: "Creative Director",
      },
      sameAs: [
        "https://www.linkedin.com/in/gmgvisual/",
        "https://www.youtube.com/@GMGVisualVN/videos",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-US",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  )
}
