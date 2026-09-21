import type { TournamentData } from '../types';

// Set countdown 3 days, 12 hours from current time
const futureDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000 + 24 * 60 * 1000);

export const TOURNAMENT_DATA: TournamentData = {
  title: 'VORTEX NIGHT CUP',
  subTitle: 'THE ULTIMATE URBAN FUTSAL SHOWDOWN',
  year: '2026',
  teamsCount: 16,
  prizePool: 'Rp 10.000.000',
  targetDate: futureDate.toISOString(),
  format: '16 Teams Knockout Stage',
  location: 'VORTEX FUTSAL ARENA - COURT 01 & 02',
  highlights: [
    'Juara 1: Rp 6.000.000 + Piala Bergilir + Medali Emas',
    'Juara 2: Rp 3.000.000 + Medali Perak',
    'Top Scorer & Best Goalkeeper: Rp 1.000.000 + Trofi Sepatu Emas',
    'Live Streaming Youtube & Komentator Olahraga Profesional'
  ]
};
