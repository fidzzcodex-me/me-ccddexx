import { siteUrl } from '@/lib/site'

export default function sitemap() {
  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
