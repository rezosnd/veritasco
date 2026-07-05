import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veritasco.tech'
  const currentDate = new Date().toISOString()

  const routes = [
    '',
    '/about',
    '/erp',
    '/pos',
    '/nidhi',
    '/founders',
    '/contact',
    '/faq',
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
