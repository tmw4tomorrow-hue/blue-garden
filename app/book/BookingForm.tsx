"use client";

import { FormEvent, useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
        <p className="font-serif text-2xl text-white">Solicitud recibida</p>
        <p className="mt-3 text-sm text-white/60">
          Nos pondremos en contacto pronto para confirmar tu cita.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
            Nombre completo
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
            placeholder="María García"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
            Correo electrónico
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
            placeholder="maria@correo.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
            Teléfono
          </span>
          <input
            type="tel"
            name="phone"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
            placeholder="+34 600 000 000"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
            Fecha preferida
          </span>
          <input
            type="date"
            name="date"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30 [color-scheme:dark]"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
          Tipo de evento
        </span>
        <select
          name="eventType"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
          defaultValue=""
        >
          <option value="" disabled>
            Elige una opción
          </option>
          <option value="wedding">Boda</option>
          <option value="corporate">Corporativo</option>
          <option value="private">Celebración privada</option>
          <option value="other">Otro</option>
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
          Detalles adicionales
        </span>
        <textarea
          name="message"
          rows={4}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
          placeholder="Número de invitados, ubicación, peticiones especiales..."
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full border border-white/20 bg-white/10 py-4 text-sm tracking-[0.2em] text-white uppercase transition hover:bg-white hover:text-zinc-900"
      >
        Enviar solicitud
      </button>
    </form>
  );
}
