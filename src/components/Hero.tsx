import { site } from "@/config/site";
import { photos, type Photo } from "@/content/photos";
import { buttonClasses } from "@/lib/ui";
import { Ornament } from "./Ornament";
import { Accent } from "./SectionHeading";
import { SiteImage } from "./SiteImage";
import { WhatsAppButton } from "./WhatsAppButton";

// Posição de cada foto na colagem: 2 colunas no celular, 4 no desktop.
// A primeira (ovos com bacon) é a foto principal do banner.
const collage: { photo: Photo; className: string }[] = [
  { photo: photos.ovosBacon, className: "md:col-start-1 md:row-span-2" },
  { photo: photos.cheesecakeFrutasVermelhas, className: "md:col-span-2 md:col-start-2" },
  { photo: photos.pratoFrios, className: "md:col-start-4 md:row-span-2" },
  { photo: photos.ciabattaSalame, className: "md:col-start-2" },
  { photo: photos.sanduicheGratinado, className: "max-md:hidden md:col-start-3" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative isolate flex min-h-[min(calc(100svh-4rem),46rem)] items-center justify-center overflow-hidden px-4 py-16 md:min-h-[min(calc(100svh-5rem),52rem)]"
    >
      <div className="absolute inset-0 -z-10 grid grid-cols-2 grid-rows-2 gap-2 p-2 md:grid-cols-4 md:gap-3 md:p-3">
        {collage.map(({ photo, className }, i) => (
          <div key={photo.src} className={`relative overflow-hidden rounded-lg ${className}`}>
            <SiteImage photo={photo} sizes="(min-width: 768px) 50vw, 50vw" priority={i < 2} />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-creme/25" aria-hidden="true" />
      </div>

      <div className="hero-card moldura relative w-full max-w-xl rounded-lg bg-perola/95 px-6 py-10 text-center shadow-quente-forte backdrop-blur-sm sm:px-12 sm:py-14">
        <p className="text-[0.68rem] font-medium tracking-[0.14em] text-caramelo-escuro uppercase sm:text-sm sm:tracking-[0.25em]">
          {site.tagline}
        </p>
        <h1 id="hero-titulo" className="mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
          Focaccia, café e <Accent>brunch</Accent> sem pressa
        </h1>
        <Ornament className="mx-auto mt-5 h-5 w-28 text-caramelo" />
        <p className="mx-auto mt-4 max-w-md font-destaque text-xl leading-snug text-cafe/85 italic sm:text-2xl">
          Focaccias e ciabattas artesanais, café especial e brunch aos fins de semana, em São
          Bernardo do Campo.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton label="Fale com a gente" size="lg" className="w-full sm:w-auto" />
          <a href="#cardapio" className={`${buttonClasses({ variant: "outline", size: "lg" })} w-full sm:w-auto`}>
            Ver cardápio
          </a>
        </div>
      </div>
    </section>
  );
}
