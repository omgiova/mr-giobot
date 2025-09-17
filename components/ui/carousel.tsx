'use client'
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CarouselProps {
  images: string[];
  altTexts?: string[];
}

export default function Carousel({ images, altTexts = [] }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Handle touch events for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        next();
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMobile, next]);

  // Pause auto-advance on user interaction
  const pauseAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoAdvance = () => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        next();
      }, 4000);
    }
  };

  // Preload images
  useEffect(() => {
    if (!images.length) return;

    let loadedCount = 0;
    const imagePromises = images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setIsLoading(false);
          }
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setIsLoading(false);
          }
          resolve();
        };
        img.src = src;
      });
    });

    Promise.allSettled(imagePromises);
  }, [images]);

  if (isLoading) {
    return (
      <div className="w-full max-w-sm mx-auto px-4">
        <div className="w-full aspect-[9/16] bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border cyber-border animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <div className="text-sm text-muted-foreground">Carregando imagens...</div>
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-muted/50 rounded-full animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto px-4 sm:px-6">
      <div 
        className="relative bg-black/20 rounded-2xl overflow-hidden cyber-border neon-glow mobile-carousel"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={pauseAutoAdvance}
        onMouseLeave={resumeAutoAdvance}
      >
        {/* Main image */}
        <div className="relative w-full aspect-[9/16]">
          <img
            src={images[current]}
            alt={altTexts[current] || `Demonstração ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            loading="eager"
            decoding="async"
          />
          
          {/* Gradient overlay for better button visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
        </div>

        {/* Navigation buttons - optimized for mobile */}
        <button
          onClick={() => {
            prev();
            pauseAutoAdvance();
            setTimeout(resumeAutoAdvance, 2000);
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 touch-manipulation active:scale-95 mobile-touch-target"
          aria-label="Imagem anterior"
          type="button"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => {
            next();
            pauseAutoAdvance();
            setTimeout(resumeAutoAdvance, 2000);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 touch-manipulation active:scale-95 mobile-touch-target"
          aria-label="Próxima imagem"
          type="button"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image counter overlay */}
        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          {current + 1} / {images.length}
        </div>
      </div>
      
      {/* Dots indicator - mobile optimized */}
      <div className="flex justify-center mt-6 gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              goToSlide(idx);
              pauseAutoAdvance();
              setTimeout(resumeAutoAdvance, 2000);
            }}
            className={`transition-all duration-300 touch-manipulation rounded-full ${
              idx === current 
                ? "w-8 h-3 bg-primary" 
                : "w-3 h-3 bg-muted hover:bg-muted-foreground/60 active:scale-110"
            }`}
            aria-label={`Ver imagem ${idx + 1}`}
          />
        ))}
      </div>

      {/* Swipe indicator for mobile */}
      {isMobile && (
        <div className="text-center mt-3">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4-4m-4 4v12" />
            </svg>
            Deslize para navegar
          </p>
        </div>
      )}
    </div>
  );
}