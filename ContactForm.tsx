"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-gold/40 p-8">
        <p className="font-display uppercase tracking-wide text-lg text-gold-light mb-2">
          Mesajınız Alındı
        </p>
        <p className="text-sand/70 text-sm">
          En kısa sürede size dönüş yapacağız. İlginiz için teşekkür ederiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="eyebrow">
            Ad Soyad
          </label>
          <input
            id="name"
            type="text"
            required
            className="bg-obsidian-light border border-line px-4 py-3 text-sm focus:border-gold-light outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="eyebrow">
            E-posta
          </label>
          <input
            id="email"
            type="email"
            required
            className="bg-obsidian-light border border-line px-4 py-3 text-sm focus:border-gold-light outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="eyebrow">
          Konu
        </label>
        <select
          id="subject"
          className="bg-obsidian-light border border-line px-4 py-3 text-sm focus:border-gold-light outline-none transition-colors"
        >
          <option>Sipariş Desteği</option>
          <option>İade / Değişim</option>
          <option>Kurumsal İşbirliği</option>
          <option>Diğer</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow">
          Mesajınız
        </label>
        <textarea
          id="message"
          rows={6}
          required
          className="bg-obsidian-light border border-line px-4 py-3 text-sm focus:border-gold-light outline-none transition-colors resize-none"
        />
      </div>

      <button type="submit" className="btn-primary self-start">
        Mesajı Gönder
      </button>
    </form>
  );
}
