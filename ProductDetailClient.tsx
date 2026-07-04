"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

const stockStyles: Record<Product["stock"], string> = {
  Stokta: "text-green-400",
  "Sınırlı Stok": "text-gold-light",
  Tükendi: "text-red-400",
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "aciklama" | "ozellikler" | "kargo"
  >("aciklama");
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, selectedColor, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Galeri */}
      <div>
        <div className="relative aspect-[3/4] bg-khaki-dark overflow-hidden bracket-frame">
          <span className="bracket-tr" />
          <span className="bracket-bl" />
          <Image
            src={product.images[activeImage]}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="absolute top-3 right-3 font-mono text-[11px] text-bone/60 z-10">
            {product.code}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-3">
          {product.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImage(i)}
              className={`relative aspect-square overflow-hidden bg-khaki-dark border transition-colors ${
                activeImage === i ? "border-gold-light" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`${product.name} görsel ${i + 1}`}
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Bilgi paneli */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="eyebrow">{product.category}</span>
          <span className="w-1 h-1 rounded-full bg-sand/40" />
          <span className="font-mono text-xs text-sand/50">{product.code}</span>
        </div>

        <h1 className="font-display uppercase text-3xl md:text-4xl tracking-wide mb-4">
          {product.name}
        </h1>

        <div className="flex items-center gap-3 mb-2">
          {product.compareAtPrice && (
            <span className="font-mono text-base text-sand/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          <span className="font-mono text-2xl text-gold-light">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className={`font-mono text-xs uppercase tracking-wide mb-8 ${stockStyles[product.stock]}`}>
          ● {product.stock}
        </p>

        {/* Renk seçimi */}
        <div className="mb-6">
          <p className="eyebrow mb-3">Renk: {selectedColor}</p>
          <div className="flex items-center gap-2.5">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                title={color.name}
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  selectedColor === color.name
                    ? "border-gold-light scale-110"
                    : "border-bone/20 hover:border-bone/50"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>

        {/* Beden seçimi */}
        <div className="mb-8">
          <p className="eyebrow mb-3">Beden: {selectedSize}</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[52px] text-center text-sm font-mono px-3 py-2.5 border transition-colors ${
                  selectedSize === size
                    ? "border-gold-light text-gold-light bg-gold/10"
                    : "border-line text-sand/70 hover:border-sand/50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Adet ve sepete ekle */}
        <div className="flex items-stretch gap-3 mb-4">
          <div className="flex items-center border border-line">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-11 h-full text-lg text-bone/70 hover:text-gold-light transition-colors"
              aria-label="Azalt"
            >
              −
            </button>
            <span className="w-10 text-center font-mono">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-11 h-full text-lg text-bone/70 hover:text-gold-light transition-colors"
              aria-label="Artır"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            disabled={product.stock === "Tükendi"}
            className="btn-primary flex-1 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {added
              ? "Sepete Eklendi ✓"
              : product.stock === "Tükendi"
              ? "Tükendi"
              : "Sepete Ekle"}
          </button>
        </div>

        <p className="text-xs text-sand/50 font-mono mb-10">
          30 gün içinde koşulsuz iade · Güvenli ödeme
        </p>

        {/* Sekmeler */}
        <div className="hairline">
          <div className="flex gap-8 border-b border-line">
            {[
              { key: "aciklama", label: "Açıklama" },
              { key: "ozellikler", label: "Teknik Özellikler" },
              { key: "kargo", label: "Kargo & İade" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`py-4 font-display uppercase text-xs md:text-sm tracking-wide border-b-2 -mb-[1px] transition-colors ${
                  activeTab === tab.key
                    ? "border-gold-light text-gold-light"
                    : "border-transparent text-sand/60 hover:text-sand"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-6 text-sm text-sand/75 leading-relaxed">
            {activeTab === "aciklama" && <p>{product.description}</p>}
            {activeTab === "ozellikler" && (
              <ul className="flex flex-col gap-2">
                {product.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="text-gold-light mt-1">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "kargo" && <p>{product.shipping}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
