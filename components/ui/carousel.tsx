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

  // Auto-advance carousel on mobile - DISABLED per user preference
  // useEffect(() => {
  //   if (isMobile && validImages.length > 1) {
  //     intervalRef.current = setInterval(() => {
  //       next();
  //     }, 5000);
  //   }

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [isMobile, next, validImages.length]);

  // Pause auto-advance on user interaction - DISABLED
  const pauseAutoAdvance = () => {
    // Auto-advance disabled per user preference
  };

  const resumeAutoAdvance = () => {
    // Auto-advance disabled per user preference
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
    <div className="w-full mx-auto px-2">
      {/* Carousel container with external navigation - full width */}
      <div className="flex items-center gap-3">
        {/* Left navigation button - outside image area */}
        <button
          onClick={() => {
            prev();
          }}
          className="flex-shrink-0 w-12 h-12 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center transition-all duration-200 cyber-border shadow-lg touch-manipulation active:scale-90 z-10"
          aria-label="Imagem anterior"
          type="button"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image container without internal navigation - expanded */}
        <div 
          className="relative bg-black/20 rounded-2xl overflow-hidden cyber-border neon-glow flex-1"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
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
          </div>
        </div>

        {/* Right navigation button - outside image area */}
        <button
          onClick={() => {
            next();
          }}
          className="flex-shrink-0 w-12 h-12 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center transition-all duration-200 cyber-border shadow-lg touch-manipulation active:scale-90 z-10"
          aria-label="Próxima imagem"
          type="button"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}