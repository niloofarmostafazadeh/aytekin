"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

export function AboutPreview() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const highlights = [
    isRTL ? "بیش از ۱۵ سال تجربه" : "15+ Years of Experience",
    isRTL ? "شبکه جهانی در ۵۰+ کشور" : "Global Network in 50+ Countries",
    isRTL ? "تیم متخصص و حرفه‌ای" : "Expert Professional Team",
    isRTL ? "راهکارهای جامع تجاری" : "Comprehensive Trade Solutions",
  ]

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="About Aytekin Trade"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -end-6 bg-navy text-primary-foreground p-6 rounded-xl shadow-xl"
            >
              <div className="text-4xl font-bold text-gold mb-1">15+</div>
              <div className="text-sm text-primary-foreground/80">
                {isRTL ? "سال تجربه" : "Years Experience"}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              {t("nav.about")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("about.preview.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.preview.text")}
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/about">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-light text-primary-foreground"
              >
                {t("about.preview.cta")}
                <Arrow className="ms-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
