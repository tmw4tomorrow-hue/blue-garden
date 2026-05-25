import Link from "next/link";
import SiteNav from "./components/SiteNav";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85"
        aria-hidden
      />
      <div className="grain absolute inset-0" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="px-6 py-8 sm:px-10">
          <SiteNav variant="light" />
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center">
          <p className="mb-6 text-[10px] tracking-[0.45em] text-white/40 uppercase">
            Experiencias ecológicas premium
          </p>
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-serif text-5xl leading-[1.08] font-light text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Eventos al aire libre,
              <span className="block italic text-white/90">reimaginados</span>
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed font-light text-white/65 sm:text-lg">
              Donde el jardín se convierte en escenario. Estética editorial,
              atmósfera cinematográfica.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link href="/book" className="glass-btn">
                Reserva tu evento
              </Link>
              <Link href="/portafolio" className="glass-btn glass-btn--ghost">
                Ver portafolio
              </Link>
            </div>
          </div>
        </main>

        <footer className="px-6 pb-10 text-center">
          <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
            Sostenible · Elegante · Inolvidable
          </p>
        </footer>
      </div>
    </div>
  );
}
