"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { products, categories } from "@/lib/products-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
}

function ProductsContent() {
  const { t, isRTL } = useLanguage()
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setActiveCategory(category)
    }
  }, [searchParams])

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            alt="Products Background"
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
              {t("nav.products")}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t("products.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 border-b border-border sticky top-16 bg-background z-40">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <span className="text-sm text-muted-foreground me-2">
              {t("products.filter")}:
            </span>
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.key)}
                className={
                  activeCategory === category.key
                    ? "bg-navy hover:bg-navy-light text-primary-foreground"
                    : "border-border hover:border-navy hover:text-navy"
                }
              >
                {isRTL ? category.labelFa : category.labelEn}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants} layout>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={isRTL ? product.titleFa : product.titleEn}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-gold text-accent-foreground text-xs font-medium rounded-full">
                          {
                            categories.find((c) => c.key === product.category)?.[
                              isRTL ? "labelFa" : "labelEn"
                            ]
                          }
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-navy transition-colors mb-2">
                        {isRTL ? product.titleFa : product.titleEn}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {isRTL ? product.descriptionFa : product.descriptionEn}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground">
                {isRTL
                  ? "محصولی در این دسته‌بندی یافت نشد"
                  : "No products found in this category"}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isRTL ? "به دنبال محصول خاصی هستید؟" : "Looking for a Specific Product?"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isRTL
                ? "تیم ما می‌تواند به شما در یافتن محصولات مناسب برای کسب‌وکارتان کمک کند. همین امروز با ما تماس بگیرید."
                : "Our team can help you find the right products for your business. Contact us today to discuss your requirements."}
            </p>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-accent-foreground"
              asChild
            >
              <a href="/contact">{t("hero.cta.contact")}</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function ProductsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  )
}
