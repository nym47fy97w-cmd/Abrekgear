import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center section-pad">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-[1.5px] bg-gold" />
          <span className="eyebrow">Hata 404</span>
          <span className="w-8 h-[1.5px] bg-gold" />
        </div>
        <h1 className="font-display uppercase text-7xl md:text-8xl tracking-wide text-gold-light mb-6">
          Hedef Bulunamadı
        </h1>
        <p className="text-sand/70 mb-10">
          Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir.
          Koordinatlarınızı kontrol edip yeniden deneyin.
        </p>
        <Link href="/" className="btn-primary">
          Ana Üsse Dön
        </Link>
      </div>
    </div>
  );
}
