"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
    titleEn: "Industrial Machinery",
    titleFa: "ماشین‌آلات صنعتی",
    category: "industrial",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    titleEn: "Electronic Components",
    titleFa: "قطعات الکترونیکی",
    category: "electronics",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    titleEn: "Steel & Metals",
    titleFa: "فولاد و فلزات",
    category: "raw-materials",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80",
    titleEn: "Premium Textiles",
    titleFa: "منسوجات ممتاز",
    category: "textiles",
  },
]

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export function FeaturedProducts() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="py-24 lg:py-32">
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
              {t("products.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t("products.subtitle")}
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
              {t("products.view-all")}
              <Arrow className="ms-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link href={`/products?category=${product.category}`}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={isRTL ? product.titleFa : product.titleEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-navy transition-colors">
                      {isRTL ? product.titleFa : product.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t(`products.${product.category}`)}
                    </p>
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
