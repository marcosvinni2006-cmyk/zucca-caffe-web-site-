import { site } from "@/config/site";
import { buttonClasses } from "@/lib/ui";
import { Reveal } from "./Reveal";
import { Accent, SectionHeading } from "./SectionHeading";

export function Careers() {
  return (
    <section id="trabalhe-conosco" aria-labelledby="trabalhe-conosco-titulo" className="scroll-mt-20 bg-creme py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading
            id="trabalhe-conosco-titulo"
            title={<>Trabalhe <Accent>conosco</Accent></>}
            intro="Gosta de café, pão artesanal e de receber bem as pessoas? Venha fazer parte da equipe da Zuccä Caffè. Preencha o formulário e entraremos em contato."
          />
          <a
            href={site.careersFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar candidatura: abre o formulário no Google Forms em nova aba"
            className={`mt-8 ${buttonClasses({ size: "lg" })}`}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
              <path d="M14 3v5h5M9 13h6M9 17h4" />
            </svg>
            Enviar candidatura
          </a>
        </Reveal>
      </div>
    </section>
  );
}
