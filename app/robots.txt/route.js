export async function GET() {
  const robotsTxt = `# Tom Torrance Heating & Cooling - Robots.txt
# Website: https://tomtorranceheatingcooling.com

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://tomtorranceheatingcooling.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Crawl-delay for responsible crawling
Crawl-delay: 1

# Google specific
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing specific  
User-agent: Bingbot
Allow: /
Crawl-delay: 1`

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
} 