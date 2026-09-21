import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapConfig';
import { Sparkles, SunMedium, Lock, Droplets, Coffee, Car } from 'lucide-react';

export function Arena() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline entrance
      gsap.fromTo(
        headlineRef.current,
        {
          x: -60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
          },
        }
      );

      // Image reveal: scale 0.85 -> 1, clip-path inset(15%) -> inset(0%)
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          {
            scale: 0.85,
            clipPath: 'inset(15% 15% 15% 15%)',
          },
          {
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 1,
            },
          }
        );
      }

      // Feature pills staggered entrance
      if (featuresRef.current) {
        const items = featuresRef.current.children;
        gsap.fromTo(
          items,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const amenities = [
    { name: 'PRO TURF', desc: 'FIFA Quality Pro with 12mm shock pad', icon: Sparkles },
    { name: 'LED LIGHTING', desc: '1200 Lux anti-glare overhead system', icon: SunMedium },
    { name: 'PREMIUM LOCKER', desc: 'RFID digital secure locker bays', icon: Lock },
    { name: 'SHOWER', desc: 'High-pressure heated recovery rain shower', icon: Droplets },
    { name: 'CAFÉ', desc: 'Protein shakes, espresso, and clean snacks', icon: Coffee },
    { name: 'PARKING', desc: 'Secure CCTV parking for 150+ vehicles', icon: Car },
  ];

  return (
    <section
      id="arena"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headlineRef} className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B6FF00] uppercase block mb-3">
            SECTION 01 / THE ARENA
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
            MORE THAN <br />
            <span className="text-stroke-electric hover:text-[#B6FF00] transition-colors">A COURT.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8A8A8A] mt-4 font-normal">
            "Built for players who take every match seriously."
          </p>
        </div>

        {/* Scaled & Clipped Arena Showcase Image */}
        <div
          ref={imageContainerRef}
          data-cursor="view"
          className="relative w-full aspect-[16/9] max-h-[640px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0D0C] mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80"
            alt="Vortex Indoor Futsal Arena Overview"
            className="w-full h-full object-cover object-center filter contrast-110"
          />

          {/* Stadium Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />

          {/* Floating Arena Spec Overlay Badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-[#050505]/85 backdrop-blur-md border border-white/15 p-4 sm:p-6 rounded-xl max-w-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#B6FF00]" />
              <span className="font-heading text-[11px] uppercase tracking-wider text-[#B6FF00] font-bold">
                ARENA SPECIFICATION
              </span>
            </div>
            <p className="font-display text-xl sm:text-2xl text-[#F5F5F2] font-black uppercase tracking-wide">
              FOUR FULL-SIZE TOURNAMENT PITCHES
            </p>
            <p className="font-sans text-xs text-[#8A8A8A] mt-1">
              Sistem pendingin udara industrial dan akustik peredam gema untuk pengalaman tanding intens tanpa distraksi.
            </p>
          </div>
        </div>

        {/* Amenities & Facility Grid */}
        <div
          ref={featuresRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {amenities.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.name}
                className="bg-[#0B0D0C] border border-white/10 hover:border-[#B6FF00]/60 p-5 rounded-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#B6FF00] group-hover:scale-110 group-hover:bg-[#B6FF00]/10 transition-all mb-4">
                  <IconComp className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5F5F2] group-hover:text-[#B6FF00] transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-sans text-[11px] text-[#8A8A8A] mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
