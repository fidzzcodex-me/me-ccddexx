import { siteUrl } from '@/lib/site'

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
