import { useEffect, useState, useRef } from 'react';
import { gsap } from '../animations/gsapConfig';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursorX = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power3' });
    const moveCursorY = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      moveCursorX(e.clientX);
      moveCursorY(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const type = interactive.getAttribute('data-cursor');
        if (type === 'button') {
          setIsHovered(true);
          setCursorText('');
        } else if (type === 'view') {
          setIsHovered(true);
          setCursorText('VIEW');
        } else if (type === 'player') {
          setIsHovered(true);
          setCursorText('PLAYER');
        } else if (type === 'explore') {
          setIsHovered(true);
          setCursorText('EXPLORE');
        }
      } else {
        const isClickable = target.closest('button, a, input, select, textarea');
        if (isClickable) {
          setIsHovered(true);
          setCursorText('');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ease-out ${
        isHovered
          ? cursorText
            ? 'w-16 h-16 bg-[#B6FF00] text-[#050505] rounded-full shadow-glow-electric scale-100'
            : 'w-12 h-12 border-2 border-[#B6FF00] bg-[#B6FF00]/10 rounded-full scale-110'
          : 'w-3 h-3 bg-[#F5F5F2] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]'
      }`}
    >
      {cursorText && (
        <span
          ref={cursorLabelRef}
          className="font-heading text-[10px] font-black tracking-wider uppercase select-none text-center"
        >
          {cursorText}
        </span>
      )}
    </div>
  );
}
