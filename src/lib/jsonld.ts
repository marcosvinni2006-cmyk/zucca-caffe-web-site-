import { site } from "@/config/site";
import { openingHours } from "@/content/hours";
import { whatsappPhone } from "@/lib/whatsapp";

export function cafeJsonLd() {
  const telephone = whatsappPhone();
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/logo-zucca.png`,
    ...(telephone ? { telephone } : {}),
    servesCuisine: ["Café especial", "Brunch", "Pães artesanais", "Focaccia", "Ciabatta"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(site.geo ? { geo: { "@type": "GeoCoordinates", ...site.geo } } : {}),
    hasMap: site.mapsUrl,
    openingHoursSpecification: openingHours.map((period) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: period.schemaDays.map((day) => `https://schema.org/${day}`),
      opens: period.opens,
      closes: period.closes,
    })),
    sameAs: [site.instagram.url, site.linktree],
  };
}
