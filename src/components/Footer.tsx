import { navLinks, site } from "@/config/site";
import { brunchHours, closedDays, openingHours } from "@/content/hours";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { Ornament } from "./Ornament";

const linkClass =
  "rounded-sm text-perola/85 underline-offset-4 decoration-caramelo hover:text-perola hover:underline";

export function Footer() {
  return (
    <footer className="on-navy bg-profundo text-perola">
      <Ornament className="mx-auto mt-12 h-5 w-28 text-caramelo" />
      <div className="container-site grid gap-10 pt-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="text-xl text-perola" />
          <p className="mt-4 max-w-xs font-destaque text-lg text-perola/80 italic">
            Focaccia e ciabatta artesanais, brunch e café especial.
          </p>
        </div>

        <div>
          <h2 className="text-sm text-perola">Endereço</h2>
          <address className="mt-3 leading-relaxed text-perola/85 not-italic">
            {site.address.street} · {site.address.neighborhood}
            <br />
            {site.address.city}, {site.address.state}
            <br />
            {site.address.postalCode}
          </address>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-block ${linkClass}`}>
            Ver no mapa
          </a>
        </div>

        <div>
          <h2 className="text-sm text-perola">Horários</h2>
          <ul className="mt-3 space-y-1 text-perola/85">
            {openingHours.map((period) => (
              <li key={period.days}>
                {period.days}: {period.hours}
              </li>
            ))}
            <li>
              {closedDays.days}: {closedDays.label.toLowerCase()}
            </li>
            <li className="pt-2">
              Brunch: {brunchHours.days.toLowerCase()}, {brunchHours.hours}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm text-perola">Contato</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`tel:${site.phone.tel}`} className={linkClass}>
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram {site.instagram.handle}
              </a>
            </li>
            <li>
              <a href={site.linktree} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Linktree
              </a>
            </li>
            <li>
              <a href={site.careersFormUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Trabalhe conosco
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-perola/15">
        <div className="container-site flex flex-col gap-4 py-6 text-sm text-perola/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} <span className="font-titulo tracking-[0.08em] uppercase">{site.name}</span>
          </p>
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
