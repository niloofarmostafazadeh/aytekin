"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "fa"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.blog": "Blog",
    "nav.contact": "Contact Us",
    "nav.products": "Products",
    
    // Services submenu
    "services.export-import": "Export & Import",
    "services.marketing": "Marketing & Business Development",
    "services.consulting": "Consulting & Trade Services",
    "services.transportation": "Transportation & Logistics",
    "services.customs": "Customs Services",
    
    // Hero
    "hero.title": "Global Trade Solutions for Your Business",
    "hero.subtitle": "Connecting businesses worldwide with reliable import-export services, logistics solutions, and expert trade consulting.",
    "hero.cta.contact": "Contact Us",
    "hero.cta.services": "Our Services",
    
    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive trade solutions tailored to your business needs",
    "services.export-import.desc": "Seamless international trade operations with global network coverage",
    "services.marketing.desc": "Strategic market expansion and business growth solutions",
    "services.consulting.desc": "Expert guidance for navigating complex trade regulations",
    "services.transportation.desc": "Efficient logistics and supply chain management",
    "services.customs.desc": "Streamlined customs clearance and documentation",
    "services.learn-more": "Learn More",
    
    // About Preview
    "about.preview.title": "About Aytekin Trade",
    "about.preview.text": "With over 15 years of experience in international trade, Aytekin Trade has established itself as a trusted partner for businesses seeking to expand their global footprint. Our team of experts provides comprehensive solutions that simplify complex trade processes.",
    "about.preview.cta": "Learn More About Us",
    
    // Why Choose Us
    "why.title": "Why Choose Us",
    "why.subtitle": "The trusted partner for your international trade needs",
    "why.trust.title": "Trusted Partnership",
    "why.trust.desc": "Building long-term relationships based on transparency and reliability",
    "why.speed.title": "Fast Delivery",
    "why.speed.desc": "Efficient processes ensuring timely delivery of your goods",
    "why.experience.title": "15+ Years Experience",
    "why.experience.desc": "Decades of expertise in international trade and logistics",
    "why.global.title": "Global Network",
    "why.global.desc": "Connections across 50+ countries for seamless operations",
    
    // Products
    "products.title": "Featured Products",
    "products.subtitle": "Quality products for global markets",
    "products.view-all": "View All Products",
    "products.category": "Category",
    "products.filter": "Filter by Category",
    "products.all": "All Products",
    "products.industrial": "Industrial Goods",
    "products.electronics": "Electronics",
    "products.raw-materials": "Raw Materials",
    "products.textiles": "Textiles",
    "products.food": "Food Products",
    
    // Blog
    "blog.title": "Latest Insights",
    "blog.subtitle": "Stay updated with industry news and expert analysis",
    "blog.read-more": "Read More",
    "blog.view-all": "View All Articles",
    "blog.published": "Published",
    "blog.by": "By",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our team",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hours.value": "Mon - Fri: 9:00 AM - 6:00 PM",
    
    // Footer
    "footer.description": "Your trusted partner in international trade, providing comprehensive solutions for businesses worldwide.",
    "footer.quick-links": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact Info",
    "footer.copyright": "All rights reserved.",
    "footer.address": "Tehran, Iran",
    
    // About Page
    "about.title": "About Aytekin Trade",
    "about.intro": "Aytekin Trade is a leading international trading company specializing in connecting businesses across global markets. With our headquarters in Tehran, we facilitate seamless trade operations between Iran and the world.",
    "about.mission.title": "Our Mission",
    "about.mission.text": "To empower businesses with reliable, efficient, and innovative trade solutions that break down barriers and create opportunities in the global marketplace.",
    "about.vision.title": "Our Vision",
    "about.vision.text": "To become the most trusted name in international trade, recognized for excellence, integrity, and customer-centric solutions.",
    "about.why.title": "Why Partner With Us",
    "about.why.item1": "Extensive network across 50+ countries",
    "about.why.item2": "Dedicated team of trade specialists",
    "about.why.item3": "End-to-end supply chain solutions",
    "about.why.item4": "Competitive pricing and transparent processes",
    "about.why.item5": "24/7 customer support",
    "about.team.title": "Our Leadership Team",
    
    // Service Pages
    "service.back": "Back to Services",
    "service.related": "Related Services",
    "service.cta": "Get Started Today",
    "service.cta.text": "Contact us to learn how we can help your business",
    
    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
  },
  fa: {
    // Navigation
    "nav.home": "خانه",
    "nav.services": "خدمات",
    "nav.about": "درباره ما",
    "nav.blog": "بلاگ",
    "nav.contact": "تماس با ما",
    "nav.products": "محصولات",
    
    // Services submenu
    "services.export-import": "صادرات و واردات",
    "services.marketing": "بازاریابی و توسعه تجارت",
    "services.consulting": "مشاوره و بازرگانی",
    "services.transportation": "حمل و نقل و لجستیک",
    "services.customs": "امور گمرکی",
    
    // Hero
    "hero.title": "راهکارهای تجارت جهانی برای کسب‌وکار شما",
    "hero.subtitle": "اتصال کسب‌وکارها در سراسر جهان با خدمات واردات و صادرات قابل اعتماد، راهکارهای لجستیک و مشاوره تخصصی تجارت.",
    "hero.cta.contact": "تماس با ما",
    "hero.cta.services": "خدمات ما",
    
    // Services Section
    "services.title": "خدمات ما",
    "services.subtitle": "راهکارهای تجاری جامع متناسب با نیازهای کسب‌وکار شما",
    "services.export-import.desc": "عملیات تجارت بین‌المللی بدون درز با پوشش شبکه جهانی",
    "services.marketing.desc": "راهکارهای استراتژیک گسترش بازار و رشد کسب‌وکار",
    "services.consulting.desc": "راهنمایی تخصصی برای عبور از مقررات پیچیده تجاری",
    "services.transportation.desc": "مدیریت کارآمد لجستیک و زنجیره تأمین",
    "services.customs.desc": "ترخیص گمرکی و مستندسازی ساده",
    "services.learn-more": "بیشتر بدانید",
    
    // About Preview
    "about.preview.title": "درباره آیتکین ترید",
    "about.preview.text": "با بیش از ۱۵ سال تجربه در تجارت بین‌المللی، آیتکین ترید خود را به عنوان یک شریک قابل اعتماد برای کسب‌وکارهایی که به دنبال گسترش حضور جهانی خود هستند، تثبیت کرده است. تیم متخصصان ما راهکارهای جامعی ارائه می‌دهد که فرآیندهای پیچیده تجاری را ساده می‌کند.",
    "about.preview.cta": "بیشتر درباره ما بدانید",
    
    // Why Choose Us
    "why.title": "چرا ما را انتخاب کنید",
    "why.subtitle": "شریک مورد اعتماد برای نیازهای تجارت بین‌المللی شما",
    "why.trust.title": "مشارکت مورد اعتماد",
    "why.trust.desc": "ایجاد روابط بلندمدت بر پایه شفافیت و قابلیت اطمینان",
    "why.speed.title": "تحویل سریع",
    "why.speed.desc": "فرآیندهای کارآمد تضمین‌کننده تحویل به موقع کالاهای شما",
    "why.experience.title": "بیش از ۱۵ سال تجربه",
    "why.experience.desc": "دهه‌ها تخصص در تجارت بین‌المللی و لجستیک",
    "why.global.title": "شبکه جهانی",
    "why.global.desc": "ارتباطات در بیش از ۵۰ کشور برای عملیات بدون درز",
    
    // Products
    "products.title": "محصولات برگزیده",
    "products.subtitle": "محصولات با کیفیت برای بازارهای جهانی",
    "products.view-all": "مشاهده همه محصولات",
    "products.category": "دسته‌بندی",
    "products.filter": "فیلتر بر اساس دسته‌بندی",
    "products.all": "همه محصولات",
    "products.industrial": "کالاهای صنعتی",
    "products.electronics": "الکترونیک",
    "products.raw-materials": "مواد اولیه",
    "products.textiles": "منسوجات",
    "products.food": "محصولات غذایی",
    
    // Blog
    "blog.title": "آخرین مطالب",
    "blog.subtitle": "با اخبار صنعت و تحلیل‌های تخصصی به‌روز باشید",
    "blog.read-more": "ادامه مطلب",
    "blog.view-all": "مشاهده همه مقالات",
    "blog.published": "انتشار",
    "blog.by": "نویسنده",
    
    // Contact
    "contact.title": "تماس با ما",
    "contact.subtitle": "با تیم ما در ارتباط باشید",
    "contact.form.name": "نام کامل",
    "contact.form.email": "آدرس ایمیل",
    "contact.form.message": "پیام شما",
    "contact.form.submit": "ارسال پیام",
    "contact.info.title": "اطلاعات تماس",
    "contact.info.address": "آدرس",
    "contact.info.phone": "تلفن",
    "contact.info.email": "ایمیل",
    "contact.info.hours": "ساعات کاری",
    "contact.info.hours.value": "شنبه - چهارشنبه: ۹:۰۰ صبح - ۶:۰۰ عصر",
    
    // Footer
    "footer.description": "شریک مورد اعتماد شما در تجارت بین‌المللی، ارائه‌دهنده راهکارهای جامع برای کسب‌وکارها در سراسر جهان.",
    "footer.quick-links": "دسترسی سریع",
    "footer.services": "خدمات",
    "footer.contact": "اطلاعات تماس",
    "footer.copyright": "تمامی حقوق محفوظ است.",
    "footer.address": "تهران، ایران",
    
    // About Page
    "about.title": "درباره آیتکین ترید",
    "about.intro": "آیتکین ترید یک شرکت تجاری بین‌المللی پیشرو است که در اتصال کسب‌وکارها در بازارهای جهانی تخصص دارد. با دفتر مرکزی در تهران، ما عملیات تجاری بدون درز بین ایران و جهان را تسهیل می‌کنیم.",
    "about.mission.title": "مأموریت ما",
    "about.mission.text": "توانمندسازی کسب‌وکارها با راهکارهای تجاری قابل اعتماد، کارآمد و نوآورانه که موانع را از بین می‌برد و فرصت‌هایی در بازار جهانی ایجاد می‌کند.",
    "about.vision.title": "چشم‌انداز ما",
    "about.vision.text": "تبدیل شدن به معتبرترین نام در تجارت بین‌المللی، شناخته شده به خاطر تعالی، صداقت و راهکارهای مشتری‌محور.",
    "about.why.title": "چرا با ما همکاری کنید",
    "about.why.item1": "شبکه گسترده در بیش از ۵۰ کشور",
    "about.why.item2": "تیم اختصاصی متخصصان تجارت",
    "about.why.item3": "راهکارهای جامع زنجیره تأمین",
    "about.why.item4": "قیمت‌گذاری رقابتی و فرآیندهای شفاف",
    "about.why.item5": "پشتیبانی مشتری ۲۴ ساعته",
    "about.team.title": "تیم رهبری ما",
    
    // Service Pages
    "service.back": "بازگشت به خدمات",
    "service.related": "خدمات مرتبط",
    "service.cta": "همین امروز شروع کنید",
    "service.cta.text": "برای آشنایی با نحوه کمک به کسب‌وکارتان با ما تماس بگیرید",
    
    // Common
    "common.loading": "در حال بارگذاری...",
    "common.error": "خطایی رخ داد",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "fa")) {
      setLanguageState(saved)
    }
  }, [])
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }
  
  const t = (key: string): string => {
    return translations[language][key] || key
  }
  
  const isRTL = language === "fa"
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
