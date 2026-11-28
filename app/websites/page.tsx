import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MarketingPageLayout } from "@/components/marketing-page-layout"
import { websiteProjects } from "@/lib/websites"
import { buildServicePageJsonLd } from "@/lib/structured-data"

const description =
  "Modern website design for hotels, restaurants, resorts and businesses. Professional websites built to showcase your brand and services."

export const metadata: Metadata = {
  title: "Website Design for Hotels & Businesses",
  description,
  alternates: {
    canonical: "/websites",
  },
  openGraph: {
    title: "Website Design for Hotels, Businesses & Brands",
    description,
    url: "/websites",
    siteName: "GMG Visual",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/gmgvisual-v02-assets/graphok.jpg",
        width: 1200,
        height: 630,
        alt: "GMG Visual: Video Production, Photography & Virtual Tours in Hội An, Da Nang and across Vietnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for Hotels, Businesses & Brands",
    description,
    images: ["/gmgvisual-v02-assets/graphok.jpg"],
  },
}

const jsonLd = buildServicePageJsonLd({
  name: "Website Design for Hotels, Businesses & Brands",
  description,
  path: "/websites",
})

export default function WebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MarketingPageLayout
        eyebrow="Web Design"
        title="Website Design for Hotels, Businesses & Brands"
        intro={
          <>
            <p>
              Your website is often the first place potential customers discover your business. It should communicate
              who you are, showcase what you offer and make it easy for people to get in touch.
            </p>
            <p>
              GMG Visual creates modern websites for hotels, restaurants, hospitality businesses and brands. Combining
              visual storytelling, photography, video and thoughtful custom business website design, we build digital
              experiences that present your business professionally and help turn visitors into potential customers.
            </p>
            <p>
              Based in Vietnam, we work with businesses looking to strengthen their digital presence locally and
              internationally through professional, hospitality-focused website design and development.
            </p>
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {websiteProjects.map((site) => (
            <Card
              key={site.id}
              className="group border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden flex items-center justify-center p-4 md:p-6">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={`${site.name} Logo`}
                    width={320}
                    height={200}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="max-h-52 md:max-h-60 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div className="pt-3 pb-6 px-6 md:pt-4 md:pb-8 md:px-8 flex-1 flex flex-col text-center">
                  <h2 className="font-heading text-xl font-light text-textPrimary mb-1.5">{site.name}</h2>
                  <p className="text-textMuted font-light flex-1">{site.description}</p>
                  {site.url ? (
                    <Link
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-center mt-4 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase font-medium text-textPrimary border-b border-textPrimary/30 hover:border-textPrimary pb-1 transition-colors"
                    >
                      Visit Website
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="self-center mt-4 inline-block text-sm tracking-[0.2em] uppercase font-medium text-textMuted">
                      Coming Soon
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </MarketingPageLayout>
    </>
  )
}
