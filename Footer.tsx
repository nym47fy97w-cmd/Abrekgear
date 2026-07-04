import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-obsidian-light border-t border-line">
      <div className="container-max px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display uppercase text-xl tracking-widest2 text-bone flex items-center gap-2 mb-4"
            >
              <span className="text-gold">Abrek</span>
              <span>Gear</span>
            </Link>
            <p className="text-sand/70 text-sm leading-relaxed max-w-xs">
              Profesyoneller için tasarlanmış, sahada test edilmiş taktik
              giyim. Fonksiyon ve dayanıklılık üzerine kurulmuş bir marka.
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Mağaza</h4>
            <ul className="flex flex-col gap-3 text-sm text-bone/75">
              <li><Link href="/urunler" className="hover:text-gold-light transition-colors">Tüm Ürünler</Link></li>
              <li><Link href="/urunler?kategori=Tişört" className="hover:text-gold-light transition-colors">Tişört</Link></li>
              <li><Link href="/urunler?kategori=Hoodie" className="hover:text-gold-light transition-colors">Hoodie</Link></li>
              <li><Link href="/urunler?kategori=Polar" className="hover:text-gold-light transition-colors">Polar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Kurumsal</h4>
            <ul className="flex flex-col gap-3 text-sm text-bone/75">
              <li><Link href="/hakkimizda" className="hover:text-gold-light transition-colors">Marka Hikayesi</Link></li>
              <li><Link href="/blog" className="hover:text-gold-light transition-colors">Bülten</Link></li>
              <li><Link href="/sss" className="hover:text-gold-light transition-colors">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/iletisim" className="hover:text-gold-light transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">İletişim</h4>
            <ul className="flex flex-col gap-3 text-sm text-bone/75">
              <li>destek@abrekgear.com</li>
              <li>+90 (212) 555 01 42</li>
              <li>Maslak, İstanbul</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sand/50 font-mono">
            © 2026 ABREK GEAR. TÜM HAKLARI SAKLIDIR.
          </p>
          <p className="text-xs text-sand/50 font-mono uppercase tracking-widest2">
            Sahada test edildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
