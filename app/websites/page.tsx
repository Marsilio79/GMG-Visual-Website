import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MarketingPageLayout } from "@/components/marketing-page-layout"
import { websiteProjects } from "@/lib/websites"

export const metadata: Metadata = {
  title: "Websites",
  description:
    "Websites designed and built by GMG Visual for hotels, restaurants and brands, bringing video, photography and storytelling together in one digital experience.",
  alternates: {
    canonical: "/websites",
  },
}

export default function WebsitesPage() {
  return (
    <MarketingPageLayout
      eyebrow="Web Design"
      title="Websites"
      intro="Where video, photography and storytelling come together in one digital experience."
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
                <h4 className="font-heading text-xl font-light text-textPrimary mb-1.5">{site.name}</h4>
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
  )
}
