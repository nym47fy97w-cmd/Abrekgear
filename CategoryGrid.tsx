import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function CategoryGrid() {
  return (
    <section className="section-pad bg-obsidian">
      <div className="container-max">
        <SectionHeading
          eyebrow="Kategoriler"
          title="İhtiyacınıza Göre Donanım"
          description="Her kategori, belirli bir kullanım senaryosu için geliştirildi. İhtiyacınıza uygun ekipmanı seçin."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/urunler?kategori=${encodeURIComponent(cat.name)}`}
              className="group relative aspect-[3/4] overflow-hidden bg-khaki-dark"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 transition-colors duration-300" />
              <span className="absolute bottom-4 left-0 right-0 text-center font-display uppercase text-sm md:text-base tracking-wide text-bone group-hover:text-gold-light transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
