import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapConfig';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { attachMagneticEffect } from '../animations/magnetic';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  const containerRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stadium lights turn on gradually upon scrolling into view
      gsap.fromTo(
        spotlightRef.current,
        {
          opacity: 0.05,
          scale: 0.8,
        },
        {
          opacity: 0.9,
          scale: 1.1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        }
      );
    }, containerRef);

    const cleanupMagnetic = attachMagneticEffect(buttonRef.current, 0.4);

    return () => {
      ctx.revert();
      cleanupMagnetic();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] w-full flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden select-none border-t border-white/10"
    >
      {/* Stadium Floodlights Gradual Activation Effect */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial-gradient from-[#B6FF00]/15 via-[#163000]/10 to-transparent blur-[120px] pointer-events-none transition-all duration-1000"
      />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[#FF5A1F]/10 blur-[130px] pointer-events-none" />

      {/* Stadium Background Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80"
          alt="Dark Stadium Arena"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0D0C] border border-[#B6FF00]/40 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#B6FF00] animate-ping" />
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#B6FF00] font-bold">
            TIME TO PROVE IT
          </span>
        </div>

        {/* Super Massive Headline */}
        <h2 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[140px] leading-[0.85] tracking-tighter uppercase font-black text-[#F5F5F2] mb-6">
          READY <br />
          <span className="text-[#B6FF00] hover:text-[#c4ff2b] transition-colors">
            TO PLAY?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="font-sans text-base sm:text-xl text-[#8A8A8A] max-w-xl font-normal mb-10">
          "Your next match starts here."
        </p>

        {/* Expanding Magnetic CTA Button */}
        <button
          ref={buttonRef}
          onClick={onOpenBooking}
          data-cursor="button"
          className="group inline-flex items-center gap-4 bg-[#B6FF00] hover:bg-[#c2ff26] text-[#050505] font-heading font-black text-base sm:text-lg uppercase tracking-widest px-10 sm:px-14 py-5 sm:py-6 rounded-2xl shadow-glow-electric transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <span>BOOK YOUR COURT</span>
          <ArrowRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1.5 transition-transform" />
        </button>

        {/* Micro guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs font-heading font-semibold text-[#8A8A8A]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#B6FF00]" />
            <span>INSTANT AUTOMATIC BOOKING</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FF5A1F]" />
            <span>NO REGISTRATION FEE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
