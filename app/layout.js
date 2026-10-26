import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AosProvider from '@/components/AosProvider'
import ScrollProgress from '@/components/ScrollProgress'
import { profile, siteUrl } from '@/lib/site'
import './globals.css'

config.autoAddCss = false

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.handle} - ${profile.role}`,
  description: `Portofolio ${profile.handle}, ${profile.role} yang mengembangkan bot WhatsApp, Telegram, dan Discord.`,
  openGraph: {
    title: `${profile.handle} - ${profile.role}`,
    description: profile.summary,
    type: 'website',
    locale: 'id_ID',
  },
}

export const viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-base font-sans text-zinc-300">
        <AosProvider />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
