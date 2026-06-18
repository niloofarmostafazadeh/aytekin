"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    slug: "international-trade-trends-2024",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    titleEn: "International Trade Trends to Watch in 2024",
    titleFa: "روندهای تجارت بین‌المللی قابل توجه در سال ۲۰۲۴",
    excerptEn: "Explore the key trends shaping global trade this year, from digital transformation to sustainable practices.",
    excerptFa: "روندهای کلیدی شکل‌دهنده تجارت جهانی امسال را بررسی کنید، از تحول دیجیتال تا شیوه‌های پایدار.",
    date: "2024-01-15",
  },
  {
    id: 2,
    slug: "customs-regulations-guide",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    titleEn: "A Complete Guide to Customs Regulations",
    titleFa: "راهنمای کامل مقررات گمرکی",
    excerptEn: "Understanding customs procedures is essential for smooth international trade. Learn the basics here.",
    excerptFa: "درک رویه‌های گمرکی برای تجارت بین‌المللی روان ضروری است. اصول را اینجا بیاموزید.",
    date: "2024-01-10",
  },
  {
    id: 3,
    slug: "logistics-optimization-strategies",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    titleEn: "Logistics Optimization Strategies for SMEs",
    titleFa: "استراتژی‌های بهینه‌سازی لجستیک برای کسب‌وکارهای کوچک و متوسط",
    excerptEn: "Discover practical strategies to optimize your supply chain and reduce logistics costs.",
    excerptFa: "استراتژی‌های عملی برای بهینه‌سازی زنجیره تأمین و کاهش هزینه‌های لجستیک را کشف کنید.",
    date: "2024-01-05",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function BlogPreview() {
  const { t, isRTL, language } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "fa" ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("blog.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t("blog.subtitle")}
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
              {t("blog.view-all")}
              <Arrow className="ms-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={isRTL ? post.titleFa : post.titleEn}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-navy transition-colors mb-2 line-clamp-2">
                      {isRTL ? post.titleFa : post.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                      {isRTL ? post.excerptFa : post.excerptEn}
                    </p>
                    <span className="inline-flex items-center text-navy font-medium text-sm mt-4 group-hover:text-gold transition-colors">
                      {t("blog.read-more")}
                      <Arrow className="ms-2 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
