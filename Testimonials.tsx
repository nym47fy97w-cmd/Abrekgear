import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-gold-light">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-obsidian-light">
      <div className="container-max">
        <SectionHeading
          eyebrow="Değerlendirmeler"
          title="Sahadan Geri Bildirimler"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-line p-6 flex flex-col gap-4 hover:border-gold/40 transition-colors duration-300"
            >
              <Stars rating={t.rating} />
              <p className="text-sand/80 text-sm leading-relaxed flex-1">
                “{t.quote}”
              </p>
              <div className="hairline pt-4">
                <p className="font-display uppercase text-sm tracking-wide">
                  {t.name}
                </p>
                <p className="text-xs text-sand/50 font-mono mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
