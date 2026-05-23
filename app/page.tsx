import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1280&q=75&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="px-6 py-8 sm:px-10">
          <p className="font-serif text-lg tracking-[0.35em] text-white/90 uppercase">
            Blue Garden
          </p>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-serif text-5xl leading-tight font-light text-white sm:text-6xl md:text-7xl">
              Eventos al aire libre, reimaginados
            </h1>
            <p className="mx-auto max-w-xl text-base text-white/75 sm:text-lg">
              Experiencias ecológicas premium para eventos inolvidables.
            </p>
            <Link
              href="/book"
              className="inline-block rounded-full border border-white/20 bg-white/10 px-10 py-4 text-sm tracking-[0.2em] text-white uppercase backdrop-blur-sm transition hover:bg-white hover:text-zinc-900"
            >
              Reserva tu evento
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
