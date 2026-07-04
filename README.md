# Abrek Gear — E-Ticaret Web Sitesi

Premium taktik giyim markası Abrek Gear için Next.js 14 (App Router) + TypeScript + Tailwind CSS ile geliştirilmiş, tamamen responsive e-ticaret sitesi.

## Kurulum

### 1. Gereksinimler
- Node.js 18.17 veya üzeri
- npm, yarn veya pnpm

### 2. Bağımlılıkları yükleyin
```bash
npm install
```

### 3. Geliştirme sunucusunu başlatın
```bash
npm run dev
```
Tarayıcıda `http://localhost:3000` adresini açın.

### 4. Production build alma
```bash
npm run build
npm run start
```

> Not: Proje, `next/font/google` ile Oswald, Inter ve JetBrains Mono fontlarını kullanır. İlk `npm run build` veya `npm run dev` çalıştırmasında internet bağlantısı gerekir (fontlar derleme sırasında indirilir). Ürün görselleri `picsum.photos` üzerinden placeholder olarak servis edilir — kendi görsellerinizle değiştirmek için `lib/data.ts` içindeki `images` alanlarını güncelleyin.

## GitHub'a Tek Komutla Gönderme

Proje, GitHub'a göndermeye hazır şekilde yapılandırıldı (`.gitignore`, `.devcontainer`, CI workflow dahil). Boş bir GitHub reponuz varsa veya [GitHub CLI](https://cli.github.com) kuruluysa, tek komutla gönderebilirsiniz:

```bash
npm run gh:push
```

veya doğrudan repo URL'si vererek:

```bash
npm run gh:push -- https://github.com/kullaniciadi/abrek-gear.git
```

Script (`scripts/push-to-github.sh`) şunları otomatik yapar:
1. Henüz yoksa git deposunu başlatır (`git init`)
2. Branch'i `main` olarak ayarlar
3. GitHub CLI kuruluysa ve giriş yapılmışsa, isterseniz sizin için yeni bir repo oluşturur (`gh repo create`)
4. `origin` remote'unu ekler/günceller
5. Tüm dosyaları commit'ler
6. `git push -u origin main` ile gönderir

> İlk kullanımdan önce script'i çalıştırılabilir yapmanız gerekebilir: `chmod +x scripts/push-to-github.sh`

### GitHub Codespaces ile Açma

Repo GitHub'a gönderildikten sonra, yerel kurulum yapmadan doğrudan tarayıcıda çalıştırabilirsiniz:

1. GitHub reponuzda **Code → Codespaces → Create codespace on main** adımını izleyin.
2. Codespace açıldığında `.devcontainer/devcontainer.json` yapılandırması otomatik devreye girer: Node.js 20 ortamı kurulur, `npm install` otomatik çalışır, Tailwind CSS/ESLint/Prettier eklentileri hazır gelir.
3. Terminalde `npm run dev` çalıştırın; port 3000 otomatik yönlendirilir ve önizleme açılır.

### Sürekli Entegrasyon (CI)

`.github/workflows/ci.yml`, her `push` ve `pull request` işleminde otomatik olarak `npm run lint` ve `npm run build` çalıştırır — böylece `main` branch'ine bozuk kod girmesini engeller.

## Proje Yapısı

```
abrek-gear/
├── .devcontainer/
│   └── devcontainer.json          # GitHub Codespaces yapılandırması
├── .github/
│   └── workflows/
│       └── ci.yml                 # Push/PR'da otomatik lint + build kontrolü
├── scripts/
│   └── push-to-github.sh          # Tek komutla GitHub'a gönderme scripti
├── app/
│   ├── layout.tsx                 # Kök layout (fontlar, navbar, footer, cart provider)
│   ├── page.tsx                   # Ana sayfa
│   ├── globals.css                # Global stiller + marka bileşen sınıfları
│   ├── not-found.tsx              # 404 sayfası
│   ├── urunler/
│   │   ├── page.tsx               # Ürün listeleme (metadata + Suspense sarmalayıcı)
│   │   ├── ProductsClient.tsx     # Filtreleme/sıralama mantığı (client)
│   │   └── [slug]/
│   │       ├── page.tsx           # Ürün detay (server, SEO metadata)
│   │       └── ProductDetailClient.tsx  # Galeri, seçim, sepete ekleme (client)
│   ├── sepet/
│   │   └── page.tsx               # Sepet sayfası
│   ├── hakkimizda/
│   │   └── page.tsx               # Marka hikayesi
│   ├── iletisim/
│   │   ├── page.tsx               # İletişim sayfası
│   │   └── ContactForm.tsx        # İletişim formu (client)
│   ├── sss/
│   │   ├── page.tsx               # SSS sayfası
│   │   └── FaqAccordion.tsx       # Akordiyon bileşeni (client)
│   └── blog/
│       ├── page.tsx               # Blog listeleme
│       └── [slug]/
│           └── page.tsx           # Blog detay
├── components/
│   ├── Navbar.tsx                 # Sticky navbar
│   ├── Footer.tsx                 # Footer
│   ├── Hero.tsx                   # Ana sayfa hero alanı
│   ├── CategoryGrid.tsx           # Kategori grid'i
│   ├── FeaturedProducts.tsx       # Öne çıkan ürünler
│   ├── WhySection.tsx             # "Neden Abrek Gear?" bölümü
│   ├── Testimonials.tsx           # Kullanıcı yorumları
│   ├── InstagramGrid.tsx          # Görsel galeri (Instagram grid)
│   ├── Newsletter.tsx             # Bülten kayıt formu
│   ├── ProductCard.tsx            # Ürün kartı (renk/beden seçimi, sepete ekle)
│   ├── CartDrawer.tsx             # Sepete eklenince açılan yan panel
│   └── SectionHeading.tsx         # Tekrar kullanılabilir bölüm başlığı
├── lib/
│   ├── data.ts                    # Sahte ürün, kategori, blog, yorum verileri
│   ├── cart-context.tsx           # Sepet state yönetimi (React Context)
│   └── utils.ts                   # Fiyat formatlama vb. yardımcılar
├── tailwind.config.ts             # Marka renk paleti, tipografi, animasyon tokenları
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Marka Tasarım Sistemi

**Renk paleti**
| Token | Hex | Kullanım |
|---|---|---|
| Obsidian | `#0B0C0A` | Ana arka plan |
| Koyu Haki | `#3F3D2F` | İkincil yüzeyler |
| Kum | `#C7B899` | Metin vurguları, ikonlar |
| Metalik Altın | `#A9853E` | CTA, aktif durumlar, fiyat |
| Kırık Beyaz (Bone) | `#EDEAE2` | Ana metin rengi |

**Tipografi**
- Başlıklar: **Oswald** (uppercase, geniş harf aralığı — sert/endüstriyel karakter)
- Gövde metni: **Inter**
- Teknik veri (fiyat, ürün kodu, stok durumu): **JetBrains Mono**

**İmza tasarım öğesi:** Ürün kartları ve galerilerde "nişangah köşe braketleri" (`.bracket-frame` sınıfı) — hover'da genişleyip parlayan köşe çizgileri, markanın taktik/hassasiyet diline görsel karşılık verir. Her ürünün benzersiz bir operasyon kodu vardır (örn. `AG-0142-BLK`).

## Sepet Mantığı

Sepet, `lib/cart-context.tsx` içinde React Context ile yönetilir; sayfa yenilendiğinde sıfırlanır (kalıcı saklama istenirse `localStorage` veya bir backend entegrasyonu eklenebilir — bu şu anki kapsamın dışındadır).

## SEO Notları

- Her sayfa kendi `metadata` (title/description) tanımını `export const metadata` veya `generateMetadata` ile sağlar.
- `app/layout.tsx` içinde marka genelinde varsayılan title şablonu ve Open Graph verisi tanımlıdır.
- Ürün ve blog detay sayfaları `generateStaticParams` ile statik olarak build-time'da üretilir.

## Geliştirmeye Devam Etmek İçin Öneriler

- Gerçek ürün görselleri ve bir CMS (Sanity, Contentful vb.) entegrasyonu
- Ödeme sağlayıcı entegrasyonu (iyzico, Stripe vb.) — şu an "Ödemeye Geç" adımı simülasyondur
- Kullanıcı hesabı / sipariş geçmişi sayfaları
- Sepetin `localStorage` ile kalıcı hale getirilmesi
