export type ButtonVariant = "solid" | "outline" | "light";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-sans font-medium tracking-wide whitespace-nowrap transition-colors duration-200";

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

const variants: Record<ButtonVariant, string> = {
  // Principal: marinho, hover profundo
  solid: "bg-marinho text-perola hover:bg-profundo",
  // Secundário: contorno caramelo (tom escuro, para manter 4.5:1 no texto)
  outline: "border-2 border-caramelo-escuro text-marinho hover:bg-caramelo-escuro hover:text-perola",
  // Sobre fundo azul
  light: "bg-perola text-marinho hover:bg-areia",
};

export function buttonClasses({
  variant = "solid",
  size = "md",
}: { variant?: ButtonVariant; size?: ButtonSize } = {}) {
  return `${base} ${sizes[size]} ${variants[variant]}`;
}
