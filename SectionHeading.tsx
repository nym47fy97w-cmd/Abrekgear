export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-4 mb-12 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="w-8 h-[1.5px] bg-gold" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display uppercase text-3xl md:text-4xl lg:text-[42px] tracking-wide leading-[1.1] max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-sand/70 text-base max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
