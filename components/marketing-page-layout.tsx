import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export function MarketingPageLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string
  title: string
  intro: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-32 md:pt-40 px-6 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          {eyebrow ? (
            <p className="text-sm tracking-[0.2em] uppercase font-medium text-textPrimary mb-4">{eyebrow}</p>
          ) : null}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-textPrimary leading-[1.1] mb-6">
            {title}
          </h1>
          <div className="text-lg text-textMuted font-light leading-relaxed max-w-2xl space-y-4">{intro}</div>
        </div>

        <div className="max-w-5xl mx-auto mt-16 md:mt-20">{children}</div>
      </main>

      <SiteFooter />
    </div>
  )
}
