import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: 'Aytekin Trade | Global Trade Solutions',
    template: '%s | Aytekin Trade'
  },
  description: 'Aytekin Trade - Your trusted partner in international trade. We provide comprehensive import-export services, logistics solutions, and expert trade consulting.',
  keywords: ['international trade', 'import', 'export', 'logistics', 'trade consulting', 'customs', 'Iran', 'تجارت بین‌المللی', 'صادرات', 'واردات'],
  authors: [{ name: 'Aytekin Trade' }],
  creator: 'Aytekin Trade',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fa_IR',
    url: 'https://aytekintrade.com',
    siteName: 'Aytekin Trade',
    title: 'Aytekin Trade | Global Trade Solutions',
    description: 'Your trusted partner in international trade, providing comprehensive solutions for businesses worldwide.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aytekin Trade | Global Trade Solutions',
    description: 'Your trusted partner in international trade',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
