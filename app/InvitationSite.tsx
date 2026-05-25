"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import BookingForm from "./book/BookingForm";
import {
  EnvelopeFlap,
  LaceDivider,
  OvalFrame,
  PolaroidCard,
  PostageStamp,
  RibbonTag,
  ScallopedMonogram,
  SwanPiece,
  WaxSeal,
} from "./components/invitation/PostalPieces";
import {
  BG_GARDEN,
  BG_LAKE,
  BG_MOODY,
  lightboxSets,
  polaroids,
} from "@/lib/invitation";

type Lightbox = {
  title: string;
  images: { src: string; alt: string }[];
} | null;

const galleryPositions = [
  "top-[8%] left-[6%]",
  "top-[14%] right-[8%]",
  "top-[32%] left-[4%]",
  "top-[36%] right-[4%]",
  "bottom-[28%] left-[12%]",
  "bottom-[18%] right-[10%]",
];

export default function InvitationSite() {
  const [lightbox, setLightbox] = useState<Lightbox>(null);
  const [slide, setSlide] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const openLightbox = useCallback((key: keyof typeof lightboxSets) => {
    setLightbox(lightboxSets[key]);
    setSlide(0);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setSlide(0);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && lightbox.images.length > 1)
        setSlide((s) => (s + 1) % lightbox.images.length);
      if (e.key === "ArrowLeft" && lightbox.images.length > 1)
        setSlide((s) => (s - 1 + lightbox.images.length) % lightbox.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, closeLightbox]);

  return (
    <div className="invitation-scroll">
      {/* ——— Sección 1: Invitación (sin textos de hero) ——— */}
      <section className="invite-panel relative h-[100dvh] w-full shrink-0 snap-start snap-always">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${BG_LAKE}')` }}
          aria-hidden
        />
        <div className="invite-vignette absolute inset-0" aria-hidden />

        <div className="relative z-10 flex h-full items-center justify-center px-4 py-8 sm:px-8">
          <div className="invite-card relative h-[min(88vh,720px)] w-full max-w-md">
            <ScallopedMonogram className="absolute top-[6%] left-1/2 -translate-x-1/2" />

            <EnvelopeFlap
              className="absolute top-[4%] right-[4%]"
              onClick={() => scrollTo("reserva")}
            />

            <SwanPiece
              className="absolute bottom-[28%] right-[-2%] sm:right-[2%]"
              onClick={() => openLightbox("swan")}
            />

            <PolaroidCard
              src={polaroids[0].src}
              alt={polaroids[0].alt}
              caption="location"
              className="absolute top-[22%] left-[-4%] sm:left-[2%]"
              onClick={() => openLightbox("swan")}
            />

            <PolaroidCard
              src={polaroids[1].src}
              alt={polaroids[1].alt}
              className="absolute top-[38%] right-[-6%] sm:right-[0%]"
              style={{ rotate: "6deg" }}
              onClick={() => openLightbox("story")}
            />

            <WaxSeal
              className="absolute bottom-[38%] left-[8%]"
              onClick={() => openLightbox("seal")}
            />

            <OvalFrame
              src={polaroids[4].src}
              alt={polaroids[4].alt}
              className="absolute bottom-[12%] left-[32%]"
              onClick={() => openLightbox("story")}
            />

            <RibbonTag
              label="nuestra mesa"
              className="absolute bottom-[22%] right-[6%]"
              onClick={() => scrollTo("galeria")}
            />

            <PostageStamp
              src={polaroids[2].src}
              alt={polaroids[2].alt}
              className="absolute top-[52%] left-[42%]"
              onClick={() => scrollTo("galeria")}
            />

            <LaceDivider className="absolute bottom-[8%] left-[8%] w-[84%] text-[#9a9088]/50" />
          </div>
        </div>

        <div className="scroll-cue absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
          <span className="block h-8 w-px animate-pulse bg-white/40" />
        </div>
      </section>

      {/* ——— Sección 2: Más piezas al scroll ——— */}
      <section
        id="galeria"
        className="invite-panel relative min-h-[100dvh] shrink-0 snap-start snap-always"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${BG_GARDEN}')` }}
          aria-hidden
        />
        <div className="invite-vignette absolute inset-0 bg-black/40" aria-hidden />

        <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-4 py-16">
          <div className="reveal-scroll invite-card relative min-h-[520px] w-full max-w-lg px-4 py-12">
            <div className="pointer-events-none absolute inset-4 rounded-3xl border border-white/20" />

            {polaroids.map((p, i) => (
              <PolaroidCard
                key={p.id}
                src={p.src}
                alt={p.alt}
                className={`reveal-scroll absolute ${galleryPositions[i]}`}
                style={{ rotate: p.rotate, transitionDelay: `${p.delay ?? 0}s` }}
                onClick={() => {
                  setLightbox({
                    title: "Colección",
                    images: polaroids.map((x) => ({ src: x.src, alt: x.alt })),
                  });
                  setSlide(i);
                }}
              />
            ))}

            <SwanPiece
              className="absolute bottom-[8%] right-[5%]"
              onClick={() => openLightbox("swan")}
            />

            <WaxSeal
              className="absolute top-[8%] left-[10%]"
              onClick={() => scrollTo("reserva")}
            />
          </div>
        </div>
      </section>

      {/* ——— Sección 3: Moody garden ——— */}
      <section className="invite-panel relative min-h-[100dvh] shrink-0 snap-start snap-always">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${BG_MOODY}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#1a2420]/55" aria-hidden />

        <div className="relative z-10 flex min-h-[100dvh] items-center justify-center p-6">
          <div className="reveal-scroll relative w-full max-w-sm">
            <div className="rounded-[2rem] border border-white/15 bg-[#f7f4ef]/12 p-8 backdrop-blur-md">
              <PolaroidCard
                src={polaroids[5].src}
                alt={polaroids[5].alt}
                floating={false}
                className="mx-auto rotate-[-3deg]"
                onClick={() => openLightbox("story")}
              />
              <RibbonTag
                label="pulsa para ver"
                className="relative! mx-auto mt-8 block w-fit"
                onClick={() => openLightbox("story")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ——— Sección 4: Reserva ——— */}
      <section
        id="reserva"
        className="invite-panel relative min-h-[100dvh] shrink-0 snap-start snap-always bg-[#1c1f1c]"
      >
        <div className="grain absolute inset-0" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-6 py-20">
          <div className="reveal-scroll mb-10 flex justify-center">
            <WaxSeal className="relative mx-auto block" onClick={() => scrollTo("reserva")} />
          </div>
          <div className="reveal-scroll rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal>
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
            onClick={closeLightbox}
            aria-label="Cerrar"
          />
          <div className="relative z-10 w-full max-w-3xl animate-modal-in">
            <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={lightbox.images[slide].src}
                  alt={lightbox.images[slide].alt}
                  fill
                  className="dream-image object-cover"
                  sizes="90vw"
                  priority
                />
              </div>
              {lightbox.images.length > 1 && (
                <div className="absolute inset-y-0 flex w-full items-center justify-between px-3">
                  <button
                    type="button"
                    className="glass-btn px-3 py-2"
                    onClick={() =>
                      setSlide((s) => (s - 1 + lightbox.images.length) % lightbox.images.length)
                    }
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="glass-btn px-3 py-2"
                    onClick={() => setSlide((s) => (s + 1) % lightbox.images.length)}
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
            <button type="button" onClick={closeLightbox} className="glass-btn mt-4 w-full">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
