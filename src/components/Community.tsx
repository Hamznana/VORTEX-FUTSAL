import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Flame, Trophy, Moon, Users, Smile } from 'lucide-react';

export function Community() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const communityPrograms = [
    {
      id: 'prog-1',
      tag: 'COMMUNITY RUN',
      title: 'OPEN RUN TUESDAY',
      desc: 'Sesi kumpul dan sparring santai setiap Selasa malam. Datang sendiri atau berdua, kami bagi tim secara acak untuk main bersama.',
      time: 'Setiap Selasa • 20:00 - 23:00',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'prog-2',
      tag: 'WEEKLY MATCH',
      title: 'VORTEX SUNDAY LEAGUE',
      desc: 'Liga mini 10 pekan dengan klasemen langsung, pencatatan top scorer, dan rekaman highlight setiap akhir pekan.',
      time: 'Setiap Minggu • 15:00 - 20:00',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'prog-3',
      tag: 'NIGHT GAME',
      title: 'MIDNIGHT FASTBALL',
      desc: 'Sesi bermain malam tanpa jeda di bawah lampu sorot atmosferik dengan playlist beat elektronik pengobar energi.',
      time: 'Jumat & Sabtu • 23:00 - 02:00',
      icon: Moon,
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'prog-4',
      tag: 'BEGINNER FRIENDLY',
      title: 'ROOKIE CLINIC & SKILL LAB',
      desc: 'Khusus bagi pemain pemula yang ingin belajar dasar dribble cepat, operan satu-dua, dan positioning futsal indoor.',
      time: 'Setiap Kamis • 19:00 - 21:00',
      icon: Smile,
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'prog-5',
      tag: 'COMPETITIVE MATCH',
      title: 'KING OF THE COURT (1V1 & 3V3)',
      desc: 'Format adu gengsi eliminasi langsung dengan aturan gol emas. Pemenang bertahan di lapangan melawan penantang baru.',
      time: 'Rabu Malam • 21:00 - 23:30',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="community"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0D0C] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B6FF00] uppercase block mb-3">
              SECTION 08 / COMMUNITY CULTURE
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
              NOT JUST <br />
              <span className="text-[#B6FF00]">A GAME.</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#8A8A8A] mt-4 max-w-lg font-normal">
              "Football brings people together. Futsal keeps them moving."
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleScrollLeft}
              className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 hover:border-[#B6FF00] text-[#F5F5F2] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleScrollRight}
              className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 hover:border-[#B6FF00] text-[#F5F5F2] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Card Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory select-none"
        >
          {communityPrograms.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                data-cursor="explore"
                className="snap-start shrink-0 w-[300px] sm:w-[380px] rounded-2xl bg-[#050505] border border-white/15 p-6 flex flex-col justify-between group hover:border-[#B6FF00] transition-all duration-300"
              >
                <div>
                  {/* Photo Visual */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-[#0B0D0C]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                    />
                    <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#B6FF00] border border-white/10">
                      {item.tag}
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-lg bg-[#163000] border border-[#B6FF00]/40 flex items-center justify-center text-[#B6FF00] mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F5F5F2] uppercase tracking-wide group-hover:text-[#B6FF00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-heading text-[#8A8A8A]">
                  <span>{item.time}</span>
                  <span className="text-[#B6FF00] font-bold">JOIN IN</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
