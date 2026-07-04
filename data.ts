export type Category =
  | "Tişört"
  | "Polar"
  | "Hoodie"
  | "Şapka"
  | "Patch"
  | "Taktik Aksesuar";

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  slug: string;
  code: string; // operasyon kodu, örn. AG-0142-BLK
  name: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  colors: ProductColor[];
  sizes: string[];
  stock: "Stokta" | "Sınırlı Stok" | "Tükendi";
  description: string;
  details: string[];
  shipping: string;
  images: string[];
  featured?: boolean;
  isNew?: boolean;
};

const img = (seed: string, w = 900, h = 1100) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const categories: { name: Category; slug: string; image: string }[] = [
  { name: "Tişört", slug: "tisort", image: img("abrek-tshirt-cat", 700, 900) },
  { name: "Polar", slug: "polar", image: img("abrek-fleece-cat", 700, 900) },
  { name: "Hoodie", slug: "hoodie", image: img("abrek-hoodie-cat", 700, 900) },
  { name: "Şapka", slug: "sapka", image: img("abrek-cap-cat", 700, 900) },
  { name: "Patch", slug: "patch", image: img("abrek-patch-cat", 700, 900) },
  {
    name: "Taktik Aksesuar",
    slug: "aksesuar",
    image: img("abrek-gear-cat", 700, 900),
  },
];

const blackOlive: ProductColor[] = [
  { name: "Obsidyen Siyah", hex: "#0B0C0A" },
  { name: "Koyu Haki", hex: "#3F3D2F" },
  { name: "Kum", hex: "#C7B899" },
];

export const products: Product[] = [
  {
    slug: "recon-tisort",
    code: "AG-0142-BLK",
    name: "Recon Tişört",
    category: "Tişört",
    price: 890,
    colors: blackOlive,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: "Stokta",
    description:
      "Recon Tişört, uzun mesai saatlerinde nefes alan kumaşı ve sade kesimiyle her gün giyilebilir bir taktik parça olarak tasarlandı. Yıkamalarda formunu korur, tekrarlayan kullanıma dayanacak şekilde dikildi.",
    details: [
      "%100 taranmış pamuk, 220 gr/m² gramaj",
      "Çift dikişli yaka ve kol ağzı",
      "Terletmeyen, nefes alan doku",
      "Kalıp: regular fit",
      "Türkiye'de üretildi",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-recon-tshirt-1"),
      img("ag-recon-tshirt-2"),
      img("ag-recon-tshirt-3"),
      img("ag-recon-tshirt-4"),
    ],
    featured: true,
  },
  {
    slug: "sentinel-polar",
    code: "AG-0217-KHK",
    name: "Sentinel Polar",
    category: "Polar",
    price: 1450,
    compareAtPrice: 1690,
    colors: blackOlive,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: "Stokta",
    description:
      "Sentinel Polar, soğuk hava operasyonlarında ara katman olarak geliştirildi. Yüksek yalıtım değeri düşük ağırlıkla bir araya geliyor; sırt çantası altında bile hareket serbestliği sağlıyor.",
    details: [
      "Mikro polar, 320 gr/m²",
      "Rüzgar kesici ön fermuar bariyeri",
      "Yüksek yaka, boyun koruması",
      "Yan cep, kart/anahtar bölmesi",
      "Makinede yıkanabilir",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-sentinel-polar-1"),
      img("ag-sentinel-polar-2"),
      img("ag-sentinel-polar-3"),
      img("ag-sentinel-polar-4"),
    ],
    featured: true,
  },
  {
    slug: "operator-hoodie",
    code: "AG-0301-BLK",
    name: "Operator Hoodie",
    category: "Hoodie",
    price: 1690,
    colors: blackOlive,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: "Sınırlı Stok",
    description:
      "Operator Hoodie, ağır gramajlı kumaşı ve güçlendirilmiş kapüşon yapısıyla dört mevsim kullanıma uygun. Abrek Gear'ın en çok tercih edilen ana parçalarından biri.",
    details: [
      "%80 pamuk / %20 polyester, 400 gr/m²",
      "Çift katlı kapüşon, ayarlanabilir kordon",
      "Kanguru cep, gizli iç cep",
      "Güçlendirilmiş omuz ve dirsek dikişi",
      "Kalıp: oversize fit",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-operator-hoodie-1"),
      img("ag-operator-hoodie-2"),
      img("ag-operator-hoodie-3"),
      img("ag-operator-hoodie-4"),
    ],
    featured: true,
    isNew: true,
  },
  {
    slug: "vanguard-sapka",
    code: "AG-0410-SND",
    name: "Vanguard Şapka",
    category: "Şapka",
    price: 650,
    colors: blackOlive,
    sizes: ["Standart"],
    stock: "Stokta",
    description:
      "Vanguard Şapka, sert kalıbı ve düşük profiliyle sahada dikkat çekmeden görev yapar. Ayarlanabilir arka kayış her baş ölçüsüne uyum sağlar.",
    details: [
      "%100 dayanıklı twill kumaş",
      "6 panel yapı, sert ön panel",
      "Metal toka ile ayarlanabilir kayış",
      "Nakış Abrek Gear amblemi",
      "Tek beden, ayarlanabilir",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-vanguard-cap-1"),
      img("ag-vanguard-cap-2"),
      img("ag-vanguard-cap-3"),
    ],
    featured: true,
  },
  {
    slug: "insignia-patch-seti",
    code: "AG-0512-GLD",
    name: "Insignia Patch Seti",
    category: "Patch",
    price: 320,
    colors: [{ name: "Metalik Altın", hex: "#A9853E" }],
    sizes: ["Standart"],
    stock: "Stokta",
    description:
      "Insignia Patch Seti, cırt bantlı yüzeyi sayesinde çanta, yelek veya ceket üzerine saniyeler içinde monte edilir. Üç farklı amblem içerir.",
    details: [
      "Nakışlı patch, cırt bant arka yüzey",
      "3 adet amblem içerir",
      "Su ve UV dayanımlı iplik",
      "Boyut: 8cm x 8cm (ortalama)",
      "Her yüzeye kolay montaj",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-insignia-patch-1"),
      img("ag-insignia-patch-2"),
      img("ag-insignia-patch-3"),
    ],
  },
  {
    slug: "field-belt",
    code: "AG-0605-BLK",
    name: "Field Taktik Kemer",
    category: "Taktik Aksesuar",
    price: 780,
    colors: blackOlive,
    sizes: ["M", "L", "XL"],
    stock: "Stokta",
    description:
      "Field Taktik Kemer, ağır yük taşıma senaryoları için güçlendirilmiş toka ve çift katlı dokuma yapısıyla üretildi. Günlük kullanımda da rahatlık sağlar.",
    details: [
      "Çift katlı naylon dokuma",
      "Hızlı açma metal toka sistemi",
      "Yük taşıma kapasitesi: 60kg",
      "Su iticiözellik",
      "Genişlik: 4.5cm",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-field-belt-1"),
      img("ag-field-belt-2"),
      img("ag-field-belt-3"),
    ],
  },
  {
    slug: "utility-tisort",
    code: "AG-0148-SND",
    name: "Utility Tişört",
    category: "Tişört",
    price: 890,
    colors: blackOlive,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: "Stokta",
    description:
      "Utility Tişört, göğüs cebi ve güçlendirilmiş yaka bandıyla klasik Abrek Gear tişörtlerinden bir adım öteye taşınmış fonksiyonel bir modeldir.",
    details: [
      "%100 taranmış pamuk, 220 gr/m²",
      "Fonksiyonel göğüs cebi",
      "Güçlendirilmiş yaka bandı",
      "Kalıp: regular fit",
      "Türkiye'de üretildi",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-utility-tshirt-1"),
      img("ag-utility-tshirt-2"),
      img("ag-utility-tshirt-3"),
    ],
    isNew: true,
  },
  {
    slug: "expedition-polar",
    code: "AG-0223-BLK",
    name: "Expedition Polar",
    category: "Polar",
    price: 1550,
    colors: blackOlive,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: "Sınırlı Stok",
    description:
      "Expedition Polar, uzun süreli dış mekan operasyonları için tasarlanmış üst düzey bir ara katman. Yüksek nefes alabilirlik ve hafiflik önceliklidir.",
    details: [
      "Mikro polar, 340 gr/m²",
      "Lazer kesim yan panel",
      "Hafif ve paketlenebilir",
      "Yansıtıcı Abrek Gear etiketi",
      "Makinede yıkanabilir",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-expedition-polar-1"),
      img("ag-expedition-polar-2"),
      img("ag-expedition-polar-3"),
    ],
  },
  {
    slug: "phantom-hoodie",
    code: "AG-0330-KHK",
    name: "Phantom Hoodie",
    category: "Hoodie",
    price: 1750,
    colors: blackOlive,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: "Stokta",
    description:
      "Phantom Hoodie, minimal dış görünümü altında teknik detaylar barındırır. Gizli iç cep ve ayarlanabilir bel bandı ile tasarlandı.",
    details: [
      "%85 pamuk / %15 polyester, 380 gr/m²",
      "Ayarlanabilir bel bandı",
      "Gizli göğüs cebi",
      "Ham kenar kol bitişi",
      "Kalıp: regular fit",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-phantom-hoodie-1"),
      img("ag-phantom-hoodie-2"),
      img("ag-phantom-hoodie-3"),
    ],
  },
  {
    slug: "recon-sapka",
    code: "AG-0415-BLK",
    name: "Recon Şapka",
    category: "Şapka",
    price: 650,
    colors: blackOlive,
    sizes: ["Standart"],
    stock: "Stokta",
    description:
      "Recon Şapka, düşük profilli tasarımı ve mat dokusuyla her koşulda sade bir görünüm sunar.",
    details: [
      "%100 dayanıklı twill kumaş",
      "6 panel yapı",
      "Metal toka ile ayarlanabilir kayış",
      "Nakış Abrek Gear amblemi",
      "Tek beden, ayarlanabilir",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [img("ag-recon-cap-1"), img("ag-recon-cap-2"), img("ag-recon-cap-3")],
  },
  {
    slug: "molle-cuzdan",
    code: "AG-0620-BLK",
    name: "MOLLE Taktik Cüzdan",
    category: "Taktik Aksesuar",
    price: 590,
    colors: blackOlive,
    sizes: ["Standart"],
    stock: "Stokta",
    description:
      "MOLLE Taktik Cüzdan, sert kullanım koşullarına dayanıklı malzemesi ve çok bölmeli iç yapısıyla günlük taşıma ekipmanınıza pratik bir çözüm sunar.",
    details: [
      "1000D naylon dış kumaş",
      "RFID korumalı kart bölmesi",
      "MOLLE uyumlu montaj şeridi",
      "Su iticiözellik",
      "Boyut: 12cm x 9cm",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [
      img("ag-molle-wallet-1"),
      img("ag-molle-wallet-2"),
      img("ag-molle-wallet-3"),
    ],
  },
  {
    slug: "unit-patch",
    code: "AG-0515-BLK",
    name: "Unit Amblem Patch",
    category: "Patch",
    price: 190,
    colors: [{ name: "Metalik Altın", hex: "#A9853E" }],
    sizes: ["Standart"],
    stock: "Stokta",
    description:
      "Unit Amblem Patch, Abrek Gear'ın imza sembolünü taşıyan tekli nakış patch. Cırt bant montajla kolayca uygulanır.",
    details: [
      "Nakışlı patch, cırt bant arka yüzey",
      "Su ve UV dayanımlı iplik",
      "Boyut: 8cm x 8cm",
      "Her yüzeye kolay montaj",
    ],
    shipping:
      "Siparişleriniz 1-3 iş günü içinde kargoya verilir. 30 gün içinde koşulsuz iade hakkınız bulunur.",
    images: [img("ag-unit-patch-1"), img("ag-unit-patch-2")],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Emre K.",
    role: "Dağcılık Eğitmeni",
    quote:
      "Sentinel Polar'ı iki kış sezonudur kullanıyorum. Yıpranma neredeyse yok, dikişler hâlâ sapasağlam.",
    rating: 5,
  },
  {
    name: "Deniz A.",
    role: "Outdoor Fotoğrafçı",
    quote:
      "Operator Hoodie'nin kumaş kalitesi beklentimin üzerindeydi. Uzun çekimlerde rahatlığından ödün vermiyor.",
    rating: 5,
  },
  {
    name: "Barış T.",
    role: "İşletme Sahibi",
    quote:
      "Kargo hızlı, ürün açıklamaları gerçekçi. Sipariş ettiğim ürünle elime geçen birebir aynıydı.",
    rating: 5,
  },
  {
    name: "Selin Y.",
    role: "Doğa Sporları Antrenörü",
    quote:
      "Recon Tişört'ün nefes alan yapısı yoğun antrenmanlarda fark yaratıyor. Bir daha başka marka denemeyeceğim.",
    rating: 4,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kumas-seciminde-dikkat-edilmesi-gerekenler",
    title: "Taktik Giyimde Kumaş Seçimi Neden Belirleyicidir",
    excerpt:
      "Gramaj, dokuma sıklığı ve elyaf karışımı; bir parçanın sahada ne kadar dayanacağını belirleyen üç temel etkendir.",
    category: "Malzeme",
    date: "18 Haziran 2026",
    readTime: "6 dk",
    image: img("ag-blog-fabric", 1200, 800),
    content: [
      "Bir tekstil ürününün performansı, çoğu zaman gözle görülmeyen ayrıntılarda saklıdır. Gramaj, kumaşın metrekare başına ağırlığını ifade eder ve doğrudan dayanıklılıkla ilişkilidir. Abrek Gear koleksiyonlarında 220 gr/m² ile 400 gr/m² arasında değişen gramajlar, her ürünün kullanım amacına göre özel olarak belirlenir.",
      "Dokuma sıklığı ise kumaşın hava geçirgenliğini ve su direncini doğrudan etkiler. Sık dokunmuş kumaşlar dış etkenlere karşı daha dayanıklıyken, gevşek dokuma nefes alabilirliği artırır. İki özelliği bir arada sunmak, katmanlı üretim teknikleri gerektirir.",
      "Elyaf karışımı konusunda Abrek Gear, pamuk ağırlıklı karışımları tercih eder. Saf pamuk cilt konforu sağlarken, düşük oranda sentetik elyaf eklenmesi kumaşın form kaybını geciktirir. Bu denge, ürünün hem ilk gün hem de yüzüncü kullanımda aynı performansı vermesini sağlar.",
      "Sonuç olarak, bir parçanın kalitesini anlamak için etikete bakmak yeterli değildir. Kumaşın elde tutulduğunda verdiği his, dikiş sıklığı ve yıkama sonrası davranışı, gerçek kaliteyi ortaya koyar.",
    ],
  },
  {
    slug: "katmanli-giyim-sistemi-rehberi",
    title: "Katmanlı Giyim Sistemi: Değişken Koşullara Hazır Olmak",
    excerpt:
      "Tek bir parçaya güvenmek yerine katmanlı bir sistem kurmak, değişen hava koşullarında konforu sürdürmenin en etkili yoludur.",
    category: "Rehber",
    date: "2 Haziran 2026",
    readTime: "8 dk",
    image: img("ag-blog-layering", 1200, 800),
    content: [
      "Katmanlı giyim sistemi üç temel katmandan oluşur: taban katman, yalıtım katmanı ve dış katman. Her katmanın kendine özgü bir işlevi vardır ve doğru kombinasyon, tek bir kalın parçadan çok daha etkili sonuç verir.",
      "Taban katman, cildin nemini uzaklaştırmaktan sorumludur. Recon ve Utility Tişört serileri, bu görevi yerine getirmek üzere nefes alan pamuk karışımlarıyla üretilir. Terin cilt üzerinde birikmesini önlemek, soğuk havada ısı kaybını da yavaşlatır.",
      "Yalıtım katmanı, vücut sıcaklığını korumakla görevlidir. Sentinel ve Expedition Polar modelleri, düşük ağırlıklarına rağmen yüksek yalıtım değeri sunacak şekilde tasarlandı. Bu katmanın hafif olması, hareket serbestliğini korumak açısından kritiktir.",
      "Dış katman ise rüzgar ve nem gibi dış etkenlere karşı bir bariyer oluşturur. Operator ve Phantom Hoodie serileri, güçlendirilmiş kapüşon yapıları ile bu katmanın gereksinimlerini karşılar. Doğru sistemi kurduğunuzda, tek bir kalın mont yerine koşullara göre çıkarıp takabileceğiniz esnek bir çözümünüz olur.",
    ],
  },
  {
    slug: "abrek-gear-uretim-sureci",
    title: "Bir Abrek Gear Parçası Nasıl Üretilir",
    excerpt:
      "Kumaş seçiminden son kalite kontrolüne kadar her ürün, sahada test edilmeden raflara çıkmaz.",
    category: "Marka",
    date: "20 Mayıs 2026",
    readTime: "5 dk",
    image: img("ag-blog-production", 1200, 800),
    content: [
      "Her Abrek Gear parçası, tasarım aşamasında önce bir ihtiyaçtan doğar. Ekip, mevcut koleksiyondaki eksik bir işlevi belirler ve bu ihtiyacı karşılayacak teknik özellikleri tanımlar.",
      "Prototip aşamasında, seçilen kumaş ve kalıp küçük bir seri halinde üretilir. Bu prototipler, farklı vücut tiplerinde ve gerçek kullanım senaryolarında test edilir. Dikiş dayanımı, kumaş davranışı ve konfor bu aşamada değerlendirilir.",
      "Geri bildirimler doğrultusunda kalıp ve üretim detayları revize edilir. Ancak testlerden geçen tasarımlar seri üretime alınır. Türkiye'deki üretim tesislerinde, her parti kalite kontrolden geçirildikten sonra sevkiyata hazırlanır.",
      "Bu süreç, hızlı moda anlayışının tam tersidir. Abrek Gear, sezonluk koleksiyonlar yerine uzun ömürlü ve amacına uygun parçalar üretmeyi tercih eder.",
    ],
  },
];

export const faqItems = [
  {
    question: "Siparişim ne zaman kargoya verilir?",
    answer:
      "Stokta bulunan ürünler, sipariş onayından itibaren 1-3 iş günü içinde kargoya teslim edilir. Kargo takip numaranız, ürün yola çıktığında e-posta ile tarafınıza iletilir.",
  },
  {
    question: "İade ve değişim koşulları nelerdir?",
    answer:
      "Ürünlerinizi teslim aldığınız tarihten itibaren 30 gün içinde, kullanılmamış ve etiketleri çıkarılmamış olması koşuluyla iade edebilirsiniz. İade süreci için hesabınızdaki sipariş geçmişinden talep oluşturabilirsiniz.",
  },
  {
    question: "Beden tablosunu nasıl kullanmalıyım?",
    answer:
      "Her ürün sayfasında yer alan beden tablosu, göğüs, bel ve boy ölçülerine göre hazırlanmıştır. Emin olamadığınız durumlarda bir üst bedeni tercih etmenizi öneririz.",
  },
  {
    question: "Yurt dışına gönderim yapıyor musunuz?",
    answer:
      "Şu an için yalnızca yurt içi gönderim yapılmaktadır. Uluslararası gönderim seçenekleri üzerinde çalışıyoruz ve yakında duyuracağız.",
  },
  {
    question: "Ürünlerin kumaşı ne kadar dayanıklı?",
    answer:
      "Tüm ürünlerimiz, tekrarlayan yıkama ve yoğun kullanım senaryolarına göre test edilir. Kumaş ve dikiş detayları için ilgili ürün sayfasındaki teknik özellikler bölümüne göz atabilirsiniz.",
  },
  {
    question: "Toplu sipariş veya kurumsal işbirliği yapıyor musunuz?",
    answer:
      "Evet. Kurumsal ve toplu siparişler için iletişim sayfamızdan bizimle iletişime geçebilirsiniz. Ekibimiz size özel bir teklif hazırlayacaktır.",
  },
  {
    question: "Ödeme seçenekleri nelerdir?",
    answer:
      "Tüm kredi ve banka kartları ile ödeme alabiliyoruz. Ödemeleriniz 256-bit SSL sertifikası ile güvence altındadır.",
  },
];
