import SectionHeading from "./SectionHeading";

const reasons = [
  {
    code: "01",
    title: "Malzeme Standardı",
    text: "Her kumaş, seri üretime geçmeden önce gramaj, dayanıklılık ve nefes alabilirlik testlerinden geçer.",
  },
  {
    code: "02",
    title: "Kalıp Hassasiyeti",
    text: "Kalıplarımız gerçek kullanım senaryolarında test edilir; hareket serbestliği tasarımın merkezindedir.",
  },
  {
    code: "03",
    title: "Sınırlı Üretim",
    text: "Sezonluk hızlı moda yerine, uzun ömürlü olacak şekilde planlanmış sınırlı sayıda parti üretiyoruz.",
  },
  {
    code: "04",
    title: "Şeffaf Teknik Bilgi",
    text: "Her ürün sayfasında kumaş kompozisyonu, gramaj ve bakım talimatları net biçimde paylaşılır.",
  },
];

export default function WhySection() {
  return (
    <section className="section-pad bg-obsidian">
      <div className="container-max">
        <SectionHeading
          eyebrow="Neden Abrek Gear"
          title="Detaylar Fark Yaratır"
          description="Abrek Gear'ı bir arada tutan şey söylemler değil, üretim disiplinidir."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {reasons.map((reason) => (
            <div
              key={reason.code}
              className="bg-obsidian p-8 flex flex-col gap-4 hover:bg-obsidian-lighter transition-colors duration-300"
            >
              <span className="font-mono text-gold-dark text-sm">
                {reason.code}
              </span>
              <h3 className="font-display uppercase text-lg tracking-wide">
                {reason.title}
              </h3>
              <p className="text-sand/65 text-sm leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
