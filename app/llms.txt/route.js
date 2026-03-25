export async function GET() {
  const content = `# Tom Torrance Heating & Cooling

> Tom Torrance Heating & Cooling is Erie County, Pennsylvania's trusted HVAC company with over 40 years of experience. Family and veteran owned, we provide heating, cooling, water heater, and ductwork services throughout Erie County and surrounding areas. Licensed (PA066651) and insured.

## Company Information

- Business Name: Tom Torrance Heating & Cooling
- Phone: (814) 825-7066
- Address: 707 Moore Rd, Waterford, PA 16441
- Service Area: Erie County, PA and surrounding areas
- Founded: 1985
- License: PA066651
- Hours: Monday-Saturday 7:00 AM - 7:30 PM, Sunday Closed
- Owner: Tom Torrance (Veteran Owned)

## Core Pages

- [Homepage](https://tomtorranceheatingcooling.com): Main landing page with overview of all HVAC services, testimonials, and contact information
- [About Us](https://tomtorranceheatingcooling.com/about-us): Company history, credentials, and values. Family and veteran owned since 1985
- [Contact Us](https://tomtorranceheatingcooling.com/contact-us): Contact form, phone number, address, business hours, and directions
- [Service Areas](https://tomtorranceheatingcooling.com/service-areas): Coverage map including Erie, Waterford, Edinboro, Fairview, Girard, Harborcreek, North East, Millcreek, McKean, Union City
- [Customer Reviews](https://tomtorranceheatingcooling.com/reviews): 5-star customer testimonials and review links

## HVAC Services

- [All HVAC Services](https://tomtorranceheatingcooling.com/hvac-services): Overview of all heating, ventilation, and air conditioning services
- [Air Conditioning Installation & Repair](https://tomtorranceheatingcooling.com/hvac-services/air-conditioning): AC installation, repair, and maintenance for homes and businesses
- [Furnace Installation & Repair](https://tomtorranceheatingcooling.com/hvac-services/furnace-installation-repair): Furnace installation, repair, and annual maintenance services
- [Ductwork Services](https://tomtorranceheatingcooling.com/hvac-services/ductwork): Ductwork installation, repair, sealing, and cleaning
- [Air Purification Systems](https://tomtorranceheatingcooling.com/hvac-services/air-purification): REME HALO, UV light, HEPA filtration, and whole-home air purifiers

## Water Heater Services

- [All Water Heater Services](https://tomtorranceheatingcooling.com/water-heater-services): Overview of water heater installation, repair, and maintenance
- [Water Heater Installation](https://tomtorranceheatingcooling.com/water-heater-services/installation): Professional tank and tankless water heater installation
- [Water Heater Repair](https://tomtorranceheatingcooling.com/water-heater-services/repair): Fast same-day water heater repair services
- [Tankless Water Heaters](https://tomtorranceheatingcooling.com/water-heater-services/tankless): Energy-efficient tankless water heater installation and service
- [Traditional Water Heaters](https://tomtorranceheatingcooling.com/water-heater-services/traditional): Reliable tank water heater installation and service

## Key Differentiators

- Over 40 years of HVAC experience in Erie County
- Family and veteran owned and operated
- Licensed (PA066651) and fully insured
- 5-star customer rating
- Free estimates and upfront pricing
- Seasonal clean and check maintenance programs
- Serving all of Erie County including Erie, Waterford, Edinboro, Fairview, and more

## Frequently Asked Questions

- What HVAC services do you offer in Erie PA? We provide furnace installation/repair, AC installation/repair, ductwork services, air purification, and water heater services throughout Erie County.
- How much does HVAC repair cost? Costs vary by issue and equipment. We provide free estimates and upfront pricing. Call (814) 825-7066 for assessment.
- Do you offer emergency HVAC service? Yes, during business hours (7 AM - 7:30 PM, Monday through Saturday).
- Why choose Tom Torrance? 40+ years experience, family and veteran owned, licensed PA066651, 5-star rated, honest pricing.
`

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
