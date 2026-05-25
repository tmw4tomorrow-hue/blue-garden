"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { collections, type PortfolioCollection } from "@/lib/portfolio";

const accentStyles = {
  sage: "bg-[#4a5d4a]/90 text-[#f5f2eb] border-[#c8d4c0]/30",
  cream: "bg-[#f5f0e8]/95 text-[#2c2a26] border-[#d4cfc4]/50",
  gold: "bg-[#3d3528]/90 text-[#f0e6d4] border-[#c4a574]/40",
  forest: "bg-[#2a3d32]/92 text-[#e8efe9] border-[#6b8f71]/35",
};

export default function PortfolioExperience() {
  const [active, setActive] = useState<PortfolioCollection | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const close = useCallback(() => {
    setActive(null);
    setImageIndex(0);
  }, []);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight")
        setImageIndex((i) => (i + 1) % active.images.length);
      if (e.key === "ArrowLeft")
        setImageIndex((i) => (i - 1 + active.images.length) % active.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  function openCollection(c: PortfolioCollection) {
    if (c.id === "reserve") return;
    setActive(c);
    setImageIndex(0);
  }

  return (
    <>
      {/* Desktop collage */}
      <div className="relative hidden min-h-[720px] md:block">
        <p className="editorial-side editorial-side--left">MÉXICO</p>
        <p className="editorial-side editorial-side--right">& BEYOND</p>

        <div className="mx-auto max-w-lg px-8 pt-16 pb-32 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#5c5348]/70 uppercase">
            Colecciones
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-[#2c2a26] lg:text-5xl">
            Un jardín de
            <br />
            <span className="italic">experiencias</span>
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-[#5c5348]/80">
            Toca cada pieza para entrar en su mundo. Imágenes de referencia —
            sustituye por las tuyas.
          </p>
        </div>

        {collections.map((c) =>
          c.id === "reserve" ? (
            <Link
              key={c.id}
              href="/book"
              className={`sticker absolute ${c.position} ${accentStyles[c.accent]}`}
              style={{ rotate: c.rotate }}
            >
              <span className="sticker-inner--float">
                <StickerContent collection={c} />
              </span>
            </Link>
          ) : (
            <button
              key={c.id}
              type="button"
              onClick={() => openCollection(c)}
              className={`sticker absolute ${c.position} ${accentStyles[c.accent]}`}
              style={{ rotate: c.rotate }}
            >
              <span className="sticker-inner--float">
                <StickerContent collection={c} />
              </span>
            </button>
          ),
        )}
      </div>

      {/* Mobile stickers */}
      <div className="flex flex-col gap-4 px-6 py-12 md:hidden">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#5c5348]/70 uppercase">
            Colecciones
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-[#2c2a26]">
            Experiencias
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {collections.map((c) =>
            c.id === "reserve" ? (
              <Link
                key={c.id}
                href="/book"
                className={`sticker w-full ${accentStyles[c.accent]}`}
              >
                <StickerContent collection={c} />
              </Link>
            ) : (
              <button
                key={c.id}
                type="button"
                onClick={() => openCollection(c)}
                className={`sticker w-full text-left ${accentStyles[c.accent]}`}
              >
                <StickerContent collection={c} />
              </button>
            ),
          )}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={close}
            aria-label="Cerrar"
          />
          <div className="relative z-10 w-full max-w-4xl animate-modal-in">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src={active.images[imageIndex].src}
                  alt={active.images[imageIndex].alt}
                  fill
                  className="dream-image object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                {active.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setImageIndex(
                          (i) => (i - 1 + active.images.length) % active.images.length,
                        )
                      }
                      className="glass-btn absolute top-1/2 left-4 -translate-y-1/2 px-4 py-2 text-lg"
                      aria-label="Anterior"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setImageIndex((i) => (i + 1) % active.images.length)
                      }
                      className="glass-btn absolute top-1/2 right-4 -translate-y-1/2 px-4 py-2 text-lg"
                      aria-label="Siguiente"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              <div className="border-t border-white/10 px-6 py-8 sm:px-10">
                <p className="text-[10px] tracking-[0.35em] text-white/40 uppercase">
                  {String(imageIndex + 1).padStart(2, "0")} /{" "}
                  {String(active.images.length).padStart(2, "0")}
                </p>
                <h3
                  id="portfolio-modal-title"
                  className="mt-2 font-serif text-3xl font-light text-white sm:text-4xl"
                >
                  {active.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
                  {active.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/book" className="glass-btn">
                    Reservar esta experiencia
                  </Link>
                  <button type="button" onClick={close} className="glass-btn glass-btn--ghost">
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StickerContent({ collection }: { collection: PortfolioCollection }) {
  return (
    <>
      <span className="block font-serif text-xl leading-none italic sm:text-2xl">
        {collection.stickerLabel}
      </span>
      {collection.stickerSub && (
        <span className="mt-1 block text-[9px] tracking-[0.25em] uppercase opacity-80">
          {collection.stickerSub}
        </span>
      )}
      {collection.id !== "reserve" && (
        <span className="mt-3 block text-[8px] tracking-[0.2em] uppercase opacity-60">
          Ver colección →
        </span>
      )}
    </>
  );
}
