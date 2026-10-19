import { dishCategories } from "@/content/dishes";
import { menu } from "@/content/menu";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";
import { WhatsAppButton } from "./WhatsAppButton";

export function Menu() {
  return (
    <section
      id="cardapio"
      aria-labelledby="cardapio-titulo"
      className="scroll-mt-20 bg-creme py-20 sm:py-28"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="cardapio-titulo"
            title="Cardápio"
            intro="Sabores e preços podem variar com a produção do dia. Na dúvida, chame a gente no WhatsApp."
          />
        </Reveal>

        {/* Pratos em foto, por categoria */}
        <div className="mt-14 space-y-14">
          {dishCategories.map((category) => (
            <section key={category.id} aria-labelledby={`fotos-${category.id}`}>
              <Reveal className="flex items-center gap-4">
                <h3
                  id={`fotos-${category.id}`}
                  className="shrink-0 font-titulo text-xl tracking-[0.08em] text-marinho uppercase sm:text-2xl"
                >
                  {category.title}
                </h3>
                <span className="h-px flex-1 bg-caramelo/50" aria-hidden="true" />
              </Reveal>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.dishes.map((dish, i) => (
                  <li key={dish.photo.src}>
                    <Reveal delay={i * 80} className="h-full">
                      <article className="moldura relative flex h-full flex-col overflow-hidden rounded-lg bg-perola shadow-quente">
                        <div className="relative aspect-[4/3]">
                          <SiteImage photo={dish.photo} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                        </div>
                        <div className="flex flex-1 flex-col px-6 pt-5 pb-7">
                          <div className="flex items-baseline justify-between gap-4">
                            <h4 className="font-titulo text-lg tracking-[0.06em] text-marinho uppercase">{dish.title}</h4>
                            <p className="shrink-0 font-medium text-caramelo-escuro">{dish.price}</p>
                          </div>
                          <p className="mt-2 leading-relaxed font-light text-cafe/85">{dish.description}</p>
                        </div>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Moldura dupla, como a capa do cardápio impresso */}
        <div className="moldura relative mt-14 rounded-lg bg-perola px-5 py-10 shadow-quente sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
            {menu.map((category, i) => (
              <Reveal key={category.id} delay={(i % 2) * 100}>
                <section
                  id={`cardapio-${category.id}`}
                  aria-labelledby={`cat-${category.id}`}
                  className="scroll-mt-28"
                >
                  <div className="flex items-baseline justify-between gap-4 border-b border-caramelo/50 pb-3">
                    <h3
                      id={`cat-${category.id}`}
                      className="font-titulo text-xl tracking-[0.08em] text-marinho uppercase sm:text-2xl"
                    >
                      {category.title}
                    </h3>
                    {category.note && (
                      <p className="text-right font-destaque text-lg text-cafe/80 italic">{category.note}</p>
                    )}
                  </div>
                  <ul className="mt-2 divide-y divide-areia">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex items-start justify-between gap-6 py-4">
                        <div>
                          <p className="font-medium text-cafe">{item.name}</p>
                          {item.description && (
                            <p className="mt-1 text-[0.95rem] leading-relaxed font-light text-cafe/80">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {item.price && (
                          <p className="shrink-0 text-lg font-medium text-caramelo-escuro">{item.price}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 flex justify-center">
          <WhatsAppButton
            label="Tirar dúvidas sobre o cardápio"
            message="Olá! Vim pelo site da Zuccä Caffè e queria saber mais sobre o cardápio."
            variant="outline"
          />
        </Reveal>
      </div>
    </section>
  );
}
