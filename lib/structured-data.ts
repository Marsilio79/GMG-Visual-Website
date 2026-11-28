const siteUrl = "https://gmgvisual.com"

// Mirrors the areaServed list on the ProfessionalService entity in app/layout.tsx,
// so page-level Service schema stays consistent with the sitewide business schema.
const areaServed = [
  { "@type": "City", name: "Hội An" },
  { "@type": "City", name: "Da Nang" },
  { "@type": "City", name: "Tam Kỳ" },
  { "@type": "AdministrativeArea", name: "Quảng Nam" },
  { "@type": "Country", name: "Vietnam" },
]

interface ServicePageSchemaInput {
  name: string
  description: string
  path: string
}

export function buildServicePageJsonLd({ name, description, path }: ServicePageSchemaInput) {
  const pageUrl = `${siteUrl}${path}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name,
        description,
        url: pageUrl,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name, item: pageUrl },
        ],
      },
    ],
  }
}
