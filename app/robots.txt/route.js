export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://tomtorranceheatingandcooling.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow common crawl paths
Allow: /hvac-services/
Allow: /water-heater-services/
Allow: /contact-us
Allow: /about-us
Allow: /reviews
Allow: /service-areas`

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
} 