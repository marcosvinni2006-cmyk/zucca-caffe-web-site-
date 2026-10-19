import { site } from "@/config/site";
import { brunchHours, closedDays, openingHours } from "@/content/hours";
import { photos } from "@/content/photos";
import { buttonClasses } from "@/lib/ui";
import { Reveal } from "./Reveal";
import { Accent, SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";
import { WhatsAppButton } from "./WhatsAppButton";

export function Visit() {
  return (
    <section id="visite" aria-labelledby="visite-titulo" className="scroll-mt-20 bg-areia py-20 sm:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="visite-titulo"
            align="left"
            title={<>Visite-<Accent>nos</Accent></>}
            intro="Passe para um café, leve uma focaccia para casa ou reserve a manhã de fim de semana para o brunch."
          />

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-sm font-medium tracking-[0.18em] text-caramelo-escuro uppercase">Endereço</h3>
              <address className="mt-2 text-lg leading-relaxed text-cafe not-italic">
                {site.address.street} · {site.address.neighborhood}
                <br />
                {site.address.city}, {site.address.state} · {site.address.postalCode}
              </address>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-[0.18em] text-caramelo-escuro uppercase">Horários</h3>
              <dl className="mt-2 space-y-1 text-lg text-cafe">
                {openingHours.map((period) => (
                  <div key={period.days} className="flex flex-wrap justify-between gap-x-6 sm:max-w-sm">
                    <dt>{period.days}</dt>
                    <dd className="font-medium">{period.hours}</dd>
                  </div>
                ))}
                <div className="flex flex-wrap justify-between gap-x-6 text-cafe/75 sm:max-w-sm">
                  <dt>{closedDays.days}</dt>
                  <dd>{closedDays.label}</dd>
                </div>
              </dl>
              <p className="mt-4 inline-block rounded-md border border-caramelo/50 bg-creme px-4 py-2 text-[0.95rem] text-marinho">
                <span className="font-medium">Brunch:</span> {brunchHours.days.toLowerCase()}, das{" "}
                {brunchHours.hours}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Como chegar: abre o mapa da Zuccä Caffè no Google Maps em nova aba"
              className={buttonClasses({ size: "lg" })}
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              Como chegar
            </a>
            <WhatsAppButton label="Falar no WhatsApp" variant="outline" size="lg" />
          </div>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-[1.6fr_1fr] gap-3 sm:gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-quente sm:aspect-[4/4.5]">
            <SiteImage photo={photos.ovosCafeCoado} sizes="(min-width: 1024px) 35vw, 60vw" />
          </div>
          <div className="relative mt-10 aspect-[3/5] overflow-hidden rounded-lg shadow-quente sm:mt-16">
            <SiteImage photo={photos.cheesecakeCaramelo} sizes="(min-width: 1024px) 20vw, 40vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
