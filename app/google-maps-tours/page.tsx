import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MarketingPageLayout } from "@/components/marketing-page-layout"
import { googleMaps360Photos, virtualTourProjects, type VirtualTourProject } from "@/lib/virtual-tours"

export const metadata: Metadata = {
  title: "Google Maps 360° Photography & Virtual Tours",
  description:
    "Showcase your business on Google Maps with professional 360° photography and immersive virtual tours for hotels, restaurants and commercial spaces.",
  alternates: {
    canonical: "/google-maps-tours",
  },
}

function renderVirtualTourCard(project: VirtualTourProject) {
  return (
    <Link key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={project.src}
              alt={project.title}
              width={640}
              height={360}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              quality={85}
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h4 className="text-xl font-light text-textPrimary mb-2">{project.title}</h4>
            <p className="text-textMuted font-light flex-1">{project.description}</p>
            <Button className="w-full bg-textPrimary text-white hover:bg-textPrimary/90 py-3 px-6 font-light tracking-wide rounded-lg transition-colors mt-6">
              Explore Tour
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function GoogleMapsToursPage() {
  return (
    <MarketingPageLayout
      eyebrow="Virtual Tours"
      title="Google Maps 360° Photography & Virtual Tours"
      intro={
        <>
          <p>Let people explore your business before they arrive.</p>
          <p>
            GMG Visual creates professional 360° photography and immersive virtual tours that help hotels,
            restaurants, resorts and businesses showcase their spaces online. With Google Maps 360° photography,
            Google Street View photography and custom virtual tour solutions, your visitors can discover your
            location, explore its atmosphere and get a better understanding of the experience you offer.
          </p>
          <p>
            Based in Hoi An and Da Nang, Vietnam, we help businesses improve their Google Business Profile and online
            visibility through hotel virtual tours, restaurant virtual tours and other interactive, custom business
            virtual tours.
          </p>
        </>
      }
    >
      {/* Google Maps 360° Photography */}
      <div id="google-maps-360" className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          GOOGLE MAPS &amp; 360° VIRTUAL TOURS
        </h3>
        <div className="text-center mb-12 md:mb-16">
          <p className="text-textMuted font-light text-lg max-w-4xl mx-auto leading-relaxed">
            Professional 360° photography for Google Maps and immersive virtual tours, helping businesses showcase
            their spaces with stunning detail, seamless navigation and an engaging online experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16 md:divide-x md:divide-gray-200">
          <div className="md:px-8 md:first:pl-0">
            <h4 className="font-heading text-lg font-medium tracking-wide text-textPrimary mb-3">Professional Capture</h4>
            <p className="text-textMuted font-light leading-relaxed">
              High-quality HDR 360° photography captured with professional equipment to accurately showcase your
              business and create an immersive first impression.
            </p>
          </div>
          <div className="md:px-8">
            <h4 className="font-heading text-lg font-medium tracking-wide text-textPrimary mb-3">Google Maps Integration</h4>
            <p className="text-textMuted font-light leading-relaxed">
              Every panorama is professionally connected and published to Google Maps, creating a seamless walkthrough
              fully integrated with your Google Business Profile.
            </p>
          </div>
          <div className="md:px-8 md:last:pr-0">
            <h4 className="font-heading text-lg font-medium tracking-wide text-textPrimary mb-3">
              Business Profile Optimization
            </h4>
            <p className="text-textMuted font-light leading-relaxed">
              We optimize panorama placement, navigation flow and Google Business Profile integration to maximize
              usability, discoverability and the overall visitor experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {googleMaps360Photos.map((photo) => (
            <div key={photo.id} className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={533}
                height={300}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover w-full h-full"
                loading="lazy"
                quality={85}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="https://drive.google.com/uc?export=download&id=1PgnOMH2FrCq2_-oEM8brJ5IbikixD2Lq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-textPrimary text-white hover:bg-textPrimary/90 py-3 px-6 font-light tracking-wide rounded-lg transition-colors">
                Download Introduction
              </Button>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1l1lu6BdgrS8cRq2GlWjrpUSwAeZ7kubR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-textPrimary text-white hover:bg-textPrimary/90 py-3 px-6 font-light tracking-wide rounded-lg transition-colors">
                Download Introduction VN
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Virtual Tours */}
      <div id="custom-virtual-tours">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          CUSTOM VIRTUAL TOURS
        </h3>
        <div className="text-center mb-12">
          <p className="text-textMuted font-light text-lg max-w-4xl mx-auto leading-relaxed">
            Designed specifically for each client, our custom virtual tours go far beyond Google Street View. Every
            project is tailored to the space and can include interactive hotspots, floor plans, multimedia content,
            custom navigation, branding and immersive storytelling to create a unique visitor experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {virtualTourProjects.slice(0, 4).map(renderVirtualTourCard)}

          {/* Editorial spacer - balances the second row between Cugini and Little Riverside */}
          <div className="hidden md:flex flex-col items-center justify-center text-center select-none">
            <span className="font-heading text-3xl lg:text-4xl font-light tracking-wide text-textMuted">360°</span>
            <div className="mt-6 space-y-1">
              <p className="font-heading text-sm tracking-[0.3em] text-textMuted">Explore.</p>
              <p className="font-heading text-sm tracking-[0.3em] text-textMuted">Discover.</p>
              <p className="font-heading text-sm tracking-[0.3em] text-textMuted">Experience.</p>
            </div>
          </div>

          {virtualTourProjects.slice(4).map(renderVirtualTourCard)}
        </div>
      </div>
    </MarketingPageLayout>
  )
}
