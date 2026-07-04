"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-t border-line last:border-b">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-display uppercase text-base md:text-lg tracking-wide">
                {item.question}
              </span>
              <span
                className={`font-mono text-xl text-gold-light transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sand/70 text-sm leading-relaxed pb-6 max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
