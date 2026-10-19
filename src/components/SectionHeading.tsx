import type { ReactNode } from "react";
import { Ornament } from "./Ornament";

type Props = {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
};

export function SectionHeading({ id, title, intro, align = "center" }: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <Ornament className={`mb-4 h-5 w-28 text-caramelo ${centered ? "mx-auto" : ""}`} />
      <h2 id={id} className="text-3xl leading-tight sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 font-destaque text-xl leading-snug text-cafe/85 italic sm:text-2xl">{intro}</p>
      )}
    </div>
  );
}

/** Palavra em destaque dentro de títulos: Cormorant itálico. */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <em className="font-destaque text-[1.15em] tracking-normal normal-case italic">{children}</em>
  );
}
