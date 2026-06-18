"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Ship, 
  TrendingUp, 
  MessageSquare, 
  Truck, 
  FileCheck,
  ArrowRight,
  ArrowLeft
} from "lucide-react"

const services = [
  {
    key: "export-import",
    icon: Ship,
    href: "/services/export-import",
  },
  {
    key: "marketing",
    icon: TrendingUp,
    href: "/services/marketing",
  },
  {
    key: "consulting",
    icon: MessageSquare,
    href: "/services/consulting",
  },
  {
    key: "transportation",
    icon: Truck,
    href: "/services/transportation",
  },
  {
    key: "customs",
    icon: FileCheck,
    href: "/services/customs",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.key} variants={itemVariants}>
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-border hover:border-gold/50">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                        <Icon className="h-7 w-7 text-navy group-hover:text-gold transition-colors" />
                      </div>
                      <CardTitle className="text-xl text-foreground group-hover:text-navy transition-colors">
                        {t(`services.${service.key}`)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                        {t(`services.${service.key}.desc`)}
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
  )
}
