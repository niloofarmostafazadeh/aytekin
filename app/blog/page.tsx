"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { blogPosts } from "@/lib/blog-data"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight, ArrowLeft } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function BlogPage() {
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
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
            alt="Blog Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("blog.title")}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t("blog.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={isRTL ? post.titleFa : post.titleEn}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 start-4">
                        <span className="inline-block px-3 py-1 bg-gold text-accent-foreground text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>
                            {isRTL ? post.author.nameFa : post.author.nameEn}
                          </span>
                        </div>
                      </div>
                      <h2 className="font-bold text-xl text-foreground group-hover:text-navy transition-colors mb-3 line-clamp-2">
                        {isRTL ? post.titleFa : post.titleEn}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-4">
                        {isRTL ? post.excerptFa : post.excerptEn}
                      </p>
                      <span className="inline-flex items-center text-navy font-medium text-sm group-hover:text-gold transition-colors">
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
    </>
  )
}
