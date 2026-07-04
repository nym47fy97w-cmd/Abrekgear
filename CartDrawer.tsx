"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, totalPrice, removeItem } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-obsidian/70 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-obsidian-light border-l border-line z-[70] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h3 className="font-display uppercase tracking-wide text-lg">
            Sepetiniz
          </h3>
          <button onClick={closeDrawer} aria-label="Kapat" className="text-bone/70 hover:text-gold-light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-sand/60 text-sm mt-10 text-center">
              Sepetiniz şu anda boş.
            </p>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="relative w-20 h-24 flex-shrink-0 bg-khaki-dark overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-display uppercase text-sm">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-sand/60 font-mono mt-1">
                        {item.color} / {item.size} / {item.quantity} ADET
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-mono text-sm text-gold-light">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(i)}
                        className="text-xs text-sand/50 hover:text-red-400 underline"
                      >
                        Kaldır
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sand/70 text-sm uppercase tracking-wide">
                Ara Toplam
              </span>
              <span className="font-mono text-lg text-gold-light">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Link
              href="/sepet"
              onClick={closeDrawer}
              className="btn-primary w-full"
            >
              Sepete Git
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
