export async function GET() {
  const baseUrl = 'https://tomtorranceheatingandcooling.com'
  
  const routes = [
    '',
    '/about-us',
    '/hvac-services',
    '/hvac-services/air-conditioning',
    '/hvac-services/furnace-installation-repair',
    '/hvac-services/ductwork',
    '/hvac-services/air-purification',
    '/water-heater-services',
    '/water-heater-services/installation',
    '/water-heater-services/repair',
    '/water-heater-services/tankless',
    '/water-heater-services/traditional',
    '/service-areas',
    '/reviews',
    '/contact-us'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const priority = route === '' ? '1.0' : route.includes('/hvac-services/') || route.includes('/water-heater-services/') ? '0.8' : '0.9'
    return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 