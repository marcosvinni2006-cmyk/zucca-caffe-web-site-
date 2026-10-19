import { site } from "@/config/site";
import { photos, type Photo } from "@/content/photos";
import { buttonClasses } from "@/lib/ui";
import { Reveal } from "./Reveal";
import { Accent, SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";

// Mosaico: 2 colunas no celular, 4 no desktop, com alturas e larguras variadas.
const tiles: { photo: Photo; className: string; sizes: string }[] = [
  { photo: photos.ciabattaSalame, className: "row-span-2", sizes: "(min-width: 768px) 25vw, 50vw" },
  { photo: photos.boloChocolateEspresso, className: "row-span-2", sizes: "(min-width: 768px) 25vw, 50vw" },
  { photo: photos.pratoPresuntoCru, className: "col-span-2 row-span-2", sizes: "(min-width: 768px) 50vw, 100vw" },
  { photo: photos.cheesecakeFrutasVermelhas, className: "col-span-2 md:col-span-1", sizes: "(min-width: 768px) 25vw, 100vw" },
  { photo: photos.brownieSorvete, className: "", sizes: "(min-width: 768px) 25vw, 50vw" },
  { photo: photos.boloLimao, className: "md:col-span-2", sizes: "(min-width: 768px) 50vw, 50vw" },
];

export function Gallery() {
  return (
    <section
      id="galeria"
      aria-labelledby="galeria-titulo"
      className="scroll-mt-20 bg-areia py-20 sm:py-28"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="galeria-titulo"
            title={<>Da nossa <Accent>mesa</Accent></>}
            intro={
              <>
                Um pouco do dia a dia da Zuccä. Tem mais no Instagram{" "}
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-terracota-escuro underline decoration-terracota underline-offset-4 hover:decoration-2"
                >
                  {site.instagram.handle}
                </a>
                .
              </>
            }
          />
        </Reveal>

        <Reveal className="mt-14">
          <ul className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-4">
            {tiles.map((tile) => (
              <li key={tile.photo.src} className={`relative overflow-hidden rounded-lg shadow-quente ${tile.className}`}>
                <SiteImage
                  photo={tile.photo}
                  sizes={tile.sizes}
                  className="transition-transform duration-700 hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Seguir ${site.instagram.handle} no Instagram (abre em nova aba)`}
            className={buttonClasses({ variant: "outline" })}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Seguir {site.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
