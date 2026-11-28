import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MarketingPageLayout } from "@/components/marketing-page-layout"
import { getPhotoCategories } from "@/lib/photo-categories"

export const metadata: Metadata = {
  title: "Commercial & Hospitality Photography Vietnam",
  description:
    "Professional photography for hotels, restaurants, resorts and brands in Vietnam. Food, hospitality, events and commercial photography.",
  alternates: {
    canonical: "/photography",
  },
}

export default function PhotographyPage() {
  const photoCategories = getPhotoCategories()

  return (
    <MarketingPageLayout
      eyebrow="Photography"
      title="Commercial & Hospitality Photography"
      intro={
        <>
          <p>
            Great photography helps people understand the value of a place, a product or a brand before they
            experience it themselves.
          </p>
          <p>
            GMG Visual provides professional photography for hotels, resorts, restaurants, events and businesses.
            From food and hospitality photography to portraits and commercial imagery, we create visual content
            designed to showcase your identity, communicate quality and strengthen your digital presence.
          </p>
          <p>
            Based in Hoi An and Da Nang, Vietnam, we work with businesses and brands across different industries and
            destinations on hotel photography, resort photography, restaurant photography, event photography and
            portrait photography.
          </p>
        </>
      }
    >
      {/* Food & Hospitality */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          FOOD &amp; HOSPITALITY
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
        </div>
      </div>

      {/* Events */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          EVENTS
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
        </div>
      </div>

      {/* Portraits */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          PORTRAITS
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
        </div>
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
        </div>
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
