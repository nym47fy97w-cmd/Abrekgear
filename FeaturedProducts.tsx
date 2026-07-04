import Link from "next/link";
import { featuredProducts } from "@/lib/data";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

export default function FeaturedProducts() {
  return (
    <section className="section-pad bg-obsidian-light">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Seçili Parçalar"
            title="Öne Çıkan Ürünler"
            description="Ekibimizin en çok tercih edilen ve sahada en çok test edilmiş modelleri."
          />
          <Link
            href="/urunler"
            className="hidden md:inline-flex font-display uppercase text-sm tracking-wide text-gold-light hover:text-gold transition-colors mb-12"
          >
            Tümünü Gör →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link href="/urunler" className="btn-secondary w-full">
            Tümünü Gör
          </Link>
        </div>
      </div>
    </section>
  );
}
