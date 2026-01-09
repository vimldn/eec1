import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://extraedgeclub.com';
  
  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/case-studies/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/privacy/`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  // Service index pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // City pages for each service (90 total)
  const cityPages = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${baseUrl}/${service.slug}/${service.title.toLowerCase().replace(/ /g, '-')}-${city.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...servicePages, ...cityPages];
}
