import { buttonClasses, type ButtonSize, type ButtonVariant } from "@/lib/ui";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  label?: string;
  message?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Mostra só o ícone em telas pequenas (o texto continua acessível). */
  compactOnMobile?: boolean;
  className?: string;
};

export function WhatsAppButton({
  label = "Fale no WhatsApp",
  message,
  variant = "solid",
  size = "md",
  compactOnMobile = false,
  className = "",
}: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: abre uma conversa com a Zuccä Caffè no WhatsApp em nova aba`}
      className={`${buttonClasses({ variant, size })} ${
        compactOnMobile ? "max-sm:w-10 max-sm:px-0" : ""
      } ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span className={compactOnMobile ? "max-sm:sr-only" : ""}>{label}</span>
    </a>
  );
}
