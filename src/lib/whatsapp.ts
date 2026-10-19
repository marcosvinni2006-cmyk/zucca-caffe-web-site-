import { WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_NUMBER } from "@/config/site";

const digits = () => WHATSAPP_NUMBER.replace(/\D/g, "");

/** Monta o link wa.me com mensagem pré-preenchida. */
export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${digits()}?text=${encodeURIComponent(message)}`;
}

/** Telefone no formato +55..., ou undefined enquanto o número for TODO. */
export function whatsappPhone() {
  const d = digits();
  return d ? `+${d}` : undefined;
}
