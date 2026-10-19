import { site } from "@/config/site";
import { buttonClasses } from "@/lib/ui";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function FindUs() {
  return (
    <section
      id="como-nos-achar"
      aria-labelledby="como-nos-achar-titulo"
      className="on-navy scroll-mt-20 bg-marinho py-20 text-perola sm:py-28"
    >
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <h2 id="como-nos-achar-titulo" className="text-3xl leading-tight text-perola sm:text-4xl">
            Como nos achar
          </h2>
          <p className="mt-4 font-destaque text-xl leading-snug text-perola/85 italic sm:text-2xl">
            Estamos no bairro Assunção, em São Bernardo do Campo.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-sm font-medium tracking-[0.18em] text-perola/75 uppercase">Endereço</h3>
              <address className="mt-2 text-lg leading-relaxed not-italic">
                {site.address.street} · {site.address.neighborhood}
                <br />
                {site.address.city}, {site.address.state} · {site.address.postalCode}
              </address>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-[0.18em] text-perola/75 uppercase">Telefone</h3>
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-2 inline-block rounded-sm text-lg underline-offset-4 hover:underline"
              >
                {site.phone.display}
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir rota no Google Maps em nova aba"
              className={buttonClasses({ variant: "light", size: "lg" })}
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              Abrir no Google Maps
            </a>
            <WhatsAppButton
              label="Falar no WhatsApp"
              size="lg"
              className="border-2 border-perola/60 hover:border-perola"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="moldura relative aspect-[4/3] overflow-hidden rounded-lg bg-profundo p-2 shadow-quente-forte lg:aspect-[5/4]">
            <iframe
              src={site.mapsEmbedUrl}
              title="Mapa com a localização da Zuccä Caffè"
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
