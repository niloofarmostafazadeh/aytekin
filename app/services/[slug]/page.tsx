"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { getServiceByKey, getRelatedServices } from "@/lib/services-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export default function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = use(params)
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const BackArrow = isRTL ? ChevronRight : ChevronLeft

  const service = getServiceByKey(resolvedParams.slug)
  const relatedServices = getRelatedServices(resolvedParams.slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon
  const features = isRTL ? service.featuresFa : service.featuresEn

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={isRTL ? service.titleFa : service.titleEn}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-primary-foreground/80 hover:text-gold mb-6 transition-colors"
            >
              <BackArrow className="h-5 w-5 me-1" />
              {t("service.back")}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center">
                <Icon className="h-8 w-8 text-gold" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl">
              {isRTL ? service.titleFa : service.titleEn}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              {isRTL ? service.descriptionFa : service.descriptionEn}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isRTL ? "درباره این خدمت" : "About This Service"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {isRTL ? service.detailsFa : service.detailsEn}
              </p>

              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-accent-foreground"
                >
                  {t("service.cta")}
                  <Arrow className="ms-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-secondary/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {isRTL ? "ویژگی‌های کلیدی" : "Key Features"}
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t("service.related")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService, index) => {
              const RelatedIcon = relatedService.icon
              return (
                <motion.div
                  key={relatedService.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={relatedService.href}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                          <RelatedIcon className="h-6 w-6 text-navy group-hover:text-gold transition-colors" />
                        </div>
                        <CardTitle className="text-lg text-foreground group-hover:text-navy transition-colors">
                          {isRTL ? relatedService.titleFa : relatedService.titleEn}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {isRTL ? relatedService.descriptionFa : relatedService.descriptionEn}
                        </p>
                        <span className="inline-flex items-center text-navy font-medium text-sm group-hover:text-gold transition-colors">
                          {t("services.learn-more")}
                          <Arrow className="ms-2 h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
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
              {t("service.cta")}
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              {t("service.cta.text")}
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
