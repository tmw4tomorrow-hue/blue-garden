import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/portafolio", label: "Portafolio" },
];

export default function SiteNav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isLight = variant === "light";

  return (
    <nav className="flex items-center justify-between gap-6">
      <Link
        href="/"
        className={`font-serif text-lg tracking-[0.35em] uppercase transition ${
          isLight ? "text-white/90 hover:text-white" : "text-zinc-900/90 hover:text-zinc-900"
        }`}
      >
        Blue Garden
      </Link>

      <div className="flex items-center gap-5 sm:gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[10px] tracking-[0.2em] uppercase transition sm:text-xs ${
              isLight
                ? "text-white/55 hover:text-white"
                : "text-zinc-700/80 hover:text-zinc-900"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book"
          className={`glass-btn glass-btn--sm ${!isLight ? "glass-btn--dark" : ""}`}
        >
          Reservar
        </Link>
      </div>
    </nav>
  );
}
