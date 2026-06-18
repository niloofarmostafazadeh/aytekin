"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Eye, ArrowRight, ArrowLeft } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    nameEn: "Mohammad Aytekin",
    nameFa: "محمد آیتکین",
    roleEn: "CEO & Founder",
    roleFa: "مدیرعامل و بنیانگذار",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    nameEn: "Sara Ahmadi",
    nameFa: "سارا احمدی",
    roleEn: "Director of Operations",
    roleFa: "مدیر عملیات",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    nameEn: "Ali Rezaei",
    nameFa: "علی رضایی",
    roleEn: "Head of Trade Relations",
    roleFa: "رئیس روابط تجاری",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    nameEn: "Maryam Hosseini",
    nameFa: "مریم حسینی",
    roleEn: "Logistics Manager",
    roleFa: "مدیر لجستیک",
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

export default function AboutPage() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const whyUsItems = [
    t("about.why.item1"),
    t("about.why.item2"),
    t("about.why.item3"),
    t("about.why.item4"),
    t("about.why.item5"),
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="About Us Background"
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
              {t("about.title")}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t("about.intro")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -end-6 bg-gold text-accent-foreground p-6 rounded-xl shadow-xl"
              >
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm">
                  {isRTL ? "کشور" : "Countries"}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {isRTL ? "داستان ما" : "Our Story"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isRTL
                  ? "آیتکین ترید با چشم‌انداز ساده‌سازی تجارت بین‌المللی برای کسب‌وکارهای ایرانی تأسیس شد. از ابتدای فعالیت، ما بر ایجاد روابط پایدار و ارائه خدمات استثنایی تمرکز کرده‌ایم."
                  : "Aytekin Trade was founded with a vision to simplify international trade for Iranian businesses. From the beginning, we've focused on building lasting relationships and delivering exceptional service."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {isRTL
                  ? "امروز، ما به یک شرکت تجاری کامل تبدیل شده‌ایم که به مشتریان در سراسر جهان خدمات ارائه می‌دهد. شبکه گسترده ما در بیش از ۵۰ کشور، همراه با تیمی از متخصصان باتجربه، ما را قادر می‌سازد تا راهکارهای جامعی برای همه نیازهای تجاری شما ارائه دهیم."
                  : "Today, we've grown into a full-service trading company serving clients worldwide. Our extensive network across 50+ countries, combined with a team of experienced professionals, enables us to provide comprehensive solutions for all your trade needs."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-background">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t("about.mission.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.mission.text")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full bg-background">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t("about.vision.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.vision.text")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("about.why.title")}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {whyUsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 py-4 border-b border-border last:border-0"
              >
                <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              {t("about.team.title")}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants}>
                <Card className="overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={isRTL ? member.nameFa : member.nameEn}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 text-center">
                    <h3 className="font-semibold text-lg text-foreground">
                      {isRTL ? member.nameFa : member.nameEn}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {isRTL ? member.roleFa : member.roleEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
                ? "آماده همکاری با ما هستید؟"
                : "Ready to Partner With Us?"}
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              {isRTL
                ? "بیایید درباره اینکه چگونه می‌توانیم به رشد کسب‌وکار شما در بازارهای جهانی کمک کنیم صحبت کنیم."
                : "Let's discuss how we can help grow your business in global markets."}
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
