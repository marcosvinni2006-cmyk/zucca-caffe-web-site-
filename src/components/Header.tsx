"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/config/site";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="on-navy sticky top-0 z-40 border-b border-perola/15 bg-marinho text-perola shadow-quente">
      <div className="container-site grid h-16 grid-cols-[1fr_auto] items-center gap-4 md:h-20 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#inicio" aria-label="Zuccä Caffè, voltar ao início" className="justify-self-start rounded-md">
          <Logo className="text-base text-perola sm:text-xl" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md text-[0.95rem] text-perola/85 transition-colors hover:text-perola"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <WhatsAppButton label="WhatsApp" variant="light" size="sm" compactOnMobile />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-perola hover:bg-perola/10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Principal (celular)"
        hidden={!open}
        className="border-t border-perola/15 bg-marinho lg:hidden"
      >
        <ul className="container-site flex flex-col py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md py-3 text-lg text-perola"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
