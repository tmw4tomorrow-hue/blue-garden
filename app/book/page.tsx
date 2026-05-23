import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Reserva tu evento | Blue Garden",
  description: "Agenda una consulta para tu evento al aire libre.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10 sm:px-10">
      <header className="mx-auto flex max-w-xl items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.35em] text-white/90 uppercase transition hover:text-white"
        >
          Blue Garden
        </Link>
        <Link
          href="/"
          className="text-xs tracking-[0.15em] text-white/50 uppercase transition hover:text-white"
        >
          ← Volver
        </Link>
      </header>

      <main className="mx-auto mt-16 max-w-xl">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Agenda tu evento
          </h1>
          <p className="mt-4 text-sm text-white/60 sm:text-base">
            Comparte tus datos y nos pondremos en contacto para planificar tu
            experiencia.
          </p>
        </div>

        <BookingForm />
      </main>
    </div>
  );
}
