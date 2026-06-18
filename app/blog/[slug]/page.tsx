"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params)
  const { t, isRTL, language } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const BackArrow = isRTL ? ChevronRight : ChevronLeft

  const post = getBlogPostBySlug(resolvedParams.slug)
  const relatedPosts = getRelatedPosts(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "fa" ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const content = isRTL ? post.contentFa : post.contentEn

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={isRTL ? post.titleFa : post.titleEn}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <BackArrow className="h-5 w-5 me-1" />
              {isRTL ? "بازگشت به بلاگ" : "Back to Blog"}
            </Link>

            <span className="inline-block px-3 py-1 bg-gold text-accent-foreground text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {isRTL ? post.titleFa : post.titleEn}
            </h1>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.image}
                  alt={isRTL ? post.author.nameFa : post.author.nameEn}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">
                    {isRTL ? post.author.nameFa : post.author.nameEn}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              {content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                } else if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((item) => item.startsWith("- "))
                  return (
                    <ul key={index} className="space-y-2 my-4">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                          <span>{item.replace("- ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  )
                } else {
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground">
              {isRTL ? "مطالب مرتبط" : "Related Articles"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${relatedPost.slug}`}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={isRTL ? relatedPost.titleFa : relatedPost.titleEn}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(relatedPost.date)}</span>
                      </div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-navy transition-colors line-clamp-2">
                        {isRTL ? relatedPost.titleFa : relatedPost.titleEn}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              {isRTL
                ? "سوالی دارید؟ با ما در میان بگذارید"
                : "Have Questions? Get in Touch"}
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              {isRTL
                ? "تیم متخصص ما آماده پاسخگویی به سوالات شما درباره تجارت بین‌المللی است."
                : "Our expert team is ready to answer your questions about international trade."}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-accent-foreground font-semibold"
              >
                {t("hero.cta.contact")}
                <Arrow className="ms-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
