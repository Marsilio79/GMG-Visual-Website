export interface VideoItem {
  id: number
  title: string
  embedId: string
  description?: string
  customThumbnail?: string
}

export interface VideoCategories {
  showreels: VideoItem[]
  advertising: VideoItem[]
  events: VideoItem[]
  shortFilms: VideoItem[]
  musicVideos: VideoItem[]
  stockFootage: VideoItem[]
}

export const videoCategories: VideoCategories = {
  showreels: [
    {
      id: 1,
      title: "Showreel 2025",
      embedId: "1symFDS2GDk",
    },
    {
      id: 2,
      title: "Showreel 2021",
      embedId: "Oo5_Xa_4yqg",
    },
    {
      id: 3,
      title: "Showreel 2019",
      embedId: "_Hr6ALsNjLs",
    },
    {
      id: 4,
      title: "Showreel 2017",
      embedId: "m0VRL0ouqUs",
    },
    {
      id: 5,
      title: "Showreel 2015",
      embedId: "OJyN0PMLSDg",
    },
  ],
  advertising: [
    {
      id: 1,
      title: "Tenere Advertising",
      embedId: "eGD0094HpfQ",
    },
    {
      id: 2,
      title: "Ninh Binh promotional Tv Show",
      embedId: "nSDYcfFZMrQ",
    },
    {
      id: 3,
      title: "Fat Pig Promo",
      embedId: "hjY2XDto55I",
      customThumbnail: "/images/video-thumbs/fat-pig-promo-thumb.jpg",
    },
    {
      id: 4,
      title: "Capichi & Chops Advertising",
      embedId: "vvfVzozD5VQ",
      customThumbnail: "/images/video-thumbs/capichi-chops-promo-thumb.jpg",
    },
    {
      id: 5,
      title: "New Mantra promo",
      embedId: "cgjz4P0QvzI",
    },
    {
      id: 6,
      title: "Piaggio Advertising",
      embedId: "BiFSmwQD82s",
    },
    {
      id: 7,
      title: "Plant Trees Advertising",
      embedId: "8Q1JnHOSVNY",
    },
    {
      id: 8,
      title: "F1h2o - Aqua bike Advertising",
      embedId: "FJqlT3j4ki4",
    },
    {
      id: 9,
      title: "3 Dragons Advertising",
      embedId: "KRSEHD9eM38",
    },
    {
      id: 10,
      title: "Em's Bakery",
      embedId: "obpDy4QTFrU",
    },
    {
      id: 11,
      title: "Chops Burger",
      embedId: "FYJ-cmnVTDc",
    },
    {
      id: 12,
      title: "Syse Restaurant",
      embedId: "HNRDOHulL_U",
    },
  ],
  events: [
    {
      id: 1,
      title: "National Day Argentina",
      embedId: "hsiykmzTsPg",
      customThumbnail: "/images/video-thumbs/argentina-event-thumb.jpg",
    },
    {
      id: 2,
      title: "Event Piaggio Hanoi",
      embedId: "GzYrgS0qD9o",
    },
    {
      id: 3,
      title: "Wine event Italy",
      embedId: "c96nRSlCMFI",
    },
    {
      id: 4,
      title: "Piazza Italia Hanoi",
      embedId: "KKmEhxQqbpI",
    },
    {
      id: 5,
      title: "Chops event Hanoi",
      embedId: "UDXWEXCV0fE",
      customThumbnail: "/images/video-thumbs/chops-event-thumb.jpg",
    },
    {
      id: 6,
      title: "Los Fuegos Event",
      embedId: "qYcwGUpUjok",
    },
    {
      id: 7,
      title: "Burlesque event Rome",
      embedId: "9jHWeHRdLqc",
    },
    {
      id: 8,
      title: "Cugini x Viettel event",
      embedId: "yaw6p79bP4g",
    },
    {
      id: 9,
      title: "Hill Station REC Hoi An",
      embedId: "-XgQnFF0kiM",
    },
    {
      id: 10,
      title: "Hub Hoi An",
      embedId: "GB1kMILcsQQ",
    },
    {
      id: 11,
      title: "Blake",
      embedId: "K_BouE__bsM",
    },
    {
      id: 12,
      title: "HOP Crepes",
      embedId: "RCFrIWpHQzw",
    },
  ],
  shortFilms: [
    {
      id: 1,
      title: "The Day After",
      description:
        "A promising young man, after a wild night, wakes up in an apartment with an important business appointment ahead.",
      embedId: "fyrp_Ut4_tM",
    },
    {
      id: 2,
      title: "Anima",
      description:
        "Anima tells the story of three Italians fleeing Yugoslav militiamen in 1945, paralleled by a modern-day girl named Alma who uncovers their forgotten past.",
      embedId: "pKiE7kPkmBk",
    },
    {
      id: 3,
      title: "Il Graffio",
      description:
        "This short film was made for the International Tour Film Fest 2015, was shot and edited in 5 days by a mini-crew of 3 people, using non-professional actors.",
      embedId: "a-q7FHpMZoY",
    },
  ],
  musicVideos: [
    {
      id: 1,
      title: "Thanh Lam - Tướng phu thê",
      embedId: "pxUlgWVpTJQ",
    },
    {
      id: 2,
      title: "Zane K - Black on Blue",
      embedId: "0afIyrEjDqk",
    },
    {
      id: 3,
      title: "True Lie - To ember and ashes",
      embedId: "xTZlP-jcSyU",
    },
    {
      id: 4,
      title: "Trinh Minh Hien - Starboy remix",
      embedId: "tnAA6t97P-A",
    },
    {
      id: 5,
      title: "Blein - Ancora un attimo",
      embedId: "9rhtfl4daLw",
    },
    {
      id: 6,
      title: "Enea Leone - Bach allegro BWV 1005",
      embedId: "KRDECe4ds5M",
      customThumbnail: "/images/video-thumbs/enea-leone-thumb.jpg",
    },
    {
      id: 7,
      title: "Bartender - Gross",
      embedId: "jktsqtfwfPU",
    },
    {
      id: 8,
      title: "Desource - This plague called love",
      embedId: "XJoSbZmKamI",
    },
    {
      id: 9,
      title: "Carro Bestiame - Lunga vita al becco",
      embedId: "e08r4JeCVYg",
    },
    {
      id: 10,
      title: "Nguoi Hanoi",
      embedId: "tfsh7l7e2kE",
    },
    {
      id: 11,
      title: "Trinh Minh Hien & DJ Natale",
      embedId: "vnpPf_kqeFA",
    },
    {
      id: 12,
      title: "Libera Orchestra Sotterranea",
      embedId: "YaAvRqRvdaQ",
    },
  ],
  stockFootage: [
    {
      id: 1,
      title: "Showreel Microstock Footages 1",
      description: "Professional stock footage showreel realized in Vietnam showcasing cinematic quality content.",
      embedId: "I-IgHp_Cruk",
    },
    {
      id: 2,
      title: "Showreel Microstock Footages 2",
      description: "High-quality stock footage for commercial and creative projects.",
      embedId: "wNKOeb3vCxY",
    },
    {
      id: 3,
      title: "Showreel Microstock Footages 3",
      description: "Professional stock footage collection for various media applications.",
      embedId: "X2e0rANAS_M",
    },
  ],
}
