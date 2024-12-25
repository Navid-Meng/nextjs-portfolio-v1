import { useEffect, useRef } from 'react';

export function useFullpage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentSection = 0;
    const sections = container.querySelectorAll('section');
    let isScrolling = false;

    const scrollToSection = (index: number) => {
      if (isScrolling || index < 0 || index >= sections.length) return;
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentSection = index;
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;
      
      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeydown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return containerRef;
}