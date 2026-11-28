import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MarketingPageLayout } from "@/components/marketing-page-layout"

export const metadata: Metadata = {
  title: "All-in-One Creative Services for Businesses",
  description:
    "Photography, videography, social media content, 360° virtual tours and websites — all under one roof. GMG Visual is your single creative partner for complete visual content and digital presence.",
  alternates: {
    canonical: "/packages",
  },
}

export default function PackagesPage() {
  return (
    <MarketingPageLayout
      eyebrow="Packages"
      title="All-in-One Creative Services for Your Business"
      intro="Running a business is already complicated. Managing five different creative suppliers shouldn't be another headache."
    >
      <div className="max-w-2xl mx-auto mb-16 md:mb-20 text-center space-y-4">
        <p className="text-textMuted font-light text-lg leading-relaxed">
          GMG Visual brings photography, videography, social media content, 360° virtual tours and website creation
          together under one roof. Instead of coordinating multiple professionals, managing different schedules and
          dealing with disconnected services, you have one creative partner who takes care of your visual content
          and digital presence.
        </p>
        <p className="text-textMuted font-light text-lg leading-relaxed">
          From a complete visual launch to ongoing monthly content production, we bring everything together in one
          coordinated solution.
        </p>
        <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-textPrimary leading-snug pt-2">
          One partner. One creative direction. Everything your business needs to be seen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <Card className="border-0 shadow-lg h-full">
          <CardContent className="p-6 sm:p-8 md:p-12 h-full flex flex-col">
            <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-wide text-textPrimary mb-5">
              All In One
            </h3>
            <p className="text-textMuted font-light leading-relaxed mb-4">
              A complete digital presence designed around your business.
            </p>
            <p className="text-textMuted font-light leading-relaxed mb-4">
              Designed for hospitality, retail, wellness and lifestyle businesses.
            </p>
            <p className="text-textMuted font-light leading-relaxed mb-6">
              The combination of services changes according to each client&apos;s goals.{" "}
              <span className="font-medium text-textPrimary">This is not a fixed bundle.</span>
            </p>
            <p className="text-textMuted font-light leading-relaxed mb-4">The final solution may include:</p>
            <ul className="space-y-2 text-textMuted font-light list-disc list-inside">
              <li>Videography</li>
              <li>Photography</li>
              <li className="whitespace-nowrap overflow-hidden text-ellipsis">Google Maps &amp; 360° Virtual Tours</li>
              <li>Custom Virtual Tours</li>
              <li>Websites</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg h-full">
          <CardContent className="p-10 md:p-12 h-full flex flex-col">
            <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-wide text-textPrimary mb-5">
              Monthly Content
            </h3>
            <p className="text-textMuted font-light leading-relaxed mb-6">
              Designed for businesses, brands, artists and creators who need consistent content.
            </p>

            <div className="space-y-6 py-6 border-y border-gray-200">
              <div>
                <p className="text-sm tracking-[0.15em] uppercase font-medium text-textPrimary mb-1.5">Essential</p>
                <p className="text-textMuted font-light text-sm leading-relaxed">
                  Designed for businesses just starting to build a consistent content presence.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm tracking-[0.15em] uppercase font-medium text-textPrimary mb-1.5">Growth</p>
                <p className="text-textMuted font-light text-sm leading-relaxed">
                  Designed for brands ready to scale their visibility with a steady content rhythm.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm tracking-[0.15em] uppercase font-medium text-textPrimary mb-1.5">Complete</p>
                <p className="text-textMuted font-light text-sm leading-relaxed">
                  Designed for businesses and creators seeking a full, hands-off content partnership.
                </p>
              </div>
            </div>

            <p className="text-textMuted font-light leading-relaxed mt-6">
              Every plan is tailored to the client&apos;s goals, content strategy and publishing schedule, built for
              flexibility and long-term collaboration rather than rigid packages.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16 md:mt-20 max-w-2xl mx-auto">
        <h3 className="font-heading text-2xl md:text-3xl font-light text-textPrimary mb-4">
          Looking for something different?
        </h3>
        <p className="text-textMuted font-light text-lg leading-relaxed mb-8">
          Every project is unique. Tell us about your idea, and we&apos;ll prepare a proposal tailored to your needs.
        </p>
        <Link
          href="/#request-quote"
          className="group inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase font-medium text-textPrimary border-b border-textPrimary/30 hover:border-textPrimary pb-1 transition-colors"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </MarketingPageLayout>
  )
}
