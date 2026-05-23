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
        <p className="font-serif text-2xl text-white">Request received</p>
        <p className="mt-3 text-sm text-white/60">
          We will contact you shortly to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
            Full name
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
            placeholder="Jane Doe"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
            placeholder="jane@email.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
            placeholder="+1 555 000 0000"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
            Preferred date
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
          Event type
        </span>
        <select
          name="eventType"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate</option>
          <option value="private">Private celebration</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-xs tracking-[0.15em] text-white/50 uppercase">
          Additional details
        </span>
        <textarea
          name="message"
          rows={4}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
          placeholder="Guest count, location ideas, special requests..."
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full border border-white/20 bg-white/10 py-4 text-sm tracking-[0.2em] text-white uppercase transition hover:bg-white hover:text-zinc-900"
      >
        Submit request
      </button>
    </form>
  );
}
