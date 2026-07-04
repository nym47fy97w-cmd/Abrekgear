"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, categories, Category } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

type SortOption = "onerilen" | "fiyat-artan" | "fiyat-azalan" | "yeni";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("kategori") as Category | null;
  const [sort, setSort] = useState<SortOption>("onerilen");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = activeCategory
      ? products.filter((p) => p.category === activeCategory)
      : products;

    list = [...list];
    if (sort === "fiyat-artan") list.sort((a, b) => a.price - b.price);
    if (sort === "fiyat-azalan") list.sort((a, b) => b.price - a.price);
    if (sort === "yeni") list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    return list;
  }, [activeCategory, sort]);

  const setCategory = (cat: Category | null) => {
    if (!cat) {
      router.push("/urunler");
    } else {
      router.push(`/urunler?kategori=${encodeURIComponent(cat)}`);
    }
    setMobileFilterOpen(false);
  };

  return (
    <div className="section-pad pt-14">
      <div className="container-max">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1.5px] bg-gold" />
          <span className="eyebrow">Tam Koleksiyon</span>
        </div>
        <h1 className="font-display uppercase text-4xl md:text-5xl tracking-wide mb-10">
          {activeCategory ? activeCategory : "Tüm Ürünler"}
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filtre paneli */}
          <aside className="md:w-56 flex-shrink-0">
            <button
              className="md:hidden w-full btn-secondary mb-4"
              onClick={() => setMobileFilterOpen((v) => !v)}
            >
              Filtrele ve Sırala
            </button>

            <div className={`${mobileFilterOpen ? "block" : "hidden"} md:block`}>
              <h4 className="eyebrow mb-4">Kategori</h4>
              <ul className="flex flex-col gap-2 mb-8">
                <li>
                  <button
                    onClick={() => setCategory(null)}
                    className={`text-sm font-display uppercase tracking-wide transition-colors ${
                      !activeCategory ? "text-gold-light" : "text-bone/70 hover:text-bone"
                    }`}
                  >
                    Tümü
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <button
                      onClick={() => setCategory(cat.name)}
                      className={`text-sm font-display uppercase tracking-wide transition-colors ${
                        activeCategory === cat.name
                          ? "text-gold-light"
                          : "text-bone/70 hover:text-bone"
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <h4 className="eyebrow mb-4">Sırala</h4>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="w-full bg-obsidian-light border border-line text-sm text-bone px-3 py-2.5 focus:border-gold-light outline-none"
              >
                <option value="onerilen">Önerilen</option>
                <option value="fiyat-artan">Fiyat: Düşükten Yükseğe</option>
                <option value="fiyat-azalan">Fiyat: Yüksekten Düşüğe</option>
                <option value="yeni">Yeni Gelenler</option>
              </select>
            </div>
          </aside>

          {/* Ürün grid */}
          <div className="flex-1">
            <p className="text-sand/50 text-sm font-mono mb-6">
              {filtered.length} ÜRÜN LİSTELENİYOR
            </p>
            {filtered.length === 0 ? (
              <p className="text-sand/60">
                Bu kategoride şu anda ürün bulunmuyor.
              </p>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
                {filtered.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
