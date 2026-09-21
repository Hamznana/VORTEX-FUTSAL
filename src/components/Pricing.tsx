import { PRICING_DATA } from '../data/pricing';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (planId: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section
      id="pricing"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D0C] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B6FF00] uppercase block mb-3">
            SECTION 04 / MATCH PACKAGES
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
            CHOOSE <br />
            <span className="text-[#B6FF00]">YOUR GAME.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A8A] mt-4">
            Tarif transparan tanpa biaya tersembunyi. Bola resmi pertandingan dan fasilitas ganti siap digunakan di setiap sesi.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_DATA.map((plan) => {
            const isTeam = plan.recommended;

            return (
              <div
                key={plan.id}
                data-cursor="explore"
                className={`relative flex flex-col justify-between p-7 sm:p-9 rounded-2xl transition-all duration-500 group hover:-translate-y-2 ${
                  isTeam
                    ? 'bg-gradient-to-b from-[#163000]/80 via-[#0B0D0C] to-[#050505] border-2 border-[#B6FF00] shadow-glow-electric scale-102 z-10'
                    : 'bg-[#050505]/90 border border-white/15 hover:border-white/30 hover:shadow-2xl'
                }`}
              >
                {/* Popular Pill */}
                {isTeam && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B6FF00] text-[#050505] font-heading font-black text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wider text-[#F5F5F2] group-hover:text-[#B6FF00] transition-colors">
                      {plan.name}
                    </h3>
                    <span className="font-heading text-xs text-[#8A8A8A] uppercase font-semibold">
                      HOURLY
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-5xl sm:text-6xl font-black text-[#F5F5F2] tracking-tight">
                      {plan.priceFormatted}
                    </span>
                    <span className="font-heading text-sm text-[#8A8A8A]">
                      {plan.unit}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed mb-8 border-b border-white/10 pb-6">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-[#F5F5F2]">
                        <Check className="w-4 h-4 text-[#B6FF00] shrink-0 mt-0.5" />
                        <span className="font-sans">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Select Package CTA */}
                <a
                  href="#booking"
                  onClick={() => onSelectPlan && onSelectPlan(plan.id)}
                  data-cursor="button"
                  className={`w-full py-3.5 rounded-xl font-heading font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                    isTeam
                      ? 'bg-[#B6FF00] hover:bg-[#c2ff26] text-[#050505] shadow-glow-electric'
                      : 'bg-white/5 hover:bg-white/15 text-[#F5F5F2] border border-white/10'
                  }`}
                >
                  <span>SELECT {plan.name}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
