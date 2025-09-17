'use client'
import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
  altTexts?: string[];
}

export default function Carousel({ images, altTexts = [] }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }
  };

  // Preload images
  useEffect(() => {
    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [images]);

  if (isLoading) {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        <div className="w-full aspect-[9/16] bg-muted/20 rounded-2xl border cyber-border animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground">Carregando...</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full max-w-sm mx-auto"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative overflow-hidden rounded-2xl border cyber-border neon-glow">
        <img
          src={images[current]}
          alt={altTexts[current] || `Imagem ${current + 1}`}
          className="w-full h-auto aspect-[9/16] object-cover transition-opacity duration-300"
          loading="lazy"
        />
        
        {/* Navigation buttons - improved for mobile */}
        <button
          onClick={prev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-3 transition-all duration-200 backdrop-blur-sm touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Imagem anterior"
          type="button"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-3 transition-all duration-200 backdrop-blur-sm touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Próxima imagem"
          type="button"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Dots indicator - improved spacing for mobile */}
      <div className="flex justify-center mt-4 gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`block w-3 h-3 rounded-full transition-all duration-200 touch-manipulation ${
              idx === current 
                ? "bg-primary scale-110" 
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir para imagem ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}