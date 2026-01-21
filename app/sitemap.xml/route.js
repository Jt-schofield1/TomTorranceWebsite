export async function GET() {
  const baseUrl = 'https://tomtorranceheatingcooling.com'
  
  // All routes with SEO priority and change frequency
  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/about-us', priority: '0.9', changefreq: 'monthly' },
    { path: '/contact-us', priority: '0.9', changefreq: 'monthly' },
    { path: '/hvac-services', priority: '0.9', changefreq: 'weekly' },
    { path: '/hvac-services/air-conditioning', priority: '0.8', changefreq: 'monthly' },
    { path: '/hvac-services/furnace-installation-repair', priority: '0.8', changefreq: 'monthly' },
    { path: '/hvac-services/ductwork', priority: '0.8', changefreq: 'monthly' },
    { path: '/hvac-services/air-purification', priority: '0.8', changefreq: 'monthly' },
    { path: '/water-heater-services', priority: '0.9', changefreq: 'weekly' },
    { path: '/water-heater-services/installation', priority: '0.8', changefreq: 'monthly' },
    { path: '/water-heater-services/repair', priority: '0.8', changefreq: 'monthly' },
    { path: '/water-heater-services/tankless', priority: '0.8', changefreq: 'monthly' },
    { path: '/water-heater-services/traditional', priority: '0.8', changefreq: 'monthly' },
    { path: '/service-areas', priority: '0.9', changefreq: 'monthly' },
    { path: '/reviews', priority: '0.8', changefreq: 'weekly' },
  ]

  const currentDate = new Date().toISOString().split('T')[0]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map((route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
} 