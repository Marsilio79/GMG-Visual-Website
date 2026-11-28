import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { MarketingPageLayout } from "@/components/marketing-page-layout"
import { YouTubeVideo } from "@/components/youtube-video"
import { Carousel } from "@/components/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { videoCategories } from "@/lib/videos"

export const metadata: Metadata = {
  title: "Commercial Videography, Reels & Social Media Video Production",
  description:
    "Commercial videography, Instagram Reels, TikTok videos and social media video production for hotels, restaurants and brands by GMG Visual in Hội An, Da Nang and across Vietnam.",
  alternates: {
    canonical: "/videography",
  },
}

export default function VideographyPage() {
  return (
    <MarketingPageLayout
      eyebrow="Video Production"
      title="Commercial Videography, Reels & Social Media Video Production"
      intro="GMG Visual creates professional video content for hotels, resorts, restaurants, businesses and brands. From corporate films and promotional videos to Instagram Reels, TikTok videos and short-form social media content, we turn ideas, places and experiences into engaging visual stories."
    >
      <div className="max-w-2xl mx-auto mb-16 md:mb-20 text-center space-y-4">
        <p className="text-textMuted font-light text-lg leading-relaxed">
          Whether you need a brand film, a promotional campaign or a consistent flow of content for your social media
          channels, we handle the production from concept to final edit.
        </p>
        <p className="text-textMuted font-light text-lg leading-relaxed">
          Based in Hoi An and Da Nang, Vietnam, we work with local and international clients to create video content
          that captures attention, communicates your identity and helps your business connect with its audience.
        </p>
      </div>

      {/* Showreels */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          SHOWREELS
        </h3>
        <Carousel itemsPerView={{ mobile: 1, desktop: 3 }}>
          {videoCategories.showreels.map((video) => (
            <Card key={video.id} className="border-0 shadow-lg h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <YouTubeVideo embedId={video.embedId} title={video.title} />
                </div>
                <div className="p-6 flex-1">
                  <h4 className="text-xl font-light text-textPrimary">{video.title}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>

      {/* Advertising & Promotionals */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          ADVERTISING &amp; PROMOTIONAL
        </h3>
        <Carousel itemsPerView={{ mobile: 1, desktop: 3 }}>
          {videoCategories.advertising.map((video) => (
            <Card key={video.id} className="border-0 shadow-lg h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <YouTubeVideo embedId={video.embedId} title={video.title} customThumbnail={video.customThumbnail} />
                </div>
                <div className="p-6 flex-1">
                  <h4 className="text-xl font-light text-textPrimary">{video.title}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>

      {/* Events */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          EVENTS
        </h3>
        <Carousel itemsPerView={{ mobile: 1, desktop: 3 }}>
          {videoCategories.events.map((video) => (
            <Card key={video.id} className="border-0 shadow-lg h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <YouTubeVideo embedId={video.embedId} title={video.title} customThumbnail={video.customThumbnail} />
                </div>
                <div className="p-6 flex-1">
                  <h4 className="text-xl font-light text-textPrimary">{video.title}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>

      {/* Short Films */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          SHORT FILMS
        </h3>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {videoCategories.shortFilms.map((video) => (
            <Card key={video.id} className="border-0 shadow-lg h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <YouTubeVideo embedId={video.embedId} title={video.title} />
                </div>
                <div className="p-6 flex-1">
                  <h4 className="text-xl font-light text-textPrimary mb-2">{video.title}</h4>
                  <p className="text-textMuted font-light">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Music Videos */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          MUSIC VIDEOS
        </h3>
        <Carousel itemsPerView={{ mobile: 1, desktop: 3 }}>
          {videoCategories.musicVideos.map((video) => (
            <Card key={video.id} className="border-0 shadow-lg h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <YouTubeVideo embedId={video.embedId} title={video.title} customThumbnail={video.customThumbnail} />
                </div>
                <div className="p-6 flex-1">
                  <h4 className="text-xl font-light text-textPrimary">{video.title}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>

      {/* Stock Footage */}
      <div className="mb-12 md:mb-20">
        <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-wide text-textPrimary mb-8 md:mb-12 text-center">
          STOCK FOOTAGE
        </h3>
        <div className="text-center mb-8 md:mb-12">
          <p className="text-textMuted font-light text-lg max-w-4xl mx-auto leading-relaxed">
            We create high-quality stock footage for leading platforms such as Shutterstock, Pond5, and Adobe Stock.
            Our work spans cinematic visuals, dynamic scenes, and versatile content designed to meet the needs of
            agencies, brands, and content creators worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {videoCategories.stockFootage.map((video) => (
            <Card key={video.id} className="border-0 shadow-lg h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <YouTubeVideo embedId={video.embedId} title={video.title} />
                </div>
                <div className="p-6 flex-1">
                  <h4 className="text-base sm:text-xl font-light text-textPrimary mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {video.title}
                  </h4>
                  <p className="text-textMuted font-light">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <div className="flex justify-center gap-6 max-w-2xl mx-auto">
            <Link
              href="https://www.shutterstock.com/g/Lafresia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 order-2 md:order-1"
            >
              <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="aspect-[2.5/1] bg-white rounded-lg overflow-hidden flex items-center justify-center p-3">
                    <Image
                      src="/images/platforms/shutterstock-logo-new.webp"
                      alt="Shutterstock - View Lafresia's Portfolio"
                      width={160}
                      height={64}
                      className="w-full max-w-[160px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex-1 text-center">
                    <h4 className="text-sm font-light text-textPrimary">View on Shutterstock</h4>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://stock.adobe.com/it/contributor/206582126/Gianmarco"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 order-1 md:order-2"
            >
              <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="aspect-[2.5/1] bg-white rounded-lg overflow-hidden flex items-center justify-center p-3">
                    <Image
                      src="/images/platforms/adobe-stock-logo-new.webp"
                      alt="Adobe Stock - View Gianmarco's Portfolio"
                      width={160}
                      height={64}
                      className="w-full max-w-[160px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex-1 text-center">
                    <h4 className="text-sm font-light text-textPrimary">View on Adobe Stock</h4>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://www.pond5.com/artist/lafresiastockvideo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 order-3"
            >
              <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="aspect-[2.5/1] bg-white rounded-lg overflow-hidden flex items-center justify-center p-3">
                    <Image
                      src="/images/platforms/pond5-logo-new.webp"
                      alt="Pond5 - View Lafresia Stock Video's Portfolio"
                      width={160}
                      height={64}
                      className="w-full max-w-[160px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex-1 text-center">
                    <h4 className="text-sm font-light text-textPrimary">View on Pond5</h4>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-12">
        <Link
          href="https://www.youtube.com/@GMGVisualVN/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm md:text-base tracking-[0.2em] uppercase font-medium text-textPrimary border-b border-textPrimary/30 hover:border-textPrimary pb-1 transition-colors"
        >
          Explore the Portfolio
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          href="https://www.youtube.com/@GMGVisualVN/shorts"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm md:text-base tracking-[0.2em] uppercase font-medium text-textPrimary border-b border-textPrimary/30 hover:border-textPrimary pb-1 transition-colors"
        >
          View Short-Form Content
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </MarketingPageLayout>
  )
}
