"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative bg-khaki-dark section-pad overflow-hidden">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-40" />
      <div className="container-max relative flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1.5px] bg-gold-light" />
          <span className="eyebrow">Bültene Katılın</span>
          <span className="w-8 h-[1.5px] bg-gold-light" />
        </div>
        <h2 className="font-display uppercase text-3xl md:text-4xl tracking-wide max-w-xl">
          Yeni Koleksiyonlardan İlk Siz Haberdar Olun
        </h2>
        <p className="text-bone/70 max-w-md">
          Ürün lansmanları, sınırlı seri duyuruları ve saha notları e-posta
          kutunuza gelsin.
        </p>

        {submitted ? (
          <p className="font-mono text-gold-light text-sm uppercase tracking-wide mt-2">
            Kaydınız alındı. Aramıza hoş geldiniz.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className="flex-1 bg-obsidian/40 border border-bone/20 px-5 py-4 text-sm text-bone placeholder:text-bone/40 focus:border-gold-light outline-none transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Kayıt Ol
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
