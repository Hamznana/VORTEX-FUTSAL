import { useState } from 'react';
import { COURTS_DATA } from '../data/courts';
import { Maximize2, ShieldCheck, Video, Users, CheckCircle2 } from 'lucide-react';

export function CourtExperience() {
  const [activeCourtId, setActiveCourtId] = useState<string>('court-01');
  const activeCourt = COURTS_DATA.find((c) => c.id === activeCourtId) || COURTS_DATA[0];

  return (
    <section
      id="courts"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D0C] border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B6FF00] uppercase block mb-3">
              SECTION 02 / COURT EXPERIENCE
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
              SELECT YOUR <br />
              <span className="text-[#B6FF00]">BATTLEGROUND.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#8A8A8A] max-w-md">
            Setiap lapangan dirancang dengan spesifikasi berbeda sesuai gaya bermain tim: turnamen, kecepatan cage, maupun taktik lantai vinyl pro.
          </p>
        </div>

        {/* Court Tabs Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {COURTS_DATA.map((court) => {
            const isActive = court.id === activeCourtId;
            return (
              <button
                key={court.id}
                onClick={() => setActiveCourtId(court.id)}
                data-cursor="explore"
                className={`flex flex-col p-4 sm:p-5 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#163000]/60 border-[#B6FF00] shadow-glow-electric text-[#F5F5F2]'
                    : 'bg-[#050505] border-white/10 hover:border-white/20 text-[#8A8A8A] hover:text-[#F5F5F2]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`font-display text-2xl font-bold tracking-wider ${isActive ? 'text-[#B6FF00]' : 'text-inherit'}`}>
                    {court.code}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B6FF00] animate-pulse" />
                  )}
                </div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider truncate">
                  {court.name}
                </span>
                <span className="font-sans text-[11px] text-[#8A8A8A] mt-0.5 truncate">
                  {court.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Tactical Court Display Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual & Interactive SVG Court Layout */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Main Court Image with Smooth Fade */}
            <div
              key={activeCourt.id}
              data-cursor="view"
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-[#050505] shadow-2xl group animate-in fade-in zoom-in-95 duration-500"
            >
              <img
                src={activeCourt.image}
                alt={activeCourt.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

              {/* Court Badge Overlay */}
              <div className="absolute top-4 left-4 bg-[#050505]/80 backdrop-blur-md border border-[#B6FF00]/40 px-3 py-1.5 rounded-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B6FF00]" />
                <span className="font-heading text-xs font-bold text-[#F5F5F2] uppercase tracking-wider">
                  LIVE ANGLE / {activeCourt.code}
                </span>
              </div>

              {/* Quick Specs Badges Bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-xs font-heading font-semibold text-[#F5F5F2] flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#B6FF00]" />
                  <span>{activeCourt.size}</span>
                </div>
                <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-xs font-heading font-semibold text-[#F5F5F2] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B6FF00]" />
                  <span>{activeCourt.surface}</span>
                </div>
              </div>
            </div>

            {/* Interactive Animated Court Blueprint Diagram */}
            <div className="relative w-full p-4 sm:p-6 bg-[#050505] border border-white/10 rounded-xl overflow-hidden group hover:border-[#B6FF00]/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#B6FF00]">
                  TACTICAL PITCH BLUEPRINT
                </span>
                <span className="font-sans text-[11px] text-[#8A8A8A]">
                  HOVER TO ILLUMINATE ZONES
                </span>
              </div>

              {/* Glowing SVG Diagram */}
              <div className="w-full aspect-[2/1] relative flex items-center justify-center">
                <svg
                  viewBox="0 0 400 200"
                  className="w-full h-full text-[#B6FF00] stroke-current"
                  fill="none"
                >
                  {/* Outer Pitch Border */}
                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="180"
                    strokeWidth="1.5"
                    className="opacity-40 group-hover:opacity-100 group-hover:stroke-[#B6FF00] transition-all"
                  />
                  {/* Half Court Line */}
                  <line
                    x1="200"
                    y1="10"
                    x2="200"
                    y2="190"
                    strokeWidth="1.5"
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Center Circle */}
                  <circle
                    cx="200"
                    cy="100"
                    r="35"
                    strokeWidth="1.5"
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <circle cx="200" cy="100" r="3" fill="#B6FF00" />

                  {/* Left Penalty Area */}
                  <path
                    d="M 10 50 L 55 50 A 50 50 0 0 1 55 150 L 10 150"
                    strokeWidth="1.5"
                    className="opacity-40 group-hover:opacity-90 group-hover:stroke-[#FF5A1F] transition-all"
                  />
                  <circle cx="50" cy="100" r="2.5" fill="#FF5A1F" />

                  {/* Right Penalty Area */}
                  <path
                    d="M 390 50 L 345 50 A 50 50 0 0 0 345 150 L 390 150"
                    strokeWidth="1.5"
                    className="opacity-40 group-hover:opacity-90 group-hover:stroke-[#FF5A1F] transition-all"
                  />
                  <circle cx="350" cy="100" r="2.5" fill="#FF5A1F" />
                </svg>
              </div>
            </div>

          </div>

          {/* Right Column: Court Technical Specifications Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#050505] border border-white/15">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading text-xs font-black text-[#B6FF00] tracking-widest uppercase">
                  ACTIVE COURT
                </span>
                <span className="text-white/20">•</span>
                <span className="font-sans text-xs text-[#8A8A8A]">
                  {activeCourt.code}
                </span>
              </div>

              <h3 className="font-display text-4xl sm:text-5xl font-black text-[#F5F5F2] uppercase tracking-wide leading-none mb-4">
                {activeCourt.name}
              </h3>

              <p className="font-sans text-sm text-[#8A8A8A] leading-relaxed mb-6">
                {activeCourt.description}
              </p>

              {/* Technical Spec List */}
              <div className="space-y-4 border-t border-b border-white/10 py-6 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#B6FF00]" />
                    PITCH DIMENSION
                  </span>
                  <span className="font-display text-lg font-bold text-[#F5F5F2]">
                    {activeCourt.size}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B6FF00]" />
                    TURF SURFACE
                  </span>
                  <span className="font-heading text-xs font-bold text-[#F5F5F2] text-right max-w-[200px] truncate">
                    {activeCourt.surface}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#B6FF00]" />
                    LIGHTING SYSTEM
                  </span>
                  <span className="font-heading text-xs font-bold text-[#F5F5F2]">
                    {activeCourt.lighting}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#B6FF00]" />
                    SPECTATOR CAPACITY
                  </span>
                  <span className="font-display text-lg font-bold text-[#F5F5F2]">
                    {activeCourt.capacity}
                  </span>
                </div>
              </div>

              {/* Court Unique Perks */}
              <div>
                <span className="font-heading text-xs uppercase tracking-widest text-[#B6FF00] font-bold block mb-3">
                  INCLUDED COURT FEATURES
                </span>
                <ul className="space-y-2">
                  {activeCourt.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#F5F5F2] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Link to Booking with Preselected Court */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="#booking"
                className="w-full py-3.5 bg-[#163000] hover:bg-[#B6FF00] text-[#B6FF00] hover:text-[#050505] border border-[#B6FF00]/50 font-heading font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>BOOK {activeCourt.code}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
