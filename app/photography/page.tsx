import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MarketingPageLayout } from "@/components/marketing-page-layout"
import { PhotoCarousel } from "@/components/photo-carousel"
import { getPhotoCategories } from "@/lib/photo-categories"

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Food and hospitality, event and portrait photography by GMG Visual, plus unique iris photography sessions, in Hội An, Da Nang and across Vietnam.",
  alternates: {
    canonical: "/photography",
  },
}

export default function PhotographyPage() {
  const photoCategories = getPhotoCategories()

  return (
    <MarketingPageLayout
      eyebrow="Photography"
      title="Photography"
      intro="Food and hospitality, event and portrait photography, plus unique iris photography sessions — shot by GMG Visual in Hội An, Da Nang and across Vietnam."
    >
      {/* Food & Hospitality */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          FOOD &amp; HOSPITALITY
        </h3>
        <PhotoCarousel itemsPerView={{ mobile: 1, desktop: 3 }}>
          {photoCategories.food.map((photo) => (
            <div key={photo.id} className="group">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          ))}
        </PhotoCarousel>
      </div>

      {/* Events */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          EVENTS
        </h3>
        <PhotoCarousel itemsPerView={{ mobile: 1, desktop: 3 }}>
          {photoCategories.events.map((photo) => (
            <div key={photo.id} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={400}
                  height={500}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          ))}
        </PhotoCarousel>
      </div>

      {/* Portraits */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          PORTRAITS
        </h3>
        <PhotoCarousel itemsPerView={{ mobile: 1, desktop: 3 }}>
          {photoCategories.portraits.map((photo) => (
            <div key={photo.id} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={400}
                  height={533}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          ))}
        </PhotoCarousel>
      </div>

      {/* Iris Photography */}
      <div>
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          IRIS PHOTOGRAPHY
        </h3>
        <div className="text-center mb-8">
          <p className="text-textMuted font-light text-lg max-w-4xl mx-auto leading-relaxed">
            Unique and personalized iris photography, capturing the intricate details and colors of the human eye.
          </p>
        </div>
        <PhotoCarousel itemsPerView={{ mobile: 1, desktop: 3 }}>
          {photoCategories.iris.map((photo) => (
            <div key={photo.id} className="group">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          ))}
        </PhotoCarousel>
        <div className="text-center mt-12">
          <Link href="https://bookwhen.com/oxoirisphotography" target="_blank" rel="noopener noreferrer">
            <Button className="bg-textPrimary text-white hover:bg-textPrimary/90 py-3 px-8 font-light tracking-wide rounded-lg transition-colors">
              Book Your Session
            </Button>
          </Link>
        </div>
      </div>
    </MarketingPageLayout>
  )
}
