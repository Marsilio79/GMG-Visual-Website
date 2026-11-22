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

const IGNORED_FILENAME_TOKENS = new Set([
  "pic",
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
])

// Turns a file name into a few readable words for the alt text. Returns an empty
// string when the name is only a camera number (DSC01198, DJI_0063, 0535 and so on),
// so those images get a clean generic description instead of a meaningless code.
function humanize(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "")
  const tokens = base
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[-_.\s]+/)
    .map((token) => token.replace(/^\d+/, "").replace(/\d+$/, ""))
    .filter((token) => token.length > 1)
    .filter((token) => !/^(dsc|dji|gna|img)$/i.test(token))
    .filter((token) => !IGNORED_FILENAME_TOKENS.has(token.toLowerCase()))

  const words = tokens.join(" ").trim()
  return words.length >= 3 ? words.toLowerCase() : ""
}

interface CategoryOptions {
  // Used for photos of people where the file name holds a personal name: the alt
  // text stays descriptive without naming anyone.
  anonymous?: boolean
}

function buildCategory(label: string, sources: PhotoSource[], options: CategoryOptions = {}): PhotoItem[] {
  const items: PhotoItem[] = []

  for (const { dir, urlPrefix } of sources) {
    for (const filename of listImageFiles(dir)) {
      const words = options.anonymous ? "" : humanize(filename)
      const alt = options.anonymous
        ? `${label}: close up portrait of a human iris, by GMG Visual`
        : words
          ? `${label}: ${words}, by GMG Visual`
          : `${label} by GMG Visual`

      items.push({
        id: `${urlPrefix}/${filename}`,
        src: `${urlPrefix}/${encodeURIComponent(filename)}`,
        alt,
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
      buildCategory("Food and hospitality photography", [
        { dir: path.join(publicDir, "images", "food"), urlPrefix: "/images/food" },
        { dir: path.join(newPicturesDir, "food-hospitality"), urlPrefix: `${newPicturesUrlPrefix}/food-hospitality` },
      ]),
      FOOD_FEATURED_ORDER,
    ),
    events: buildCategory("Event photography", [
      { dir: path.join(publicDir, "images", "events"), urlPrefix: "/images/events" },
      { dir: path.join(newPicturesDir, "events"), urlPrefix: `${newPicturesUrlPrefix}/events` },
    ]),
    portraits: buildCategory("Portrait photography", [
      { dir: path.join(publicDir, "images", "portraits"), urlPrefix: "/images/portraits" },
      { dir: path.join(newPicturesDir, "portraits"), urlPrefix: `${newPicturesUrlPrefix}/portraits` },
    ]),
    iris: buildCategory("Iris photography", [{ dir: path.join(publicDir, "images", "iris"), urlPrefix: "/images/iris" }], {
      anonymous: true,
    }),
  }
}
