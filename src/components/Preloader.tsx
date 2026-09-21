import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapConfig';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const svgLinesRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      // Target SVG path lines
      const hLines = svgLinesRef.current?.querySelectorAll('.court-line-h');
      const circle = svgLinesRef.current?.querySelectorAll('.court-circle');
      const box = svgLinesRef.current?.querySelectorAll('.court-box');

      // Set initial SVG line dashes
      if (hLines) gsap.set(hLines, { strokeDasharray: 800, strokeDashoffset: 800 });
      if (circle) gsap.set(circle, { strokeDasharray: 600, strokeDashoffset: 600 });
      if (box) gsap.set(box, { strokeDasharray: 500, strokeDashoffset: 500 });

      // 0.0s - 0.3s: Black screen hold
      tl.to({}, { duration: 0.2 })

      // 0.3s: Horizontal line appears
      .to(hLines || [], {
        strokeDashoffset: 0,
        duration: 0.35,
        ease: 'power2.out',
      })

      // 0.5s: Center circle drawn
      .to(circle || [], {
        strokeDashoffset: 0,
        duration: 0.35,
        ease: 'power2.inOut',
      }, '-=0.15')

      // 0.8s: Penalty box appear
      .to(box || [], {
        strokeDashoffset: 0,
        duration: 0.35,
        ease: 'power2.out',
      }, '-=0.1')

      // 1.2s: Logo VORTEX appears
      .fromTo(logoRef.current, {
        opacity: 0,
        scale: 0.7,
        letterSpacing: '0.6em',
      }, {
        opacity: 1,
        scale: 1,
        letterSpacing: '0.15em',
        duration: 0.45,
        ease: 'power3.out',
      }, '-=0.05')

      .fromTo(subtextRef.current, {
        opacity: 0,
        y: 15,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      }, '-=0.2')

      // 1.8s: Logo scale up burst
      .to([logoRef.current, subtextRef.current, svgLinesRef.current], {
        scale: 1.15,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      }, '+=0.2')

      // 2.0s: Screen split curtains
      .to(leftCurtainRef.current, {
        xPercent: -100,
        duration: 0.45,
        ease: 'power4.inOut',
      })
      .to(rightCurtainRef.current, {
        xPercent: 100,
        duration: 0.45,
        ease: 'power4.inOut',
      }, '<');

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-auto"
      role="progressbar"
      aria-label="Loading Vortex Futsal"
    >
      {/* Left Curtain */}
      <div
        ref={leftCurtainRef}
        className="absolute left-0 top-0 w-1/2 h-full bg-[#050505] border-r border-white/5"
      />

      {/* Right Curtain */}
      <div
        ref={rightCurtainRef}
        className="absolute right-0 top-0 w-1/2 h-full bg-[#050505] border-l border-white/5"
      />

      {/* Center Court Line Drawing and Logo Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none select-none">
        {/* Animated Futsal Pitch SVG */}
        <div className="relative w-72 h-44 sm:w-96 sm:h-56 mb-4 flex items-center justify-center">
          <svg
            ref={svgLinesRef}
            viewBox="0 0 400 240"
            className="w-full h-full text-[#B6FF00]"
            fill="none"
          >
            {/* Outer Pitch Boundary */}
            <rect
              x="10"
              y="10"
              width="380"
              height="220"
              stroke="rgba(245, 245, 242, 0.2)"
              strokeWidth="2"
              className="court-line-h"
            />
            {/* Half Court Line */}
            <line
              x1="200"
              y1="10"
              x2="200"
              y2="230"
              stroke="#B6FF00"
              strokeWidth="2.5"
              className="court-line-h"
            />
            {/* Center Circle */}
            <circle
              cx="200"
              cy="120"
              r="45"
              stroke="#B6FF00"
              strokeWidth="2.5"
              className="court-circle"
            />
            <circle cx="200" cy="120" r="4" fill="#B6FF00" />

            {/* Left Penalty Area */}
            <path
              d="M 10 70 L 65 70 A 50 50 0 0 1 65 170 L 10 170"
              stroke="#B6FF00"
              strokeWidth="2"
              className="court-box"
            />
            <circle cx="60" cy="120" r="3" fill="#B6FF00" />

            {/* Right Penalty Area */}
            <path
              d="M 390 70 L 335 70 A 50 50 0 0 0 335 170 L 390 170"
              stroke="#B6FF00"
              strokeWidth="2"
              className="court-box"
            />
            <circle cx="340" cy="120" r="3" fill="#B6FF00" />
          </svg>

          {/* Glowing Center Spot */}
          <div className="absolute w-32 h-32 rounded-full bg-[#B6FF00]/10 blur-xl pointer-events-none" />
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <h1
            ref={logoRef}
            className="font-display text-5xl sm:text-7xl tracking-widest text-[#F5F5F2] font-black"
          >
            VORTEX
          </h1>
          <p
            ref={subtextRef}
            className="font-heading text-xs sm:text-sm uppercase tracking-[0.35em] text-[#B6FF00] font-semibold mt-1"
          >
            FUTSAL ARENA
          </p>
        </div>
      </div>
    </div>
  );
}
