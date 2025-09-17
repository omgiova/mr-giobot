'use client'
import React, { useState, useEffect, useRef, useCallback } from "react"
import { useIsMobile } from "./use-mobile"

interface CarouselProps {
  images: string[];
  altTexts?: string[];
}

export default function Carousel({ images, altTexts = [] }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  // Ensure we have valid images
  const validImages = images.filter(Boolean);
  if (validImages.length === 0) {
    return (
      <div className="w-full max-w-sm mx-auto px-4">
        <div className="w-full aspect-[9/16] bg-muted/20 rounded-2xl border cyber-border flex items-center justify-center">
          <div className="text-center text-muted-foreground text-sm">Nenhuma imagem disponível</div>
        </div>
      </div>
    );
  }



  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % validImages.length);
  }, [validImages.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Handle touch events for mobile swipe - improved sensitivity
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
    const isLeftSwipe = distance > 30; // Reduced threshold for better responsiveness
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-advance carousel on mobile with better timing
  useEffect(() => {
    if (isMobile && validImages.length > 1) {
      intervalRef.current = setInterval(() => {
        next();
      }, 5000); // Increased to 5 seconds for better UX
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMobile, next, validImages.length]);

  // Pause auto-advance on user interaction
  const pauseAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoAdvance = () => {
    if (isMobile && validImages.length > 1) {
      intervalRef.current = setInterval(() => {
        next();
      }, 5000);
    }
  };

  // Preload images - simplified
  useEffect(() => {
    if (!validImages.length) {
      setIsLoading(false);
      return;
    }

    // Set a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    let loadedCount = 0;
    const totalImages = validImages.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= totalImages) {
        clearTimeout(timeout);
        setIsLoading(false);
      }
    };

    validImages.forEach((src) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        checkAllLoaded(); // Count errors as loaded to prevent hanging
      };
      img.src = src;
    });

    return () => clearTimeout(timeout);
  }, [validImages]);

  if (isLoading) {
    return (
      <div className="w-full max-w-sm mx-auto px-4">
        <div className="w-full aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border-2 border-primary/50 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <div className="text-sm text-primary font-semibold">Carregando carrossel...</div>
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-primary/50 rounded-full animate-pulse"></div>
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
            src={validImages[current]}
            alt={altTexts[current] || `Demonstração ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            loading="eager"
            decoding="async"
            onError={(e) => {
              console.error('Image failed to load:', validImages[current]);
              setHasError(true);
            }}
          />
          
          {/* Gradient overlay for better button visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
        </div>

        {/* Navigation buttons - optimized for mobile */}
        <button
          onClick={() => {
            prev();
            pauseAutoAdvance();
            setTimeout(resumeAutoAdvance, 3000);
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 hover:bg-black/90 active:bg-black/95 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/30 touch-manipulation active:scale-90 z-10"
          aria-label="Imagem anterior"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => {
            next();
            pauseAutoAdvance();
            setTimeout(resumeAutoAdvance, 3000);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 hover:bg-black/90 active:bg-black/95 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/30 touch-manipulation active:scale-90 z-10"
          aria-label="Próxima imagem"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image counter overlay */}
        <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-2 rounded-full backdrop-blur-sm border border-white/20">
          {current + 1} / {validImages.length}
        </div>
      </div>
      
      {/* Dots indicator - mobile optimized */}
      <div className="flex justify-center mt-6 gap-4">
        {validImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              goToSlide(idx);
              pauseAutoAdvance();
              setTimeout(resumeAutoAdvance, 3000);
            }}
            className={`transition-all duration-300 touch-manipulation rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${
              idx === current 
                ? "w-10 h-4 bg-primary" 
                : "w-4 h-4 bg-muted hover:bg-muted-foreground/60 active:scale-110"
            }`}
            aria-label={`Ver imagem ${idx + 1}`}
          />
        ))}
      </div>

      {/* Swipe indicator for mobile */}
      {isMobile && (
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l3 3 7-7" />
            </svg>
            Deslize para navegar
          </p>
        </div>
      )}
    </div>
  );
}