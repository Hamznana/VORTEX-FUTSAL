import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { attachMagneticEffect } from '../animations/magnetic';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cleanup = attachMagneticEffect(ctaBtnRef.current, 0.25);
    return cleanup;
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ARENA', href: '#arena' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'TOURNAMENT', href: '#tournament' },
    { label: 'COMMUNITY', href: '#community' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group focus-visible:outline-none"
          aria-label="Vortex Futsal Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0B0D0C] border border-white/15 flex items-center justify-center relative overflow-hidden group-hover:border-[#B6FF00] transition-colors">
            <span className="font-display text-2xl font-bold text-[#F5F5F2] tracking-wider">V</span>
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#B6FF00] shadow-[0_0_8px_#B6FF00]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-[#F5F5F2] font-black leading-none group-hover:text-[#B6FF00] transition-colors">
              VORTEX
            </span>
            <span className="font-heading text-[9px] uppercase tracking-[0.28em] text-[#8A8A8A] font-semibold">
              FUTSAL ARENA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F2]/80 hover:text-[#B6FF00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B6FF00] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            ref={ctaBtnRef}
            onClick={onOpenBooking}
            data-cursor="button"
            className="hidden sm:inline-flex items-center gap-2 bg-[#B6FF00] hover:bg-[#c2ff24] text-[#050505] font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md transition-all shadow-[0_0_15px_rgba(182,255,0,0.25)] hover:shadow-glow-electric active:scale-95"
          >
            <span>BOOK A FIELD</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#0B0D0C] border border-white/10 text-[#F5F5F2] hover:text-[#B6FF00] hover:border-[#B6FF00] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 z-40 flex flex-col p-6 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl tracking-wider text-[#F5F5F2] hover:text-[#B6FF00] transition-colors border-b border-white/5 pb-3"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 bg-[#B6FF00] text-[#050505] font-heading font-bold text-sm tracking-widest uppercase rounded-lg shadow-glow-electric flex items-center justify-center gap-2"
            >
              <span>BOOK A FIELD</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </button>
            <p className="font-heading text-xs text-[#8A8A8A] text-center mt-4">
              PLAY FAST. PLAY TOGETHER.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
