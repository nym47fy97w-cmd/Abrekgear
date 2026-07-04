"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addItem } = useCart();

  return (
    <div className="group bracket-frame">
      <span className="bracket-tr" />
      <span className="bracket-bl" />

      <Link
        href={`/urunler/${product.slug}`}
        className="block relative aspect-[3/4] overflow-hidden bg-khaki-dark"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternatif görünüm`}
            fill
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-gold text-obsidian text-[10px] font-mono uppercase tracking-wide px-2 py-1">
              Yeni
            </span>
          )}
          {product.compareAtPrice && (
            <span className="bg-obsidian/80 text-gold-light text-[10px] font-mono uppercase tracking-wide px-2 py-1 border border-gold/30">
              İndirim
            </span>
          )}
        </div>

        <span className="absolute top-3 right-3 font-mono text-[10px] text-bone/50 tracking-wide">
          {product.code}
        </span>
      </Link>

      <div className="pt-4 flex flex-col gap-2.5">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/urunler/${product.slug}`}>
            <h3 className="font-display uppercase text-[15px] tracking-wide text-bone hover:text-gold-light transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {product.compareAtPrice && (
            <span className="font-mono text-xs text-sand/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          <span className="font-mono text-sm text-gold-light">
            {formatPrice(product.price)}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {product.colors.map((color) => (
            <button
              key={color.name}
              title={color.name}
              onClick={(e) => {
                e.preventDefault();
                setSelectedColor(color.name);
              }}
              className={`w-4 h-4 rounded-full border transition-all ${
                selectedColor === color.name
                  ? "border-gold-light scale-110"
                  : "border-bone/20"
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={(e) => {
                e.preventDefault();
                setSelectedSize(size);
              }}
              className={`text-[11px] font-mono px-2 py-1 border transition-colors ${
                selectedSize === size
                  ? "border-gold-light text-gold-light"
                  : "border-line text-sand/60 hover:border-sand/40"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          onClick={() => addItem(product, selectedColor, selectedSize)}
          disabled={product.stock === "Tükendi"}
          className="mt-1 w-full border border-sand/30 text-bone text-xs font-display uppercase tracking-wide py-3 transition-all duration-300 hover:bg-gold hover:border-gold hover:text-obsidian disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {product.stock === "Tükendi" ? "Tükendi" : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
}
