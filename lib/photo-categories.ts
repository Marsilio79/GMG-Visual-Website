import fs from "fs"
import path from "path"

export interface PhotoItem {
  id: string
  src: string
  alt: string
}

export interface PhotoCategories {
  food: PhotoItem[]
  events: PhotoItem[]
  portraits: PhotoItem[]
  iris: PhotoItem[]
}

interface PhotoSource {
  dir: string
  urlPrefix: string
}

const IMAGE_EXTENSIONS = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif"])

function listImageFiles(absoluteDir: string): string[] {
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(absoluteDir, { withFileTypes: true })
  } catch {
    return []
  }

  return entries
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
}

function humanize(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "")
  const words = base
    .replace(/^[0-9]+[-_]*/, "")
    .replace(/[-_]+/g, " ")
    .trim()
  return words.length > 0 ? words : base
}

function buildCategory(label: string, sources: PhotoSource[]): PhotoItem[] {
  const items: PhotoItem[] = []

  for (const { dir, urlPrefix } of sources) {
    for (const filename of listImageFiles(dir)) {
      items.push({
        id: `${urlPrefix}/${filename}`,
        src: `${urlPrefix}/${encodeURIComponent(filename)}`,
        alt: `${label} - ${humanize(filename)}`,
      })
    }
  }

  return items
}

// Manually curated display order for the first 12 Food & Hospitality carousel
// slides. Filenames not listed here keep their default sorted order and are
// appended after these.
const FOOD_FEATURED_ORDER = [
  "4poggio-falcone.webp",
  "2Burgers-Chops.webp",
  "3Restaurant-HaNoi.webp",
  "5WideOasya.webp",
  "6Segafredo-gelato.webp",
  "7Hotel-room.webp",
  "8Garden-hotel.webp",
  "9Sunset-starter.webp",
  "10Resort-puluong.webp",
  "11Lim-restaurant.webp",
  "12Lim-meat.webp",
  "1WideOAsya6.webp",
]

function applyFeaturedOrder(items: PhotoItem[], featuredFilenames: string[]): PhotoItem[] {
  const byFilename = new Map(items.map((item) => [path.basename(item.id), item]))
  const featured = featuredFilenames.map((filename) => byFilename.get(filename)).filter((item): item is PhotoItem => Boolean(item))
  const featuredSet = new Set(featuredFilenames)
  const rest = items.filter((item) => !featuredSet.has(path.basename(item.id)))
  return [...featured, ...rest]
}

export function getPhotoCategories(): PhotoCategories {
  const publicDir = path.join(process.cwd(), "public")
  const newPicturesDir = path.join(publicDir, "gmgvisual-v02-assets", "new-pictures")
  const newPicturesUrlPrefix = "/gmgvisual-v02-assets/new-pictures"

  return {
    food: applyFeaturedOrder(
      buildCategory("Food & Hospitality", [
        { dir: path.join(publicDir, "images", "food"), urlPrefix: "/images/food" },
        { dir: path.join(newPicturesDir, "food-hospitality"), urlPrefix: `${newPicturesUrlPrefix}/food-hospitality` },
      ]),
      FOOD_FEATURED_ORDER,
    ),
    events: buildCategory("Events", [
      { dir: path.join(publicDir, "images", "events"), urlPrefix: "/images/events" },
      { dir: path.join(newPicturesDir, "events"), urlPrefix: `${newPicturesUrlPrefix}/events` },
    ]),
    portraits: buildCategory("Portraits", [
      { dir: path.join(publicDir, "images", "portraits"), urlPrefix: "/images/portraits" },
      { dir: path.join(newPicturesDir, "portraits"), urlPrefix: `${newPicturesUrlPrefix}/portraits` },
    ]),
    iris: buildCategory("Iris Photography", [{ dir: path.join(publicDir, "images", "iris"), urlPrefix: "/images/iris" }]),
  }
}
