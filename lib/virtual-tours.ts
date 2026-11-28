export interface GoogleMapsPhoto {
  id: number
  src: string
  alt: string
}

export const googleMaps360Photos: GoogleMapsPhoto[] = [
  {
    id: 1,
    src: "/images/360/1Agriturismo-360-new.webp",
    alt: "Aerial View - Italian Agriturismo Villa with Swimming Pool and Tuscan Countryside Panorama",
  },
  {
    id: 2,
    src: "/images/360/2Chops-Hoi-An-new.webp",
    alt: "Street View - Chops Restaurant, Hoi An Ancient Town with Traditional Lanterns and Colonial Architecture",
  },
  {
    id: 3,
    src: "/images/360/3-dragons-360.webp",
    alt: "Panoramic View - 3 Dragons Sports Bar & Restaurant with Waterfront Terrace and Evening Atmosphere",
  },
]

export interface VirtualTourProject {
  id: number
  title: string
  description: string
  url: string
  src: string
}

export const virtualTourProjects: VirtualTourProject[] = [
  {
    id: 1,
    title: "Annam Heritage",
    description: "An immersive walkthrough of Annam Heritage's elegant interiors and timeless architecture.",
    url: "https://annamvt.netlify.app",
    src: "/gmgvisual-v02-assets/card-vt/Annam-vt-card.webp",
  },
  {
    id: 2,
    title: "Tok Restaurant",
    description: "Step inside Tok Restaurant and explore its vibrant dining atmosphere from anywhere.",
    url: "https://tokvt2025.netlify.app",
    src: "/gmgvisual-v02-assets/card-vt/tok-vt-card.webp",
  },
  {
    id: 3,
    title: "HAIS International School Hoi An",
    description: "A virtual walkthrough of HAIS International School's campus and learning spaces.",
    url: "https://haisvt.netlify.app/",
    src: "/gmgvisual-v02-assets/card-vt/HAIS-vt-card.webp",
  },
  {
    id: 4,
    title: "Cugini Italian Restaurant",
    description: "Discover the warm, authentic ambiance of Cugini Italian Restaurant online.",
    url: "https://cuginivt.netlify.app",
    src: "/gmgvisual-v02-assets/card-vt/Cugini-vt-card.webp",
  },
  {
    id: 5,
    title: "Little Riverside Hoi An",
    description: "Explore the riverside charm and relaxed setting of Little Riverside Hoi An.",
    url: "https://littleriverside-virtualtour-2025.netlify.app",
    src: "/gmgvisual-v02-assets/card-vt/Little-Riverside-vt-card.webp",
  },
]
