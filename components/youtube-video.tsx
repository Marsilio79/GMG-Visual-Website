"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function YouTubeVideo({
  embedId,
  title,
  customThumbnail,
}: {
  embedId: string
  title: string
  customThumbnail?: string
}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => setIsMobile(window.innerWidth <= 768)

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) {
    return <YouTubeThumbnail embedId={embedId} title={title} customThumbnail={customThumbnail} />
  }

  return <LazyIframe embedId={embedId} title={title} />
}

function LazyIframe({ embedId, title }: { embedId: string; title: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`video-${embedId}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [embedId, hasLoaded])

  return (
    <div id={`video-${embedId}`} className="w-full h-full">
      {isVisible ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2 mx-auto">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm">Click to load video</p>
          </div>
        </div>
      )}
    </div>
  )
}

function YouTubeThumbnail({
  embedId,
  title,
  customThumbnail,
}: { embedId: string; title: string; customThumbnail?: string }) {
  const [thumbnailSrc, setThumbnailSrc] = useState(
    customThumbnail || `https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`,
  )
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    if (!hasError && !customThumbnail) {
      setHasError(true)
      // Fallback to medium quality thumbnail
      setThumbnailSrc(`https://img.youtube.com/vi/${embedId}/hqdefault.jpg`)
    }
  }

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // YouTube returns a 120x90 gray placeholder with HTTP 200 (not a 404) when
    // a maxresdefault thumbnail doesn't exist, so onError never fires for it.
    if (!hasError && !customThumbnail && e.currentTarget.naturalWidth === 120) {
      setHasError(true)
      setThumbnailSrc(`https://img.youtube.com/vi/${embedId}/hqdefault.jpg`)
    }
  }

  return (
    <Link
      href={`https://www.youtube.com/watch?v=${embedId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full relative group"
    >
      <Image
        src={thumbnailSrc || "/placeholder.svg"}
        alt={title}
        width={480}
        height={270}
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover w-full h-full"
        loading="lazy"
        onError={customThumbnail ? undefined : handleImageError}
        onLoad={customThumbnail ? undefined : handleImageLoad}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
