import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Zuccä Caffè no WhatsApp (abre em nova aba)"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center rounded-full bg-marinho text-perola shadow-quente-forte ring-2 ring-perola outline outline-1 outline-offset-2 outline-caramelo transition-transform duration-200 hover:scale-105 hover:bg-profundo motion-reduce:transition-none motion-reduce:hover:scale-100 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
