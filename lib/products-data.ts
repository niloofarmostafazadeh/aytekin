export interface Product {
  id: number
  slug: string
  image: string
  titleEn: string
  titleFa: string
  descriptionEn: string
  descriptionFa: string
  category: string
}

export const categories = [
  { key: "all", labelEn: "All Products", labelFa: "همه محصولات" },
  { key: "industrial", labelEn: "Industrial Goods", labelFa: "کالاهای صنعتی" },
  { key: "electronics", labelEn: "Electronics", labelFa: "الکترونیک" },
  { key: "raw-materials", labelEn: "Raw Materials", labelFa: "مواد اولیه" },
  { key: "textiles", labelEn: "Textiles", labelFa: "منسوجات" },
  { key: "food", labelEn: "Food Products", labelFa: "محصولات غذایی" },
]

export const products: Product[] = [
  {
    id: 1,
    slug: "industrial-machinery",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    titleEn: "Industrial Machinery",
    titleFa: "ماشین‌آلات صنعتی",
    descriptionEn: "High-quality industrial machinery and equipment for manufacturing facilities. Reliable performance and durability guaranteed.",
    descriptionFa: "ماشین‌آلات و تجهیزات صنعتی با کیفیت بالا برای تأسیسات تولیدی. عملکرد قابل اعتماد و دوام تضمین شده.",
    category: "industrial",
  },
  {
    id: 2,
    slug: "electronic-components",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    titleEn: "Electronic Components",
    titleFa: "قطعات الکترونیکی",
    descriptionEn: "Premium electronic components including semiconductors, integrated circuits, and electronic parts for various industries.",
    descriptionFa: "قطعات الکترونیکی ممتاز شامل نیمه‌هادی‌ها، مدارهای مجتمع و قطعات الکترونیکی برای صنایع مختلف.",
    category: "electronics",
  },
  {
    id: 3,
    slug: "steel-metals",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    titleEn: "Steel & Metals",
    titleFa: "فولاد و فلزات",
    descriptionEn: "Quality steel products and various metals including aluminum, copper, and alloys for construction and manufacturing.",
    descriptionFa: "محصولات فولادی با کیفیت و فلزات مختلف شامل آلومینیوم، مس و آلیاژها برای ساخت و ساز و تولید.",
    category: "raw-materials",
  },
  {
    id: 4,
    slug: "premium-textiles",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
    titleEn: "Premium Textiles",
    titleFa: "منسوجات ممتاز",
    descriptionEn: "High-quality textiles and fabrics for fashion, home furnishing, and industrial applications.",
    descriptionFa: "منسوجات و پارچه‌های با کیفیت بالا برای مد، مبلمان خانگی و کاربردهای صنعتی.",
    category: "textiles",
  },
  {
    id: 5,
    slug: "heavy-equipment",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    titleEn: "Heavy Equipment",
    titleFa: "تجهیزات سنگین",
    descriptionEn: "Construction and mining heavy equipment including excavators, loaders, and specialized machinery.",
    descriptionFa: "تجهیزات سنگین ساختمانی و معدنی شامل بیل مکانیکی، لودر و ماشین‌آلات تخصصی.",
    category: "industrial",
  },
  {
    id: 6,
    slug: "consumer-electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",
    titleEn: "Consumer Electronics",
    titleFa: "الکترونیک مصرفی",
    descriptionEn: "Wide range of consumer electronics including smartphones, tablets, and home appliances.",
    descriptionFa: "طیف گسترده‌ای از لوازم الکترونیکی مصرفی شامل گوشی‌های هوشمند، تبلت و لوازم خانگی.",
    category: "electronics",
  },
  {
    id: 7,
    slug: "chemical-raw-materials",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    titleEn: "Chemical Raw Materials",
    titleFa: "مواد اولیه شیمیایی",
    descriptionEn: "Industrial chemicals and raw materials for pharmaceutical, cosmetic, and manufacturing industries.",
    descriptionFa: "مواد شیمیایی صنعتی و مواد اولیه برای صنایع دارویی، آرایشی و تولیدی.",
    category: "raw-materials",
  },
  {
    id: 8,
    slug: "cotton-fabrics",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    titleEn: "Cotton Fabrics",
    titleFa: "پارچه‌های پنبه‌ای",
    descriptionEn: "Premium cotton fabrics in various grades and specifications for textile manufacturers.",
    descriptionFa: "پارچه‌های پنبه‌ای ممتاز در درجات و مشخصات مختلف برای تولیدکنندگان نساجی.",
    category: "textiles",
  },
  {
    id: 9,
    slug: "dried-fruits",
    image: "https://images.unsplash.com/photo-1596591868231-49a5e7a7c3c1?w=600&q=80",
    titleEn: "Dried Fruits & Nuts",
    titleFa: "خشکبار و آجیل",
    descriptionEn: "Premium quality dried fruits and nuts including pistachios, almonds, and dates from trusted sources.",
    descriptionFa: "خشکبار و آجیل با کیفیت ممتاز شامل پسته، بادام و خرما از منابع معتبر.",
    category: "food",
  },
  {
    id: 10,
    slug: "saffron",
    image: "https://images.unsplash.com/photo-1605432722069-28fa2f14021b?w=600&q=80",
    titleEn: "Premium Saffron",
    titleFa: "زعفران ممتاز",
    descriptionEn: "Highest quality Persian saffron, carefully selected and packaged for export to global markets.",
    descriptionFa: "زعفران ایرانی با بالاترین کیفیت، به دقت انتخاب و بسته‌بندی شده برای صادرات به بازارهای جهانی.",
    category: "food",
  },
  {
    id: 11,
    slug: "automotive-parts",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    titleEn: "Automotive Parts",
    titleFa: "قطعات خودرو",
    descriptionEn: "OEM and aftermarket automotive parts for various vehicle makes and models.",
    descriptionFa: "قطعات خودرو OEM و بازار ثانویه برای برندها و مدل‌های مختلف خودرو.",
    category: "industrial",
  },
  {
    id: 12,
    slug: "solar-panels",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    titleEn: "Solar Panels",
    titleFa: "پنل‌های خورشیدی",
    descriptionEn: "High-efficiency solar panels and renewable energy equipment for commercial and residential use.",
    descriptionFa: "پنل‌های خورشیدی با راندمان بالا و تجهیزات انرژی تجدیدپذیر برای استفاده تجاری و مسکونی.",
    category: "electronics",
  },
]

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
