import { useState, useEffect } from 'react';
import { TOURNAMENT_DATA } from '../data/tournaments';
import { Trophy, Flame, Users, Calendar, ArrowRight, X, Check } from 'lucide-react';

export function Tournament() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 24,
    seconds: 35,
  });

  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Realtime countdown ticker
  useEffect(() => {
    const target = new Date(TOURNAMENT_DATA.targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !captainName || !contactNumber) return;
    setIsRegistered(true);
  };

  return (
    <section
      id="tournament"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Background Stadium Glow & Arena Image */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="https://images.unsplash.com/photo-1529900245534-47fbf82a4d33?auto=format&fit=crop&w=1920&q=80"
          alt="Night Stadium Tournament Atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5A1F] uppercase block mb-3">
              SECTION 05 / OFFICIAL LEAGUE
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
              GAME <br />
              <span className="text-[#FF5A1F]">DAY.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#8A8A8A] max-w-md">
            Panggung persaingan tim terbaik kota. Uji mentalitas tim Anda di turnamen malam bergengsi dengan total hadiah jutaan rupiah.
          </p>
        </div>

        {/* Tournament Hero Card Banner */}
        <div className="bg-gradient-to-r from-[#0B0D0C] via-[#050505] to-[#163000]/40 border-2 border-white/15 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Tournament Info & Prizes */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] font-heading text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>REGISTRATION OPEN NOW</span>
              </div>

              <h3 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] uppercase tracking-wide leading-none">
                {TOURNAMENT_DATA.title} <br />
                <span className="text-[#B6FF00]">{TOURNAMENT_DATA.year}</span>
              </h3>

              <div className="flex flex-wrap items-center gap-6 text-sm font-heading font-bold text-[#F5F5F2]">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#B6FF00]" />
                  <span>{TOURNAMENT_DATA.teamsCount} TEAMS KNOCKOUT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#FF5A1F]" />
                  <span>PRIZE POOL {TOURNAMENT_DATA.prizePool}</span>
                </div>
              </div>

              {/* Tournament Prize Highlights */}
              <div className="bg-[#050505]/70 border border-white/10 rounded-xl p-5 space-y-2">
                <span className="font-heading text-xs uppercase tracking-widest text-[#B6FF00] font-bold block mb-2">
                  DISTRIBUSI HADIAH RESMI
                </span>
                {TOURNAMENT_DATA.highlights.map((item, idx) => (
                  <p key={idx} className="font-sans text-xs text-[#8A8A8A] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => setRegisterModalOpen(true)}
                  data-cursor="button"
                  className="inline-flex items-center gap-3 bg-[#FF5A1F] hover:bg-[#ff6f3b] text-white font-heading font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl shadow-glow-orange transition-all active:scale-95"
                >
                  <span>DAFTARKAN TIM SEKARANG</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

            </div>

            {/* Right Column: Dynamic Realtime Countdown Matrix */}
            <div className="lg:col-span-5 bg-[#050505] border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#B6FF00]" />
                KICK-OFF COUNTDOWN
              </span>

              {/* 4-Digit Live Countdown Blocks */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-sm mb-6">
                
                {/* Days */}
                <div className="bg-[#0B0D0C] border border-white/10 p-3 sm:p-4 rounded-xl flex flex-col items-center">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#F5F5F2]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-[10px] uppercase tracking-wider text-[#8A8A8A] mt-1">
                    DAYS
                  </span>
                </div>

                {/* Hours */}
                <div className="bg-[#0B0D0C] border border-white/10 p-3 sm:p-4 rounded-xl flex flex-col items-center">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#F5F5F2]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-[10px] uppercase tracking-wider text-[#8A8A8A] mt-1">
                    HOURS
                  </span>
                </div>

                {/* Minutes */}
                <div className="bg-[#0B0D0C] border border-white/10 p-3 sm:p-4 rounded-xl flex flex-col items-center">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#B6FF00]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-[10px] uppercase tracking-wider text-[#8A8A8A] mt-1">
                    MIN
                  </span>
                </div>

                {/* Seconds */}
                <div className="bg-[#0B0D0C] border border-[#FF5A1F]/50 p-3 sm:p-4 rounded-xl flex flex-col items-center shadow-[0_0_15px_rgba(255,90,31,0.2)]">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#FF5A1F] animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-[10px] uppercase tracking-wider text-[#FF5A1F] mt-1">
                    SEC
                  </span>
                </div>

              </div>

              <p className="font-sans text-xs text-[#8A8A8A]">
                Sisa 4 slot pendaftaran tim tersedia sebelum undian grup (drawing) dimulai.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Registration Modal Dialog */}
      {registerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0B0D0C] border border-white/20 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setRegisterModalOpen(false);
                setIsRegistered(false);
              }}
              className="absolute top-5 right-5 text-[#8A8A8A] hover:text-[#F5F5F2]"
              aria-label="Tutup form pendaftaran"
            >
              <X className="w-5 h-5" />
            </button>

            {!isRegistered ? (
              <div>
                <h3 className="font-display text-3xl font-black text-[#F5F5F2] uppercase tracking-wide mb-1">
                  DAFTAR VORTEX NIGHT CUP
                </h3>
                <p className="font-sans text-xs text-[#8A8A8A] mb-6">
                  Lengkapi data tim untuk mengamankan slot pertandingan turnamen.
                </p>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="font-heading text-xs uppercase text-[#8A8A8A] block mb-1">
                      Nama Tim Futsal
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Garuda Muda FC"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full bg-[#050505] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-[#F5F5F2] focus:border-[#B6FF00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-heading text-xs uppercase text-[#8A8A8A] block mb-1">
                      Nama Kapten / Official
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama lengkap penanggung jawab"
                      value={captainName}
                      onChange={(e) => setCaptainName(e.target.value)}
                      className="w-full bg-[#050505] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-[#F5F5F2] focus:border-[#B6FF00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-heading text-xs uppercase text-[#8A8A8A] block mb-1">
                      Nomor WhatsApp Aktif
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08123456789"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="w-full bg-[#050505] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-[#F5F5F2] focus:border-[#B6FF00] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 bg-[#FF5A1F] hover:bg-[#ff6f3b] text-white font-heading font-black text-xs uppercase tracking-widest rounded-xl transition-all"
                  >
                    KIRIM PENDAFTARAN TIM
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#163000] border border-[#B6FF00] text-[#B6FF00] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="font-display text-2xl font-black text-[#F5F5F2] uppercase">
                  TIM BERHASIL DIDAFTARKAN!
                </h4>
                <p className="font-sans text-xs text-[#8A8A8A] mt-2 mb-6">
                  Official tim <strong className="text-[#F5F5F2]">{teamName}</strong> akan dihubungi oleh panitia pelaksana turnamen melalui WhatsApp untuk verifikasi berkas pemain.
                </p>
                <button
                  onClick={() => {
                    setRegisterModalOpen(false);
                    setIsRegistered(false);
                  }}
                  className="w-full py-3 bg-[#B6FF00] text-[#050505] font-heading font-bold text-xs uppercase tracking-wider rounded-lg"
                >
                  SELESAI
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
