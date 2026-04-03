import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://getshorthand.app';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/install`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/features/quick-note`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/features/behavior-tracking`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/features/ai-reports`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/features/class-insights`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/features/mood-checkins`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/features/parent-emails`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/the-sgo-data-trap`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/dpa`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
