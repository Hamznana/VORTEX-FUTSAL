import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapConfig';
import { Radio, Activity, Target } from 'lucide-react';

export function MatchExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const scoreboardRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scoreboard enters dynamically from the right
      gsap.fromTo(
        scoreboardRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scoreboardRef.current,
            start: 'top 80%',
          },
        }
      );

      // Lower third broadcast ticker slide up
      gsap.fromTo(
        tickerRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: scoreboardRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D0C] border-t border-white/10 overflow-hidden select-none"
    >
      {/* Background Stadium Broadcast Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1920&q=80"
          alt="Live Match Broadcast Arena"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/85 to-[#0B0D0C]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B6FF00] uppercase block mb-3">
              SECTION 06 / MATCH EXPERIENCE
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
              LIVE MATCH <br />
              <span className="text-[#B6FF00]">ATMOSPHERE.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#8A8A8A] max-w-md">
            Teknologi sensor papan skor digital dan live game broadcast layaknya pertandingan profesional liga dunia.
          </p>
        </div>

        {/* Television Sports Broadcast Scoreboard Container */}
        <div
          ref={scoreboardRef}
          className="bg-gradient-to-r from-[#050505] via-[#0B0D0C] to-[#050505] border-2 border-white/15 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Broadcast Header Ribbon */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-600/90 text-white font-heading font-black text-[11px] uppercase tracking-wider">
                <Radio className="w-3 h-3 animate-pulse" />
                LIVE
              </span>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#F5F5F2]">
                VORTEX ARENA FEED / CAM 01
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B6FF00] animate-ping" />
              <span className="font-mono text-xs font-bold text-[#B6FF00]">
                4K 60FPS AI-TRACKED
              </span>
            </div>
          </div>

          {/* Main Scoreboard HUD Grid */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
            
            {/* Team 1: VORTEX FC */}
            <div className="md:col-span-4 flex items-center justify-between md:justify-start gap-4 sm:gap-6 bg-[#050505] p-5 sm:p-6 rounded-2xl border border-white/10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#163000] border-2 border-[#B6FF00] flex items-center justify-center font-display text-3xl font-black text-[#B6FF00] shadow-glow-electric shrink-0">
                VFC
              </div>
              <div className="text-left">
                <span className="font-heading text-[11px] uppercase tracking-widest text-[#B6FF00] font-bold block">
                  HOME TEAM
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F5F5F2] uppercase tracking-wide">
                  VORTEX FC
                </h3>
                <span className="font-sans text-xs text-[#8A8A8A]">
                  4 Fouls • 1 Timeout Left
                </span>
              </div>
            </div>

            {/* Score Centerpiece: 4 VS 2 */}
            <div className="md:col-span-3 flex flex-col items-center justify-center bg-[#050505]/90 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-[#B6FF00] leading-none">
                  4
                </span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-white/30">
                  -
                </span>
                <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-[#F5F5F2] leading-none">
                  2
                </span>
              </div>

              {/* Match Clock HUD */}
              <div className="mt-4 flex items-center gap-2 bg-[#0B0D0C] px-3.5 py-1 rounded-full border border-white/10">
                <Activity className="w-3.5 h-3.5 text-[#FF5A1F] animate-pulse" />
                <span className="font-mono text-sm font-black text-[#F5F5F2]">
                  01:32
                </span>
                <span className="text-white/20">•</span>
                <span className="font-heading text-[10px] font-bold text-[#FF5A1F] uppercase tracking-wider">
                  2ND HALF
                </span>
              </div>
            </div>

            {/* Team 2: BLACK TIGERS */}
            <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-4 sm:gap-6 bg-[#050505] p-5 sm:p-6 rounded-2xl border border-white/10">
              <div className="text-right order-2 md:order-1">
                <span className="font-heading text-[11px] uppercase tracking-widest text-[#8A8A8A] font-bold block">
                  AWAY TEAM
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F5F5F2] uppercase tracking-wide">
                  BLACK TIGERS
                </h3>
                <span className="font-sans text-xs text-[#8A8A8A]">
                  5 Fouls (Penalty Warning)
                </span>
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1F2220] border-2 border-white/20 flex items-center justify-center font-display text-3xl font-black text-[#F5F5F2] shrink-0 order-1 md:order-2">
                BT
              </div>
            </div>

          </div>

          {/* Broadcast Telemetry Lower-Third Bar */}
          <div
            ref={tickerRef}
            className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-heading font-semibold text-[#8A8A8A]"
          >
            <div className="flex items-center gap-3 bg-[#050505] p-3 rounded-xl border border-white/5">
              <Target className="w-4 h-4 text-[#B6FF00]" />
              <div>
                <span className="text-[#8A8A8A] block text-[10px]">BALL POSSESSION</span>
                <span className="font-bold text-[#F5F5F2]">56% VORTEX / 44% TIGERS</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#050505] p-3 rounded-xl border border-white/5">
              <Activity className="w-4 h-4 text-[#FF5A1F]" />
              <div>
                <span className="text-[#8A8A8A] block text-[10px]">TOTAL SHOTS ON TARGET</span>
                <span className="font-bold text-[#F5F5F2]">14 SHOTS (8 SAVES)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#050505] p-3 rounded-xl border border-white/5">
              <Radio className="w-4 h-4 text-[#B6FF00]" />
              <div>
                <span className="text-[#8A8A8A] block text-[10px]">LAST SCORER</span>
                <span className="font-bold text-[#B6FF00]">#07 RAKA (38' POWER SHOT)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
