/** Arabesco simétrico, como os da capa do cardápio. Usa a cor do texto (currentColor). */
export function Ornament({ className = "" }: { className?: string }) {
  const half = (
    <>
      <path d="M2 12h30" />
      <path d="M32 12c3-5.5 9.5-6.5 12.5-3.2 2.4 2.7.6 6.4-2.6 6-2.4-.3-3-3.2-1-4" />
      <path d="M44.5 12c2.6 3.6 6 4.4 9.5 0" />
      <circle cx="50" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </>
  );

  return (
    <svg
      viewBox="0 0 120 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {half}
      <g transform="matrix(-1 0 0 1 120 0)">{half}</g>
      <path d="M60 6.5l4 5.5-4 5.5-4-5.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Ornamento centralizado sobre a emenda entre duas seções. */
export function SectionDivider() {
  return (
    <div className="relative z-10 h-0" aria-hidden="true">
      <div className="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center rounded-md bg-creme px-5 py-2 text-caramelo">
        <Ornament className="h-5 w-28" />
      </div>
    </div>
  );
}
