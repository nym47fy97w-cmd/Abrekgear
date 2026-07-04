"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/urunler", label: "Koleksiyon" },
  { href: "/hakkimizda", label: "Marka Hikayesi" },
  { href: "/blog", label: "Bülten" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-sm border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between px-6 md:px-10 lg:px-16 h-[76px]">
        <Link
          href="/"
          className="font-display uppercase text-xl md:text-2xl tracking-widest2 text-bone flex items-center gap-2"
        >
          <span className="text-gold">Abrek</span>
          <span>Gear</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-sm uppercase tracking-wide transition-colors relative py-2 ${
                pathname === link.href
                  ? "text-gold-light"
                  : "text-bone/80 hover:text-gold-light"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-gold-light" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            onClick={openDrawer}
            aria-label="Sepeti aç"
            className="relative flex items-center gap-2 text-bone hover:text-gold-light transition-colors"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6L4.5 3H2" />
              <circle cx="9.5" cy="20" r="1.2" fill="currentColor" />
              <circle cx="17.5" cy="20" r="1.2" fill="currentColor" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-mono w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="lg:hidden text-bone"
            aria-label="Menüyü aç"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-obsidian border-t border-line animate-fadeIn">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-base uppercase tracking-wide py-3 border-b border-line/60 ${
                  pathname === link.href ? "text-gold-light" : "text-bone/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
