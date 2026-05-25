import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Reserva tu evento | Blue Garden",
  description: "Agenda una consulta para tu evento al aire libre.",
};

export default function BookPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div className="grain absolute inset-0 opacity-50" aria-hidden />
      <div className="relative z-10 px-6 py-10 sm:px-10">
        <header className="mx-auto max-w-xl">
          <SiteNav variant="light" />
        </header>

        <main className="mx-auto mt-16 max-w-xl">
          <div className="mb-10 text-center">
            <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase">
              Consulta privada
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light text-white sm:text-5xl">
              Agenda tu evento
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Comparte tus datos y diseñamos la experiencia contigo.
            </p>
          </div>

          <BookingForm />
        </main>
      </div>
    </div>
  );
}
