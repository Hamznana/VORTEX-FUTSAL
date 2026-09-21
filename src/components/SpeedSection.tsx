import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapConfig';

export function SpeedSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const word3Ref = useRef<HTMLSpanElement>(null);
  const velocityRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const ball = ballRef.current;
      const trail = trailRef.current;
      if (!container || !ball || !trail) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.8,
        },
      });

      // Ball moves from left to right along curved trajectory
      tl.fromTo(
        ball,
        {
          x: -120,
          y: 40,
          rotation: 0,
        },
        {
          x: window.innerWidth * 0.75,
          y: -30,
          rotation: 720,
          ease: 'power1.inOut',
        }
      )
      // Trail stretches with ball
      .fromTo(
        trail,
        {
          width: '0%',
          opacity: 0,
        },
        {
          width: '80%',
          opacity: 1,
          ease: 'power1.inOut',
        },
        '<'
      )
      // Words reveal sequentially
      .fromTo(
        word1Ref.current,
        { opacity: 0.2, scale: 0.9, color: '#8A8A8A' },
        { opacity: 1, scale: 1.1, color: '#B6FF00', duration: 0.3 },
        0.1
      )
      .fromTo(
        word2Ref.current,
        { opacity: 0.2, scale: 0.9, color: '#8A8A8A' },
        { opacity: 1, scale: 1.1, color: '#F5F5F2', duration: 0.3 },
        0.45
      )
      .fromTo(
        word3Ref.current,
        { opacity: 0.2, scale: 0.9, color: '#8A8A8A' },
        { opacity: 1, scale: 1.1, color: '#FF5A1F', duration: 0.3 },
        0.8
      );

      // Speed meter counter
      const speedObj = { val: 0 };
      tl.to(
        speedObj,
        {
          val: 124,
          onUpdate: () => {
            if (velocityRef.current) {
              velocityRef.current.textContent = `${Math.round(speedObj.val)} KM/H`;
            }
          },
        },
        0
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] flex flex-col justify-center items-center overflow-hidden select-none border-t border-white/10"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-[#163000]/20 via-[#050505] to-[#050505] pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10">
        <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-[#B6FF00] bg-[#0B0D0C] border border-white/10 px-4 py-1.5 rounded-full">
          EXPERIMENT / THE SPEED OF THE GAME
        </span>
      </div>

      {/* Main Kinetic Typography Row */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-14 md:gap-20 font-display text-5xl sm:text-7xl md:text-9xl uppercase font-black tracking-tight text-center my-auto">
        <span ref={word1Ref} className="transition-all duration-300">
          SPEED
        </span>
        <span className="text-white/20">•</span>
        <span ref={word2Ref} className="transition-all duration-300">
          CONTROL
        </span>
        <span className="text-white/20">•</span>
        <span ref={word3Ref} className="transition-all duration-300">
          PASSION
        </span>
      </div>

      {/* Ball Movement Track & Trail */}
      <div
        ref={trackRef}
        className="absolute bottom-28 sm:bottom-32 left-8 right-8 max-w-6xl mx-auto h-24 flex items-center pointer-events-none"
      >
        {/* Luminous Motion Trail */}
        <div
          ref={trailRef}
          className="h-1 bg-gradient-to-r from-transparent via-[#B6FF00]/40 to-[#B6FF00] shadow-[0_0_15px_#B6FF00] rounded-full"
        />

        {/* Moving Futsal Ball */}
        <div
          ref={ballRef}
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0B0D0C] border-2 border-[#B6FF00] shadow-[0_0_25px_rgba(182,255,0,0.6)] flex items-center justify-center -ml-8"
        >
          <img
            src="https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=200&q=80"
            alt="Moving Futsal Ball"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#B6FF00] text-[#050505] font-heading font-black text-[9px] px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">
            PRO GRIP 4
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Display */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 text-xs font-heading font-bold text-[#8A8A8A] tracking-wider uppercase">
        <div className="flex items-center gap-2">
          <span>SHOT VELOCITY:</span>
          <span ref={velocityRef} className="text-[#B6FF00] font-display text-lg">
            0 KM/H
          </span>
        </div>
        <div className="hidden sm:block text-white/20">•</div>
        <div className="hidden sm:flex items-center gap-2">
          <span>SURFACE TRACTION:</span>
          <span className="text-[#F5F5F2]">0.92 COEFF</span>
        </div>
      </div>

    </section>
  );
}
