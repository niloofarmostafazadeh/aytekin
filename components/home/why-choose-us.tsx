"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Shield, Zap, Award, Globe } from "lucide-react"

const features = [
  {
    key: "trust",
    icon: Shield,
  },
  {
    key: "speed",
    icon: Zap,
  },
  {
    key: "experience",
    icon: Award,
  },
  {
    key: "global",
    icon: Globe,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("why.title")}
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            {t("why.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.key}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-10 w-10 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                  {t(`why.${feature.key}.title`)}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {t(`why.${feature.key}.desc`)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
