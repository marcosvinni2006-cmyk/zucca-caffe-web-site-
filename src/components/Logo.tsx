// TODO: trocar pelo arquivo vetorial oficial do logo (SVG), se houver.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-titulo uppercase tracking-[0.08em] whitespace-nowrap ${className}`}>
      Zuccä Caffè
    </span>
  );
}
