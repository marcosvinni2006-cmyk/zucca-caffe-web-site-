/**
 * Configuração central do site. Troque aqui número, links e endereço.
 */

// Número do WhatsApp da loja, com DDI 55 + DDD
export const WHATSAPP_NUMBER = "5511937024130";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Zuccä Caffè e gostaria de saber mais.";

const fullAddress =
  "Av. João Firmino, 1161 - Assunção, São Bernardo do Campo - SP, 09810-260";

export const site = {
  name: "Zuccä Caffè",
  // TODO: domínio definitivo (defina NEXT_PUBLIC_SITE_URL no deploy)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title:
    "Zuccä Caffè | Focaccia, ciabatta, brunch e café especial em São Bernardo do Campo",
  description:
    "Focaccias e ciabattas artesanais, brunch aos sábados e domingos e café especial na Av. João Firmino, em São Bernardo do Campo (SP).",
  tagline: "Focaccia · Ciabatta · Café especial",
  phone: {
    display: "(11) 93702-4130",
    tel: "+5511937024130",
  },
  address: {
    street: "Av. João Firmino, 1161",
    neighborhood: "Assunção",
    city: "São Bernardo do Campo",
    state: "SP",
    postalCode: "09810-260",
    country: "BR",
    full: fullAddress,
  },
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `ZUCCÄ CAFFÈ - ${fullAddress}`,
  )}`,
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(
    `ZUCCÄ CAFFÈ - ${fullAddress}`,
  )}&z=17&output=embed`,
  // TODO: latitude/longitude exatas para o JSON-LD (opcional)
  geo: null as { latitude: number; longitude: number } | null,
  instagram: {
    handle: "@zucca_caffe",
    url: "https://www.instagram.com/zucca_caffe/",
  },
  linktree: "https://linktr.ee/zuccacaffe",
  careersFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdzi0vDaCHUB4_8SRLBhlLl4jw7CB5I7istvViIgFlV0V2xKQ/viewform",
};

export const navLinks = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#brunch", label: "Brunch" },
  { href: "#visite", label: "Visite-nos" },
  { href: "#como-nos-achar", label: "Como nos achar" },
  { href: "#galeria", label: "Galeria" },
];
