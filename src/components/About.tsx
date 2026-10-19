import { photos } from "@/content/photos";
import { Reveal } from "./Reveal";
import { Accent, SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-20 bg-areia py-20 sm:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="sobre-titulo"
            align="left"
            title={<>Sobre <Accent>nós</Accent></>}
            intro="Uma casa de esquina com muro pintado à mão, tijolo aparente e mesas de madeira."
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-cafe/90">
            <p>
              Na Zuccä Caffè a gente faz focaccias e ciabattas artesanais, serve café especial e,
              aos sábados e domingos, monta o brunch. Tudo sem pressa, para comer bem e ficar um
              pouco mais.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-caramelo pl-5">
            <p className="font-destaque text-2xl leading-snug text-marinho italic sm:text-3xl">
              “O melhor sabor é o que fica na memória.”
            </p>
            <footer className="mt-2 text-sm tracking-[0.18em] text-caramelo-escuro uppercase">
              Escrito no nosso muro
            </footer>
          </blockquote>
        </Reveal>

        {/* Fachada e varanda empilhadas, cada uma inteira na sua moldura (proporção da própria foto) */}
        <Reveal delay={120} className="grid gap-4 sm:gap-5">
          <div className="moldura relative aspect-[800/394] overflow-hidden rounded-lg bg-perola shadow-quente">
            <SiteImage photo={photos.fachada} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="moldura relative aspect-[16/9] overflow-hidden rounded-lg bg-perola shadow-quente">
            <SiteImage photo={photos.varanda} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
