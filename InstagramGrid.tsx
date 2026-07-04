import Image from "next/image";
import SectionHeading from "./SectionHeading";

const posts = [
  "abrek-ig-1",
  "abrek-ig-2",
  "abrek-ig-3",
  "abrek-ig-4",
  "abrek-ig-5",
  "abrek-ig-6",
];

export default function InstagramGrid() {
  return (
    <section className="section-pad bg-obsidian">
      <div className="container-max">
        <SectionHeading
          eyebrow="@abrekgear"
          title="Sahadan Kareler"
          description="Topluluğumuzun paylaştığı gerçek kullanım anları."
        />

        <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5">
          {posts.map((seed) => (
            <a
              key={seed}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-khaki-dark"
            >
              <Image
                src={`https://picsum.photos/seed/${seed}/500/500`}
                alt="Abrek Gear kullanıcı paylaşımı"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-bone opacity-0 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
