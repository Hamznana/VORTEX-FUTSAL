import { useEffect, useRef, useState } from 'react';
import { gsap } from '../animations/gsapConfig';
import { ArrowRight, Play, Shield, Zap } from 'lucide-react';
import { attachMagneticEffect } from '../animations/magnetic';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const midgroundRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const textLine1Ref = useRef<HTMLSpanElement>(null);
  const textLine2Ref = useRef<HTMLSpanElement>(null);
  const textLine3Ref = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useRef<HTMLButtonElement>(null);

  // Live counter states
  const [stats, setStats] = useState({
    hours: 0,
    courts: 0,
    matches: 0,
  });

  useEffect(() => {
    const cleanupBtn = attachMagneticEffect(primaryBtnRef.current, 0.3);
    return cleanupBtn;
  }, []);

  // Entrance typography and parallax animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kinetic Text reveal
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        [textLine1Ref.current, textLine2Ref.current, textLine3Ref.current],
        {
          y: 110,
          opacity: 0,
          filter: 'blur(10px)',
          skewY: 6,
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          skewY: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: 'power3.out',
        }
      )
      .fromTo(
        playerRef.current,
        {
          opacity: 0,
          scale: 0.9,
          x: 40,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .fromTo(
        ballRef.current,
        {
          opacity: 0,
          scale: 0.4,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.4)',
        },
        '-=0.7'
      );

      // Numbers counter animation
      const counterTarget = { hours: 24, courts: 4, matches: 120 };
      gsap.to(counterTarget, {
        hours: 24,
        courts: 4,
        matches: 120,
        duration: 2.2,
        delay: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          setStats({
            hours: Math.round(counterTarget.hours),
            courts: Math.round(counterTarget.courts),
            matches: Math.round(counterTarget.matches),
          });
        },
      });

    }, containerRef);

    // Mouse parallax tracking
    const bg = bgLayerRef.current;
    const player = playerRef.current;
    const ball = ballRef.current;

    const bgQuickX = gsap.quickTo(bg, 'x', { duration: 0.7, ease: 'power2.out' });
    const bgQuickY = gsap.quickTo(bg, 'y', { duration: 0.7, ease: 'power2.out' });

    const playerQuickX = gsap.quickTo(player, 'x', { duration: 0.5, ease: 'power2.out' });
    const playerQuickY = gsap.quickTo(player, 'y', { duration: 0.5, ease: 'power2.out' });

    const ballQuickX = gsap.quickTo(ball, 'x', { duration: 0.35, ease: 'power2.out' });
    const ballQuickY = gsap.quickTo(ball, 'y', { duration: 0.35, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = (e.clientX - innerWidth / 2);
      const mouseY = (e.clientY - innerHeight / 2);

      bgQuickX(mouseX * -0.015);
      bgQuickY(mouseY * -0.015);

      playerQuickX(mouseX * 0.035);
      playerQuickY(mouseY * 0.035);

      ballQuickX(mouseX * 0.07);
      ballQuickY(mouseY * 0.07);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505] select-none"
    >
      {/* Stadium Light Beam Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Overhead stadium floodlights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-[#B6FF00]/10 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#163000]/30 blur-[120px]" />
      </div>

      {/* Layer 1: Background Arena Visual with Low Depth */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-luminosity scale-105 transition-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80"
          alt="Vortex Arena Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Animated Tactical Pitch Lines (SVG Overlay) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-15">
        <svg viewBox="0 0 1000 600" className="w-[120%] max-w-none h-auto text-[#B6FF00]" fill="none">
          <rect x="50" y="50" width="900" height="500" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="500" y1="50" x2="500" y2="550" stroke="currentColor" strokeWidth="2" />
          <circle cx="500" cy="300" r="120" stroke="currentColor" strokeWidth="2" />
          <circle cx="500" cy="300" r="6" fill="currentColor" />
        </svg>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        
        {/* Left Column: Big Kinetic Headline & CTAs */}
        <div ref={midgroundRef} className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0D0C] border border-white/10 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[#B6FF00] animate-ping" />
            <span className="font-heading text-[11px] uppercase tracking-[0.25em] text-[#B6FF00] font-bold">
              PREMIUM INDOOR FUTSAL ARENA
            </span>
          </div>

          {/* Huge Staggered Typography */}
          <div className="flex flex-col overflow-hidden font-display text-6xl sm:text-8xl md:text-9xl lg:text-[130px] leading-[0.88] tracking-tighter uppercase font-black text-[#F5F5F2]">
            <div className="overflow-hidden">
              <span ref={textLine1Ref} className="block text-[#F5F5F2]">
                PLAY
              </span>
            </div>
            <div className="overflow-hidden">
              <span ref={textLine2Ref} className="block text-stroke-electric hover:text-[#B6FF00] transition-colors">
                WITHOUT
              </span>
            </div>
            <div className="overflow-hidden">
              <span ref={textLine3Ref} className="block text-[#F5F5F2]">
                LIMITS<span className="text-[#FF5A1F]">.</span>
              </span>
            </div>
          </div>

          {/* Brand Manifesto Paragraph */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#8A8A8A] max-w-xl mt-6 font-normal leading-relaxed">
            Arena futsal modern berstandar internasional untuk atlet dan tim yang menolak berkompromi. Rasakan traksi pro turf kelas dunia, pencahayaan 1200 Lux bebas silau, dan atmosfer laga kompetitif sesungguhnya.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              ref={primaryBtnRef}
              onClick={onOpenBooking}
              data-cursor="button"
              className="inline-flex items-center gap-3 bg-[#B6FF00] hover:bg-[#c4ff2b] text-[#050505] font-heading font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-glow-electric transition-transform active:scale-95"
            >
              <span>BOOK YOUR COURT</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href="#arena"
              data-cursor="explore"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-md bg-[#0B0D0C] hover:bg-white/5 border border-white/15 text-[#F5F5F2] font-heading font-bold text-sm uppercase tracking-wider transition-colors"
            >
              <span>EXPLORE ARENA</span>
              <Play className="w-3.5 h-3.5 fill-current text-[#8A8A8A]" />
            </a>
          </div>

          {/* Micro badges below CTA */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-[#8A8A8A]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#B6FF00]" />
              <span className="font-heading">FIFA QUALITY PRO TURF</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FF5A1F]" />
              <span className="font-heading">1200 LUX TOURNAMENT LIGHTS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Player Foreground Layer + Interactive Ball */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[500px]">
          
          {/* Radial Aura Behind Player */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#163000] via-[#B6FF00]/20 to-[#FF5A1F]/20 blur-3xl pointer-events-none" />

          {/* Layer 3: Dynamic Futsal Player Silhouette/Action Render */}
          <div
            ref={playerRef}
            className="relative z-10 w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0B0D0C] to-[#050505] shadow-2xl group"
            data-cursor="player"
          >
            <img
              src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=900&q=80"
              alt="Vortex Futsal Striker"
              className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
            <div className="absolute top-4 left-4 font-heading text-[11px] font-bold uppercase tracking-widest text-[#B6FF00] bg-[#050505]/80 px-2.5 py-1 rounded backdrop-blur-md border border-[#B6FF00]/30">
              #07 SPRINT TRANSITION
            </div>
            
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display text-2xl sm:text-3xl text-[#F5F5F2] tracking-wider font-black uppercase leading-none">
                BUILT FOR SPEED.
              </p>
              <p className="font-heading text-xs text-[#B6FF00] tracking-wider uppercase mt-1">
                Zero Friction Shock Pad Flooring
              </p>
            </div>
          </div>

          {/* Interactive Floating Futsal Ball Object */}
          <div
            ref={ballRef}
            data-cursor="view"
            className="absolute -bottom-6 -left-6 sm:bottom-4 sm:-left-8 z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full cursor-pointer hover:rotate-45 transition-transform duration-500"
          >
            <div className="relative w-full h-full rounded-full bg-[#0B0D0C] border-2 border-[#B6FF00] p-1.5 shadow-[0_0_30px_rgba(182,255,0,0.4)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=400&q=80"
                alt="Match Futsal Ball"
                className="w-full h-full object-cover rounded-full filter contrast-125"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#050505]/60 via-transparent to-[#B6FF00]/20 pointer-events-none" />
            </div>
            <div className="absolute -top-2 -right-2 bg-[#FF5A1F] text-white font-heading font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg">
              PRO BALL
            </div>
          </div>

        </div>

      </div>

      {/* Hero Bottom Stats Counter Bar */}
      <div
        ref={statsRef}
        className="relative z-10 max-w-7xl mx-auto w-full mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8"
      >
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl sm:text-6xl font-black text-[#F5F5F2] tracking-tight">
              {stats.hours}
            </span>
            <span className="font-display text-2xl sm:text-4xl text-[#B6FF00]">/7</span>
          </div>
          <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold mt-0.5">
            OPEN NON-STOP
          </span>
        </div>

        <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-8">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl sm:text-6xl font-black text-[#F5F5F2] tracking-tight">
              {stats.courts}
            </span>
            <span className="font-display text-2xl sm:text-4xl text-[#B6FF00]">X</span>
          </div>
          <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold mt-0.5">
            PRO COURTS
          </span>
        </div>

        <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-8">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl sm:text-6xl font-black text-[#F5F5F2] tracking-tight">
              {stats.matches}+
            </span>
          </div>
          <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#8A8A8A] font-semibold mt-0.5">
            MATCHES / WEEK
          </span>
        </div>
      </div>

    </section>
  );
}
