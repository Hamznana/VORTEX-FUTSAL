import { useState } from 'react';
import { INITIAL_SLOTS } from '../data/bookingSlots';
import { COURTS_DATA } from '../data/courts';
import type { TimeSlot } from '../types';
import { Calendar, Clock, MapPin, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingProps {
  onSuccessBooking?: (details: any) => void;
}

export function Booking({ onSuccessBooking }: BookingProps) {
  // Generate next 7 days for futuristic date selector
  const daysList = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayNames = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES'];
    return {
      dayStr: dayNames[d.getDay()],
      dateNum: d.getDate(),
      monthStr: monthNames[d.getMonth()],
      fullDate: d.toISOString().split('T')[0],
      isToday: i === 0,
    };
  });

  const [selectedDate, setSelectedDate] = useState<string>(daysList[0].fullDate);
  const [selectedCourtId, setSelectedCourtId] = useState<string>('court-01');
  const [playerCount, setPlayerCount] = useState<number>(10);
  const [activePeriodFilter, setActivePeriodFilter] = useState<'semua' | 'pagi' | 'siang' | 'malam'>('semua');
  const [slots, setSlots] = useState<TimeSlot[]>(INITIAL_SLOTS);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookedDetails, setBookedDetails] = useState<any>(null);

  const selectedSlot = slots.find((s) => s.status === 'selected');
  const activeCourt = COURTS_DATA.find((c) => c.id === selectedCourtId) || COURTS_DATA[0];

  const handleSelectSlot = (slotId: string) => {
    setSlots((prev) =>
      prev.map((s) => {
        if (s.status === 'booked') return s;
        if (s.id === slotId) {
          return { ...s, status: 'selected' };
        }
        return s.status === 'selected' ? { ...s, status: 'available' } : s;
      })
    );
  };

  const filteredSlots = slots.filter((slot) => {
    if (activePeriodFilter === 'semua') return true;
    return slot.period === activePeriodFilter;
  });

  const basePrice = selectedSlot ? selectedSlot.price : 175000;
  const totalPriceFormatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(basePrice);

  const handleBookNow = () => {
    if (!selectedSlot) return;

    const details = {
      date: selectedDate,
      court: activeCourt.name,
      courtCode: activeCourt.code,
      time: selectedSlot.time,
      players: playerCount,
      price: totalPriceFormatted,
      bookingCode: `VTX-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    setBookedDetails(details);
    setBookingConfirmed(true);

    // Fire athletic celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B6FF00', '#FF5A1F', '#F5F5F2'],
      });
    } catch {
      // Fallback if canvas-confetti is mocked
    }

    if (onSuccessBooking) {
      onSuccessBooking(details);
    }
  };

  return (
    <section
      id="booking"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#163000]/30 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5A1F]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B6FF00] uppercase block mb-3">
            SECTION 03 / DIRECT BOOKING CONSOLE
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
            YOUR GAME. <br />
            <span className="text-[#B6FF00]">YOUR TIME.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8A8A8A] mt-4">
            Sistem pemesanan instan terintegrasi. Pilih tanggal, lapangan, dan slot waktu bermain dalam hitungan detik.
          </p>
        </div>

        {/* Futuristic Booking Console Frame */}
        <div className="bg-[#0B0D0C] border border-white/15 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Parameters (Date, Court, Time Slots) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* 1. Date Selector Tabs */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#F5F5F2] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#B6FF00]" />
                    SELECT MATCH DATE
                  </span>
                  <span className="font-sans text-xs text-[#8A8A8A]">
                    {selectedDate}
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-2 overflow-x-auto pb-2">
                  {daysList.map((day) => {
                    const isSelected = day.fullDate === selectedDate;
                    return (
                      <button
                        key={day.fullDate}
                        onClick={() => setSelectedDate(day.fullDate)}
                        data-cursor="button"
                        className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all border ${
                          isSelected
                            ? 'bg-[#B6FF00] text-[#050505] border-[#B6FF00] shadow-glow-electric scale-105'
                            : 'bg-[#050505] text-[#F5F5F2] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span className={`font-heading text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#050505]' : 'text-[#8A8A8A]'}`}>
                          {day.dayStr}
                        </span>
                        <span className="font-display text-xl sm:text-2xl font-black mt-0.5">
                          {day.dateNum}
                        </span>
                        <span className={`font-heading text-[9px] uppercase font-semibold ${isSelected ? 'text-[#050505]' : 'text-[#8A8A8A]'}`}>
                          {day.monthStr}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Court Selector Radio Cards */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#F5F5F2] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B6FF00]" />
                    SELECT COURT
                  </span>
                  <span className="font-sans text-xs text-[#B6FF00] font-semibold">
                    {activeCourt.size} • {activeCourt.surface.split(' ')[0]}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {COURTS_DATA.map((c) => {
                    const isSelected = c.id === selectedCourtId;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCourtId(c.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-[#163000] border-[#B6FF00] text-[#F5F5F2]'
                            : 'bg-[#050505] border-white/10 hover:border-white/20 text-[#8A8A8A]'
                        }`}
                      >
                        <span className={`font-display text-lg font-bold block ${isSelected ? 'text-[#B6FF00]' : 'text-[#F5F5F2]'}`}>
                          {c.code}
                        </span>
                        <span className="font-sans text-[11px] block truncate text-inherit">
                          {c.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Interactive Time Slots Grid */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#F5F5F2] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B6FF00]" />
                    SELECT 1-HOUR TIME SLOT
                  </span>

                  {/* Period Filter Tabs */}
                  <div className="flex items-center gap-1 bg-[#050505] p-1 rounded-lg border border-white/10 text-[11px] font-heading font-semibold">
                    {(['semua', 'pagi', 'siang', 'malam'] as const).map((period) => (
                      <button
                        key={period}
                        onClick={() => setActivePeriodFilter(period)}
                        className={`px-3 py-1 rounded-md capitalize transition-colors ${
                          activePeriodFilter === period
                            ? 'bg-[#B6FF00] text-[#050505] font-bold'
                            : 'text-[#8A8A8A] hover:text-[#F5F5F2]'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slot Legend */}
                <div className="flex items-center gap-4 text-[11px] font-heading text-[#8A8A8A] mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#B6FF00]" />
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#050505] border border-white/20" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#1A1C1A]" />
                    <span>Unavailable</span>
                  </div>
                </div>

                {/* Slots Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {filteredSlots.map((slot) => {
                    const isSelected = slot.status === 'selected';
                    const isBooked = slot.status === 'booked';

                    return (
                      <button
                        key={slot.id}
                        disabled={isBooked}
                        onClick={() => handleSelectSlot(slot.id)}
                        className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-[#B6FF00] text-[#050505] border-[#B6FF00] shadow-glow-electric scale-102 font-bold'
                            : isBooked
                            ? 'bg-[#141614] border-transparent text-[#555555] cursor-not-allowed opacity-50'
                            : 'bg-[#050505] border-white/10 hover:border-[#B6FF00]/50 text-[#F5F5F2]'
                        }`}
                      >
                        <span className="font-heading text-xs font-bold">
                          {slot.time}
                        </span>
                        <span className={`text-[10px] uppercase font-semibold mt-0.5 ${isSelected ? 'text-[#050505]' : 'text-[#8A8A8A]'}`}>
                          {isBooked ? 'TERISI' : isSelected ? 'TERPILIH' : 'TERSEDIA'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Live Receipt & CTA Console */}
            <div className="lg:col-span-4 bg-[#050505] border border-white/15 rounded-xl p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#B6FF00]">
                    BOOKING SUMMARY
                  </span>
                  <span className="font-heading text-[10px] text-[#8A8A8A] bg-white/5 px-2 py-0.5 rounded">
                    REALTIME RATE
                  </span>
                </div>

                {/* Match Line Item Breakdown */}
                <div className="space-y-3.5 text-xs font-sans mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#8A8A8A]">Selected Court:</span>
                    <span className="font-heading font-bold text-[#F5F5F2]">
                      {activeCourt.code} - {activeCourt.name}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#8A8A8A]">Match Date:</span>
                    <span className="font-heading font-bold text-[#F5F5F2]">
                      {selectedDate}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#8A8A8A]">Time Slot:</span>
                    <span className="font-heading font-bold text-[#B6FF00]">
                      {selectedSlot ? selectedSlot.time : 'Pilih Jam'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#8A8A8A]">Estimated Players:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPlayerCount(Math.max(6, playerCount - 1))}
                        className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 text-[#F5F5F2] flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="font-heading font-bold text-[#F5F5F2]">
                        {playerCount}
                      </span>
                      <button
                        onClick={() => setPlayerCount(Math.min(18, playerCount + 1))}
                        className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 text-[#F5F5F2] flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-[#8A8A8A]">Equipment Included:</span>
                    <span className="text-[#F5F5F2] font-medium">
                      2 Match Balls & Bibs Set
                    </span>
                  </div>
                </div>

                {/* Total Price Callout */}
                <div className="bg-[#0B0D0C] border border-white/10 p-4 rounded-xl mb-6">
                  <span className="font-heading text-[11px] uppercase tracking-wider text-[#8A8A8A] block">
                    TOTAL ESTIMATED PRICE
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display text-3xl sm:text-4xl font-black text-[#B6FF00]">
                      {totalPriceFormatted}
                    </span>
                    <span className="font-heading text-xs text-[#8A8A8A]">
                      / jam
                    </span>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="flex items-center gap-2 text-[11px] text-[#8A8A8A] mb-6">
                  <ShieldCheck className="w-4 h-4 text-[#B6FF00] shrink-0" />
                  <span>Instant confirmation via WhatsApp & E-Ticket QR</span>
                </div>
              </div>

              {/* Book Now Button */}
              <button
                onClick={handleBookNow}
                disabled={!selectedSlot}
                data-cursor="button"
                className="w-full py-4 bg-[#B6FF00] hover:bg-[#c2ff28] text-[#050505] font-heading font-black text-sm uppercase tracking-widest rounded-xl transition-all shadow-glow-electric flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Booking Confirmation Dialog Modal */}
      {bookingConfirmed && bookedDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0B0D0C] border border-[#B6FF00] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-glow-electric relative">
            <div className="w-12 h-12 rounded-full bg-[#163000] border border-[#B6FF00] text-[#B6FF00] flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>

            <h3 className="font-display text-3xl text-center font-black text-[#F5F5F2] uppercase tracking-wide">
              BOOKING CONFIRMED!
            </h3>
            <p className="font-sans text-xs text-center text-[#8A8A8A] mt-1 mb-6">
              Jadwal bertanding Anda telah terdaftar di sistem Vortex Futsal.
            </p>

            <div className="bg-[#050505] p-4 rounded-xl border border-white/10 space-y-2.5 text-xs mb-6 font-sans">
              <div className="flex justify-between">
                <span className="text-[#8A8A8A]">Booking ID:</span>
                <span className="font-mono font-bold text-[#B6FF00]">{bookedDetails.bookingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8A8A]">Court:</span>
                <span className="font-bold text-[#F5F5F2]">{bookedDetails.courtCode} - {bookedDetails.court}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8A8A]">Tanggal:</span>
                <span className="font-bold text-[#F5F5F2]">{bookedDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8A8A]">Waktu:</span>
                <span className="font-bold text-[#B6FF00]">{bookedDetails.time}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10">
                <span className="text-[#8A8A8A]">Total Bayar:</span>
                <span className="font-bold text-base text-[#F5F5F2]">{bookedDetails.price}</span>
              </div>
            </div>

            <button
              onClick={() => setBookingConfirmed(false)}
              className="w-full py-3 bg-[#B6FF00] text-[#050505] font-heading font-bold text-xs uppercase tracking-widest rounded-lg"
            >
              TUTUP & SIMPAN E-TICKET
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
