import Link from 'next/link'
import Image from 'next/image'

export default function ServiceCard({ service, className = "" }) {
  const {
    title,
    description,
    href,
    icon,
    image
  } = service

  return (
    <div className={`card text-center hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Service Icon or Image */}
      <div className="mb-4 flex justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
        ) : icon ? (
          <div className="w-20 h-20 flex items-center justify-center bg-lightGray rounded-full">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
        ) : (
          <div className="w-20 h-20 flex items-center justify-center bg-accentRed rounded-full">
            <span className="text-white text-2xl font-bold">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Service Title */}
      <h3 className="text-xl font-montserrat font-semibold mb-4 text-darkGray">
        {title}
      </h3>

      {/* Service Description */}
      <p className="text-darkGray mb-6 line-clamp-3">
        {description}
      </p>

      {/* Learn More Link */}
      {href && (
        <Link
          href={href}
          className="btn-secondary inline-block"
        >
          Learn More
        </Link>
      )}
    </div>
  )
}

// Service Cards Grid Component
export function ServiceCardsGrid({ services, title, subtitle, className = "" }) {
  return (
    <section className={`section-padding md:section-padding-mobile ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-darkGray max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.href || index} 
              service={service} 
            />
          ))}
        </div>
      </div>
    </section>
  )
} 