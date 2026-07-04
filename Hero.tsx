import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/abrek-hero-main/1920/1200"
          alt="Sahada taktik giyim ile bir operatör"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/30" />
        <div className="absolute inset-0 bg-noise mix-blend-overlay" />
      </div>

      {/* Nişangah köşe işaretleri */}
      <div className="absolute top-8 left-6 md:left-10 lg:left-16 w-6 h-6 border-t border-l border-gold/50" />
      <div className="absolute top-8 right-6 md:right-10 lg:right-16 w-6 h-6 border-t border-r border-gold/50" />

      <div className="relative z-10 container-max w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-6 animate-fadeUp" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <span className="w-8 h-[1.5px] bg-gold" />
          <span className="eyebrow">Abrek Gear Koleksiyonu</span>
        </div>

        <h1
          className="font-display uppercase text-[15vw] leading-[0.92] md:text-[7.5rem] lg:text-[8.5rem] tracking-tight text-bone animate-fadeUp"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          Sahada Test
          <br />
          Edildi<span className="text-gold">.</span>
        </h1>

        <p
          className="mt-6 text-lg md:text-xl text-sand/80 max-w-lg animate-fadeUp"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Profesyoneller için taktik giyim.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeUp"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          <Link href="/urunler" className="btn-primary">
            Koleksiyonu İncele
          </Link>
          <Link href="/hakkimizda" className="btn-secondary">
            Marka Hikayesi
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 md:right-10 lg:right-16 hidden md:flex items-center gap-2 text-sand/40 font-mono text-xs uppercase tracking-widest2">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        Koleksiyon 2026
      </div>
    </section>
  );
}
