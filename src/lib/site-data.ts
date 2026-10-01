/**
 * All salon content lives here. Pages read from this file, so updating the
 * business details, categories or photos only needs changes in this one place.
 */

export const siteMeta = {
  name: "Beautiful Braiding",
  bookingUrl: "https://schedulebility.com/beautifulbraiding",
  phone: "+18325632571",
  phoneDisplay: "+1 832 563 2571",
  address: "2602 Westerland Dr, Houston, Texas 77063",
  instagram: "https://www.instagram.com/beautifulbraids001",
  facebook: "https://www.facebook.com/share/1C92dSbgsV/",
};

export const whatsappUrl = `https://wa.me/${siteMeta.phone.replace(/\D/g, "")}`;
export const callUrl = `tel:${siteMeta.phone}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteMeta.address)}`;

export const HOURS = [
  {
    day: "Mon – Thu",
    detail: "Open 24 hours",
    note: "Walk-ins 8 AM – 8 PM · Appointments only after 8 PM",
  },
  { day: "Friday", detail: "6 AM – 8 PM", note: "Walk-ins & appointments" },
  { day: "Saturday", detail: "6 AM – 8 PM", note: "Walk-ins & appointments" },
  { day: "Sunday", detail: "9 AM – 4 PM", note: "Walk-ins & appointments" },
];

export type Subcategory = { name: string; subcatId: number; image: string; link: string };
export type Category = {
  slug: string;
  name: string;
  categoryId: number;
  image: string;
  link: string;
  promo: boolean;
  subcategories: Subcategory[];
};

const rawCategories: Omit<Category, "slug" | "promo">[] = [
  {
    name: "PROMOTION",
    categoryId: 7536,
    image: "/images/39e96c3064324465fd27374916b63ed4.jpg",
    link: "https://schedulebility.com/beautifulbraiding/?category=7536",
    subcategories: [],
  },
  {
    name: "BOHO BRAIDS",
    categoryId: 7519,
    image: "/images/2c6bed3ccee79e2d908652ee96ca75eb.jpg",
    link: "https://schedulebility.com/beautifulbraiding/?category=7519",
    subcategories: [
      { name: "SMALL BOHO BRAIDS", subcatId: 7520, image: "/images/39e96c3064324465fd27374916b63ed4.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7520" },
      { name: "SMALL MEDIUM BOHO BRAIDS", subcatId: 7521, image: "/images/2c6bed3ccee79e2d908652ee96ca75eb.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7521" },
      { name: "MEDIUM BOHO BRAIDS", subcatId: 7522, image: "/images/49b868d756382630bac97529ee4bd34a.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7522" },
    ],
  },
  {
    name: "KNOTLESS BRAIDS",
    categoryId: 7523,
    image: "/images/2244e0f24c281572dd08cba496778ed4.jpg",
    link: "https://schedulebility.com/beautifulbraiding/?category=7523",
    subcategories: [
      { name: "SMALL KNOTLESS BRAIDS", subcatId: 7524, image: "/images/2244e0f24c281572dd08cba496778ed4.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7524" },
      { name: "SMEDIUM KNOTLESS BRAIDS", subcatId: 7525, image: "/images/2ca5e73b023d3103a4fc027df1756bf8.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7525" },
      { name: "MEDIUM KNOTLESS BRAIDS", subcatId: 7526, image: "/images/10d5e87ea6036dff97cf16c188a458ea.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7526" },
      { name: "LARGE KNOTLESS BRAIDS", subcatId: 7527, image: "/images/3c4d16b9b953aa97c34741a504e5f456.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7527" },
    ],
  },
  {
    name: "VERSATILE-KNOTLESS",
    categoryId: 7528,
    image: "/images/3d2342f880c13c188198d335090f3b9b.jpg",
    link: "https://schedulebility.com/beautifulbraiding/?category=7528",
    subcategories: [],
  },
  {
    name: "GODDESS KNOTLESS BRAIDS",
    categoryId: 7529,
    image: "/images/b6ae8203235676ecf21ad1f383927842.jpg",
    link: "https://schedulebility.com/beautifulbraiding/?category=7529",
    subcategories: [
      { name: "SMALL/SMEDIUM GODDESS KNOTLESS", subcatId: 7530, image: "/images/b6ae8203235676ecf21ad1f383927842.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7530" },
      { name: "MEDIUM GODDESS KNOTLESS", subcatId: 7531, image: "/images/124d3413ecfdcbeb4ee0e1c9bc0c9134.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7531" },
    ],
  },
  {
    name: "KNOTLESS TWIST",
    categoryId: 7532,
    image: "/images/320a4637cdb64e3c8abd7f14d4f53bf6.jpg",
    link: "https://schedulebility.com/beautifulbraiding/?category=7532",
    subcategories: [
      { name: "SMALL KNOTLESS TWIST", subcatId: 7533, image: "/images/320a4637cdb64e3c8abd7f14d4f53bf6.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7533" },
      { name: "SMEDIUM KNOTLESS TWIST", subcatId: 7534, image: "/images/60e789c6043520350af7e8d032dfad6b.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7534" },
      { name: "MEDIUM KNOTLESS TWIST", subcatId: 7535, image: "/images/00a679d7ccbdd0fd9885de0f345e2916.jpg", link: "https://schedulebility.com/beautifulbraiding/?category=7535" },
    ],
  },
];

/** "SMALL/SMEDIUM GODDESS KNOTLESS" -> "Small/smedium goddess knotless" */
export const sentenceCase = (s: string) => {
  const lower = s.replace(/-/g, " ").toLowerCase().trim();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const allCategories: Category[] = rawCategories.map((c) => ({
  ...c,
  name: sentenceCase(c.name),
  slug: slugify(c.name),
  promo: c.name === "PROMOTION",
  subcategories: c.subcategories.map((s) => ({ ...s, name: sentenceCase(s.name) })),
}));

export const promotion = allCategories.find((c) => c.promo)!;
export const categories = allCategories.filter((c) => !c.promo);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

const DESCRIPTIONS: Record<string, string> = {
  "boho-braids":
    "Knotless braids finished with soft, curly bohemian pieces for a full, romantic look that is gentle on your scalp.",
  "knotless-braids":
    "A sleek, tension-free braid that starts with your natural hair, smooth and seamless from root to tip.",
  "versatile-knotless":
    "Knotless braids that can be worn up, down or swept into a ponytail, so one install gives you several looks.",
  "goddess-knotless-braids":
    "Knotless braids with curly strands left out along the length for a soft, glamorous goddess finish.",
  "knotless-twist":
    "Neat two-strand twists started knotless at the root for a lightweight, natural-looking protective style.",
};
export const describe = (slug: string) => DESCRIPTIONS[slug] ?? "";

export const SERVICE_PAGE_INSTRUCTION =
  "Choose your preferred size to see current pricing and appointment availability on our booking page.";

/** Best-looking photos, used for the homepage hero slideshow. */
export const HERO_SLIDES = [
  { src: "/images/124d3413ecfdcbeb4ee0e1c9bc0c9134.jpg", alt: "Medium goddess knotless braids" },
  { src: "/images/2244e0f24c281572dd08cba496778ed4.jpg", alt: "Small knotless braids in copper" },
  { src: "/images/2c6bed3ccee79e2d908652ee96ca75eb.jpg", alt: "Small medium boho braids in honey blonde" },
  { src: "/images/39e96c3064324465fd27374916b63ed4.jpg", alt: "Small boho braids" },
  { src: "/images/60e789c6043520350af7e8d032dfad6b.jpg", alt: "Smedium knotless twist" },
  { src: "/images/3c4d16b9b953aa97c34741a504e5f456.jpg", alt: "Large knotless braids" },
];

/**
 * Gallery: many uploaded photos are exact duplicates saved under different
 * names, so only the unique shots are listed here.
 */
export const gallery = [
  { src: "/images/124d3413ecfdcbeb4ee0e1c9bc0c9134.jpg", alt: "Medium goddess knotless", tall: true },
  { src: "/images/39e96c3064324465fd27374916b63ed4.jpg", alt: "Small boho braids", tall: false },
  { src: "/images/2244e0f24c281572dd08cba496778ed4.jpg", alt: "Small knotless braids", tall: false },
  { src: "/images/2c6bed3ccee79e2d908652ee96ca75eb.jpg", alt: "Small medium boho braids", tall: true },
  { src: "/images/49b868d756382630bac97529ee4bd34a.jpg", alt: "Medium boho braids", tall: false },
  { src: "/images/3c4d16b9b953aa97c34741a504e5f456.jpg", alt: "Large knotless braids", tall: false },
  { src: "/images/60e789c6043520350af7e8d032dfad6b.jpg", alt: "Smedium knotless twist", tall: true },
  { src: "/images/2ca5e73b023d3103a4fc027df1756bf8.jpg", alt: "Smedium knotless braids", tall: false },
  { src: "/images/b6ae8203235676ecf21ad1f383927842.jpg", alt: "Small/smedium goddess knotless", tall: false },
  { src: "/images/10d5e87ea6036dff97cf16c188a458ea.jpg", alt: "Medium knotless braids", tall: true },
  { src: "/images/3d2342f880c13c188198d335090f3b9b.jpg", alt: "Versatile knotless", tall: false },
  { src: "/images/320a4637cdb64e3c8abd7f14d4f53bf6.jpg", alt: "Small knotless twist", tall: false },
  { src: "/images/00a679d7ccbdd0fd9885de0f345e2916.jpg", alt: "Medium knotless twist", tall: true },
];
