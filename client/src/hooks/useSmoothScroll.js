import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * useSmoothScroll - Initializes Lenis smooth scrolling
 * Call this hook in your main App component
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.5,
      smoothTouch: false,
      touchMultiplier: 2.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
