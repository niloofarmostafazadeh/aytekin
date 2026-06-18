"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown, Globe } from "lucide-react"

const services = [
  { key: "export-import", href: "/services/export-import" },
  { key: "marketing", href: "/services/marketing" },
  { key: "consulting", href: "/services/consulting" },
  { key: "transportation", href: "/services/transportation" },
  { key: "customs", href: "/services/customs" },
]

export function Header() {
  const { t, language, setLanguage, isRTL } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services", hasDropdown: true },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-primary-foreground">
              <span className="text-lg font-bold">AT</span>
            </div>
            <span className="text-xl font-bold text-navy">
              {isRTL ? "آیتکین ترید" : "Aytekin Trade"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 text-foreground/80 hover:text-foreground hover:bg-secondary"
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align={isRTL ? "end" : "start"} className="w-56">
                      {services.map((service) => (
                        <DropdownMenuItem key={service.key} asChild>
                          <Link href={service.href} className="w-full cursor-pointer">
                            {t(`services.${service.key}`)}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href}>
                    <Button
                      variant="ghost"
                      className="text-foreground/80 hover:text-foreground hover:bg-secondary"
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Language Switcher & CTA */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === "en" ? "EN" : "فا"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? "start" : "end"}>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-secondary" : ""}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("fa")}
                  className={language === "fa" ? "bg-secondary" : ""}
                >
                  فارسی
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Link href="/contact" className="hidden sm:block">
              <Button className="bg-gold hover:bg-gold-light text-accent-foreground">
                {t("hero.cta.contact")}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav className="container py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    {item.hasDropdown ? (
                      <div>
                        <Button
                          variant="ghost"
                          className="w-full justify-between"
                          onClick={() => setServicesOpen(!servicesOpen)}
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ps-4 flex flex-col gap-1 mt-1"
                            >
                              {services.map((service) => (
                                <Link
                                  key={service.key}
                                  href={service.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <Button variant="ghost" className="w-full justify-start text-sm">
                                    {t(`services.${service.key}`)}
                                  </Button>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          {item.label}
                        </Button>
                      </Link>
                    )}
                  </div>
                ))}
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gold hover:bg-gold-light text-accent-foreground mt-2">
                    {t("hero.cta.contact")}
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
