export interface WebsiteProject {
  id: number
  name: string
  description: string
  url: string
  logo: string
}

export const websiteProjects: WebsiteProject[] = [
  {
    id: 2,
    name: "Happy Drifting",
    description: "Authentic travel experiences, local discoveries and unforgettable adventures across Vietnam.",
    url: "https://www.happydrifting.com",
    logo: "/gmgvisual-v02-assets/loghi-websites/happy-drifting-logo-green.png",
  },
  {
    id: 1,
    name: "VS Humanity",
    description:
      "A purpose-driven apparel brand challenging conformity through bold design and meaningful storytelling.",
    url: "https://www.vshumanity.org",
    logo: "/gmgvisual-v02-assets/loghi-websites/vs-humanity-logo.jpg",
  },
  {
    id: 3,
    name: "Mai Wellbeing",
    description: "A holistic wellbeing project focused on balance, mindfulness and personal growth.",
    url: "https://www.maiwellbeing.space/",
    logo: "/gmgvisual-v02-assets/loghi-websites/mai-wellbeing-logo.png",
  },
]
