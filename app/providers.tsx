"use client"

import { LanguageProvider } from "@/lib/language-context"
import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { ReactNode } from "react"

function LayoutWrapper({ children }: { children: ReactNode }) {
  const { isRTL, language } = useLanguage()
  
  return (
    <div 
      dir={isRTL ? "rtl" : "ltr"} 
      className={isRTL ? "font-[Vazirmatn]" : "font-sans"}
      lang={language}
    >
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <LayoutWrapper>{children}</LayoutWrapper>
    </LanguageProvider>
  )
}
