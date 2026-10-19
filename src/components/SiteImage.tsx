import Image from "next/image";
import type { Photo } from "@/content/photos";

type Props = {
  photo: Photo;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/** Imagem que preenche o contêiner pai (que deve ser `relative` e ter altura). */
export function SiteImage({ photo, sizes, className = "", priority }: Props) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      // SVGs provisórios não passam pelo otimizador; fotos reais sim.
      unoptimized={photo.src.endsWith(".svg")}
      className={`object-cover ${className}`}
    />
  );
}
