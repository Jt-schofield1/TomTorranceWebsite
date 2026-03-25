const SITE_URL = 'https://tomtorranceheatingcooling.com'

const BUSINESS_INFO = {
  name: 'Tom Torrance Heating & Cooling',
  phone: '+1-814-825-7066',
  email: 'info@tomtorranceheatingcooling.com',
  address: {
    street: '707 Moore Rd',
    city: 'Waterford',
    state: 'PA',
    zip: '16441',
  },
}

export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  }
}

export function generateServiceSchema({ name, description, url, areaServed = 'Erie County, PA' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'HVACBusiness',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: areaServed,
    },
  }
}

export function generateWebPageSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: BUSINESS_INFO.name,
      url: SITE_URL,
    },
  }
}

export function generateReviewSchema(reviews) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewBody: review.text,
    itemReviewed: {
      '@type': 'HVACBusiness',
      name: BUSINESS_INFO.name,
    },
  }))
}

export { SITE_URL, BUSINESS_INFO }
