import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#8A8A8A] select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#0B0D0C] border border-[#B6FF00]/40 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-[#F5F5F2]">V</span>
              </div>
              <span className="font-display text-3xl tracking-wider text-[#F5F5F2] font-black">
                VORTEX FUTSAL
              </span>
            </div>

            <p className="font-display text-xl text-[#B6FF00] tracking-wider font-bold uppercase">
              PLAY FAST. PLAY TOGETHER.
            </p>

            <p className="font-sans text-xs text-[#8A8A8A] max-w-sm leading-relaxed">
              Arena futsal berstandar turnamen resmi dengan 4 pro turf pitch, pencahayaan LED 1200 Lux anti-glare, dan fasilitas locker room bintang lima.
            </p>

            <div className="space-y-2 pt-2 text-xs font-sans text-[#F5F5F2]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>Jl. Stadion Utama No. 88, Urban Sports Complex, Jakarta</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>+62 812-8899-2026 (WhatsApp Arena)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>arena@vortexfutsal.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#F5F5F2] block mb-4">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-heading font-semibold">
              <li>
                <a href="#hero" className="hover:text-[#B6FF00] transition-colors">
                  HOME ARENA
                </a>
              </li>
              <li>
                <a href="#arena" className="hover:text-[#B6FF00] transition-colors">
                  FACILITIES & TURF
                </a>
              </li>
              <li>
                <a href="#courts" className="hover:text-[#B6FF00] transition-colors">
                  COURT SHOWCASE
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#B6FF00] transition-colors">
                  ONLINE BOOKING
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#B6FF00] transition-colors">
                  MATCH PACKAGES
                </a>
              </li>
              <li>
                <a href="#tournament" className="hover:text-[#B6FF00] transition-colors">
                  VORTEX NIGHT CUP 2026
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#F5F5F2] block mb-4">
              CONNECT & SOCIAL
            </span>
            
            <p className="font-sans text-xs text-[#8A8A8A]">
              Ikuti siaran highlight pertandingan mingguan, jadwal turnamen, dan pengumuman slot prime night.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0B0D0C] border border-white/10 hover:border-[#B6FF00] hover:text-[#B6FF00] text-[#F5F5F2] flex items-center justify-center transition-colors"
                aria-label="Instagram Vortex Futsal"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0B0D0C] border border-white/10 hover:border-[#B6FF00] hover:text-[#B6FF00] text-[#F5F5F2] flex items-center justify-center transition-colors text-xs font-heading font-black"
                aria-label="TikTok Vortex Futsal"
              >
                TK
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0B0D0C] border border-white/10 hover:border-[#B6FF00] hover:text-[#B6FF00] text-[#F5F5F2] flex items-center justify-center transition-colors"
                aria-label="YouTube Vortex Futsal"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top button */}
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#8A8A8A] hover:text-[#B6FF00] transition-colors"
              >
                <span>BACK TO TOP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Trademark Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#8A8A8A]">
          <p>© 2026 VORTEX FUTSAL. ALL RIGHTS RESERVED.</p>
          <p className="font-heading tracking-wider uppercase text-[11px]">
            DESIGNED FOR ATHLETIC EXCELLENCE
          </p>
        </div>

      </div>
    </footer>
  );
}
