import { brunchHours } from "@/content/hours";
import { photos, type Photo } from "@/content/photos";
import { buttonClasses } from "@/lib/ui";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";
import { WhatsAppButton } from "./WhatsAppButton";

type Card = {
  id?: string;
  photo: Photo;
  title: string;
  description: string;
  cta: { label: string; href: string } | { label: string; whatsappMessage: string };
};

const cards: Card[] = [
  {
    photo: photos.focacciaMortadela,
    title: "Focaccias",
    description: "Massa leve e aerada, crosta dourada e bom azeite. Inteira, em fatias ou recheada.",
    cta: { label: "Ver focaccias", href: "#cardapio-focaccias" },
  },
  {
    photo: photos.ciabattaSalame,
    title: "Ciabattas",
    description: "Casca crocante e miolo macio, recheadas na hora para o seu lanche ou almoço.",
    cta: { label: "Ver ciabattas", href: "#cardapio-ciabattas" },
  },
  {
    id: "brunch",
    photo: photos.pratoFrios,
    title: "Brunch",
    description: `${brunchHours.days}, das ${brunchHours.hours}: omelete, croque, mesa de brunch, suco de laranja e café.`,
    cta: {
      label: "Perguntar sobre o brunch",
      whatsappMessage: "Olá! Vim pelo site da Zuccä Caffè e gostaria de saber mais sobre o brunch.",
    },
  },
];

export function Highlights() {
  return (
    <section aria-labelledby="destaques-titulo" className="bg-creme py-20 sm:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="destaques-titulo"
            title="Feito à mão, do forno para a mesa"
            intro="Pães de massa artesanal, receitas simples e um café que pede uma pausa."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <li key={card.title} id={card.id} className="scroll-mt-28">
              <Reveal delay={i * 100} className="h-full">
                <article className="moldura relative flex h-full flex-col overflow-hidden rounded-lg bg-perola shadow-quente">
                  <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                    <SiteImage photo={card.photo} sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="flex flex-1 flex-col items-center px-6 pt-7 pb-8 text-center">
                    <h3 className="font-titulo text-2xl tracking-[0.08em] text-marinho uppercase">{card.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-cafe/85">{card.description}</p>
                    <div className="mt-6">
                      {"href" in card.cta ? (
                        <a href={card.cta.href} className={buttonClasses({ size: "sm" })}>
                          {card.cta.label}
                        </a>
                      ) : (
                        <WhatsAppButton label={card.cta.label} message={card.cta.whatsappMessage} size="sm" />
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
