"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { servicesData } from "@/lib/services-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"

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

export default function ServicesPage() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            alt="Services Background"
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
              {t("services.title")}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData.map((service) => {
              const Icon = service.icon
              return (
                <motion.div key={service.key} variants={itemVariants}>
                  <Link href={service.href}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={isRTL ? service.titleFa : service.titleEn}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                        <div className="absolute bottom-4 start-4">
                          <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                            <Icon className="h-6 w-6 text-accent-foreground" />
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground group-hover:text-navy transition-colors">
                          {isRTL ? service.titleFa : service.titleEn}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                          {isRTL ? service.descriptionFa : service.descriptionEn}
                        </CardDescription>
                        <span className="inline-flex items-center text-navy font-medium text-sm group-hover:text-gold transition-colors">
                          {t("services.learn-more")}
                          <Arrow className="ms-2 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
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
              {t("service.cta")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("service.cta.text")}
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center bg-gold hover:bg-gold-light text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {t("hero.cta.contact")}
                <Arrow className="ms-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
