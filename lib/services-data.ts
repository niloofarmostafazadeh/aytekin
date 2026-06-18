import { Ship, TrendingUp, MessageSquare, Truck, FileCheck } from "lucide-react"

export interface ServiceData {
  key: string
  href: string
  icon: typeof Ship
  image: string
  titleEn: string
  titleFa: string
  descriptionEn: string
  descriptionFa: string
  featuresEn: string[]
  featuresFa: string[]
  detailsEn: string
  detailsFa: string
}

export const servicesData: ServiceData[] = [
  {
    key: "export-import",
    href: "/services/export-import",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
    titleEn: "Export & Import",
    titleFa: "صادرات و واردات",
    descriptionEn: "Comprehensive international trade services connecting your business to global markets with seamless import and export operations.",
    descriptionFa: "خدمات جامع تجارت بین‌المللی که کسب‌وکار شما را به بازارهای جهانی با عملیات واردات و صادرات بدون درز متصل می‌کند.",
    featuresEn: [
      "Global market access and expansion",
      "Trade documentation and compliance",
      "International payment solutions",
      "Risk management and insurance",
      "Product sourcing and supplier verification",
      "Quality inspection and control",
    ],
    featuresFa: [
      "دسترسی و گسترش بازار جهانی",
      "مستندات تجاری و انطباق",
      "راهکارهای پرداخت بین‌المللی",
      "مدیریت ریسک و بیمه",
      "تأمین محصول و تأیید تأمین‌کننده",
      "بازرسی و کنترل کیفیت",
    ],
    detailsEn: "Our export and import services are designed to simplify international trade for businesses of all sizes. We handle everything from documentation to logistics, ensuring your goods move smoothly across borders. Our team of experienced trade specialists works closely with you to identify opportunities, manage risks, and optimize your supply chain. Whether you're entering new markets or expanding existing operations, we provide the expertise and network you need to succeed.",
    detailsFa: "خدمات صادرات و واردات ما برای ساده‌سازی تجارت بین‌المللی برای کسب‌وکارهای همه اندازه طراحی شده است. ما همه چیز از مستندات تا لجستیک را مدیریت می‌کنیم و اطمینان می‌دهیم که کالاهای شما به راحتی از مرزها عبور کنند. تیم متخصصان تجاری با تجربه ما با شما همکاری نزدیک می‌کند تا فرصت‌ها را شناسایی، ریسک‌ها را مدیریت و زنجیره تأمین شما را بهینه کند.",
  },
  {
    key: "marketing",
    href: "/services/marketing",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    titleEn: "Marketing & Business Development",
    titleFa: "بازاریابی و توسعه تجارت",
    descriptionEn: "Strategic marketing solutions and business development services to expand your reach and grow your international presence.",
    descriptionFa: "راهکارهای بازاریابی استراتژیک و خدمات توسعه کسب‌وکار برای گسترش دامنه و رشد حضور بین‌المللی شما.",
    featuresEn: [
      "Market research and analysis",
      "Brand positioning and strategy",
      "Partner identification and networking",
      "Trade show representation",
      "Digital marketing for B2B",
      "Lead generation and sales support",
    ],
    featuresFa: [
      "تحقیقات و تحلیل بازار",
      "جایگاه‌یابی و استراتژی برند",
      "شناسایی شریک و شبکه‌سازی",
      "نمایندگی در نمایشگاه‌های تجاری",
      "بازاریابی دیجیتال برای B2B",
      "تولید سرنخ و پشتیبانی فروش",
    ],
    detailsEn: "In today's competitive global marketplace, effective marketing and business development are essential for success. Our team helps you identify and capitalize on opportunities in international markets. We conduct thorough market research, develop targeted strategies, and connect you with the right partners and customers. From trade shows to digital campaigns, we provide comprehensive support to grow your business globally.",
    detailsFa: "در بازار جهانی رقابتی امروز، بازاریابی مؤثر و توسعه کسب‌وکار برای موفقیت ضروری است. تیم ما به شما کمک می‌کند فرصت‌ها را در بازارهای بین‌المللی شناسایی و از آنها بهره‌برداری کنید. ما تحقیقات جامع بازار انجام می‌دهیم، استراتژی‌های هدفمند توسعه می‌دهیم و شما را با شرکا و مشتریان مناسب متصل می‌کنیم.",
  },
  {
    key: "consulting",
    href: "/services/consulting",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    titleEn: "Consulting & Trade Services",
    titleFa: "مشاوره و بازرگانی",
    descriptionEn: "Expert consulting services to navigate complex international trade regulations and optimize your business operations.",
    descriptionFa: "خدمات مشاوره تخصصی برای عبور از مقررات پیچیده تجارت بین‌المللی و بهینه‌سازی عملیات کسب‌وکار شما.",
    featuresEn: [
      "Trade compliance consulting",
      "Market entry strategy",
      "Regulatory guidance",
      "Contract negotiation support",
      "Due diligence services",
      "Trade finance advisory",
    ],
    featuresFa: [
      "مشاوره انطباق تجاری",
      "استراتژی ورود به بازار",
      "راهنمایی مقرراتی",
      "پشتیبانی مذاکره قرارداد",
      "خدمات بررسی دقیق",
      "مشاوره مالی تجاری",
    ],
    detailsEn: "International trade involves complex regulations, documentation requirements, and strategic decisions. Our consulting team brings decades of experience to help you navigate these challenges successfully. We provide guidance on compliance, help develop market entry strategies, and support you through negotiations and deal structuring. Our goal is to minimize risks while maximizing opportunities for your business.",
    detailsFa: "تجارت بین‌المللی شامل مقررات پیچیده، الزامات مستندسازی و تصمیمات استراتژیک است. تیم مشاوره ما دهه‌ها تجربه را برای کمک به شما در عبور موفقیت‌آمیز از این چالش‌ها به ارمغان می‌آورد. ما راهنمایی در مورد انطباق ارائه می‌دهیم، به توسعه استراتژی‌های ورود به بازار کمک می‌کنیم و شما را در مذاکرات و ساختاردهی معاملات پشتیبانی می‌کنیم.",
  },
  {
    key: "transportation",
    href: "/services/transportation",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    titleEn: "Transportation & Logistics",
    titleFa: "حمل و نقل و لجستیک",
    descriptionEn: "Efficient logistics and transportation solutions ensuring your goods reach their destination safely and on time.",
    descriptionFa: "راهکارهای کارآمد لجستیک و حمل و نقل تضمین‌کننده رسیدن کالاهای شما به مقصد به صورت ایمن و به موقع.",
    featuresEn: [
      "Multimodal transportation solutions",
      "Warehousing and distribution",
      "Freight forwarding",
      "Supply chain optimization",
      "Real-time tracking and visibility",
      "Last-mile delivery solutions",
    ],
    featuresFa: [
      "راهکارهای حمل و نقل چندوجهی",
      "انبارداری و توزیع",
      "ترانزیت باری",
      "بهینه‌سازی زنجیره تأمین",
      "ردیابی و مشاهده بلادرنگ",
      "راهکارهای تحویل آخرین مایل",
    ],
    detailsEn: "Efficient logistics are the backbone of successful international trade. Our transportation services cover every aspect of moving goods globally, from freight forwarding to last-mile delivery. We leverage our network of partners and cutting-edge technology to optimize routes, reduce costs, and ensure timely delivery. Whether by sea, air, rail, or road, we provide flexible solutions tailored to your specific needs.",
    detailsFa: "لجستیک کارآمد ستون فقرات تجارت بین‌المللی موفق است. خدمات حمل و نقل ما هر جنبه‌ای از جابجایی کالا در سطح جهانی را پوشش می‌دهد، از ترانزیت باری تا تحویل آخرین مایل. ما از شبکه شرکای خود و فناوری پیشرفته برای بهینه‌سازی مسیرها، کاهش هزینه‌ها و تضمین تحویل به موقع استفاده می‌کنیم.",
  },
  {
    key: "customs",
    href: "/services/customs",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    titleEn: "Customs Services",
    titleFa: "امور گمرکی",
    descriptionEn: "Streamlined customs clearance and documentation services to ensure smooth border crossings for your goods.",
    descriptionFa: "خدمات ترخیص گمرکی و مستندسازی ساده برای اطمینان از عبور روان کالاهای شما از مرزها.",
    featuresEn: [
      "Customs clearance and brokerage",
      "Documentation preparation",
      "Tariff classification",
      "Duty optimization",
      "Compliance auditing",
      "Bonded warehouse services",
    ],
    featuresFa: [
      "ترخیص گمرکی و کارگزاری",
      "تهیه مستندات",
      "طبقه‌بندی تعرفه",
      "بهینه‌سازی حقوق گمرکی",
      "ممیزی انطباق",
      "خدمات انبار قرنطینه",
    ],
    detailsEn: "Customs procedures can be complex and time-consuming, but they don't have to slow down your business. Our customs services team handles all aspects of clearance and documentation, ensuring compliance while minimizing delays and costs. We stay current with changing regulations and leverage our relationships with customs authorities to expedite the process. From tariff classification to duty optimization, we help you navigate customs efficiently.",
    detailsFa: "رویه‌های گمرکی می‌توانند پیچیده و زمان‌بر باشند، اما لازم نیست کسب‌وکار شما را کند کنند. تیم خدمات گمرکی ما همه جنبه‌های ترخیص و مستندسازی را مدیریت می‌کند، انطباق را تضمین می‌کند در حالی که تأخیرها و هزینه‌ها را به حداقل می‌رساند. ما با مقررات در حال تغییر به‌روز می‌مانیم و از روابط خود با مقامات گمرکی برای تسریع فرآیند استفاده می‌کنیم.",
  },
]

export function getServiceByKey(key: string): ServiceData | undefined {
  return servicesData.find((service) => service.key === key)
}

export function getRelatedServices(currentKey: string): ServiceData[] {
  return servicesData.filter((service) => service.key !== currentKey).slice(0, 3)
}
