"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t, isRTL } = useLanguage()

  const quickLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/contact" },
  ]

  const services = [
    { label: t("services.export-import"), href: "/services/export-import" },
    { label: t("services.marketing"), href: "/services/marketing" },
    { label: t("services.consulting"), href: "/services/consulting" },
    { label: t("services.transportation"), href: "/services/transportation" },
    { label: t("services.customs"), href: "/services/customs" },
  ]

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-accent-foreground">
                <span className="text-lg font-bold">AT</span>
              </div>
              <span className="text-xl font-bold">
                {isRTL ? "آیتکین ترید" : "Aytekin Trade"}
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">{t("footer.quick-links")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">{t("footer.services")}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">{t("footer.address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="tel:+9809117017589"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                >
                  09117017589
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="mailto:info@aytekintrade.com"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                >
                  info@aytekintrade.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Aytekin Trade. {t("footer.copyright")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://aytekintrade.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                aytekintrade.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
