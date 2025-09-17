'use client'
import React, { useState } from "react";

interface CarouselProps {
  images: string[];
  altTexts?: string[];
}

export default function Carousel({ images, altTexts = [] }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <img
        src={images[current]}
        alt={altTexts[current] || `Imagem ${current + 1}`}
        className="w-full h-auto rounded-2xl border cyber-border neon-glow aspect-[9/16] object-cover"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-background rounded-full p-2"
        aria-label="Anterior"
        type="button"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-background rounded-full p-2"
        aria-label="Próxima"
        type="button"
      >
        &#8594;
      </button>
      <div className="flex justify-center mt-2 gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2 h-2 rounded-full ${idx === current ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}