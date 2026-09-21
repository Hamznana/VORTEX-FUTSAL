import { PLAYERS_DATA } from '../data/players';
import { Zap, Target } from 'lucide-react';

export function Players() {
  return (
    <section
      id="players"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B6FF00] uppercase block mb-3">
              SECTION 07 / ROSTER SHOWCASE
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
              MEET THE <br />
              <span className="text-[#B6FF00]">PLAYERS.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#8A8A8A] max-w-md">
            Pemain berprestasi yang mewakili DNA Vortex Futsal: kelincahan tanpa kompromi, visi permainan tajam, dan determinasi tinggi.
          </p>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLAYERS_DATA.map((player) => (
            <div
              key={player.id}
              data-cursor="player"
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0B0D0C] border border-white/15 group transition-all duration-500 hover:-translate-y-2 hover:border-[#B6FF00] hover:shadow-glow-electric flex flex-col justify-end p-6 select-none"
            >
              {/* Massive Backdrop Jersey Number that grows on hover */}
              <span className="absolute top-2 right-2 font-display text-7xl sm:text-8xl font-black text-white/5 group-hover:text-[#B6FF00]/15 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                {player.number}
              </span>

              {/* Player Portrait Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient Shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
              </div>

              {/* Content Box Overlay */}
              <div className="relative z-10">
                {/* Position & Role Badges */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-heading text-[10px] font-extrabold uppercase tracking-widest text-[#050505] bg-[#B6FF00] px-2 py-0.5 rounded">
                    {player.position}
                  </span>
                  <span className="font-heading text-[10px] uppercase tracking-wider text-[#8A8A8A]">
                    {player.number}
                  </span>
                </div>

                {/* Player Name */}
                <h3 className="font-display text-4xl sm:text-5xl font-black text-[#F5F5F2] uppercase tracking-wide leading-none group-hover:text-[#B6FF00] group-hover:translate-x-1 transition-all duration-300">
                  {player.name}
                </h3>

                <p className="font-sans text-xs text-[#8A8A8A] mt-1 font-medium group-hover:text-[#F5F5F2] transition-colors">
                  {player.specialty}
                </p>

                {/* Skill Ratings Bar */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10 text-[10px] font-heading uppercase text-[#8A8A8A]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#B6FF00]" /> SPEED
                    </span>
                    <span className="font-bold text-[#F5F5F2]">{player.stats.speed}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3 text-[#FF5A1F]" /> TECH
                    </span>
                    <span className="font-bold text-[#F5F5F2]">{player.stats.technique}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
