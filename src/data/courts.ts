import type { Court } from '../types';

export const COURTS_DATA: Court[] = [
  {
    id: 'court-01',
    code: 'COURT 01',
    name: 'CHAMPIONSHIP PITCH',
    tag: 'Official Tournament Venue',
    size: '40 × 20 M',
    surface: 'FIFA Quality Pro Interlocking Turf',
    lighting: '1200 Lux Anti-Glare LED System',
    camera: 'Dual 4K AI Tracking Camera',
    capacity: '120 Spectators',
    description: 'Lapangan utama standar turnamen internasional dengan pantulan bola presisi tinggi dan shock pad 12mm pelindung lutut.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    features: ['High-Tension Boundary Net', 'Digital Timeboard Display', 'Player Bench with Charging Ports']
  },
  {
    id: 'court-02',
    code: 'COURT 02',
    name: 'THUNDER CAGE',
    tag: 'Fast Paced Urban Cage',
    size: '38 × 18 M',
    surface: 'Monofilament 50mm Rubber Infill Turf',
    lighting: '1000 Lux Overhead Spotlights',
    camera: 'Wide-Angle Action Cam 60fps',
    capacity: '80 Spectators',
    description: 'Didesain untuk tempo permainan ekstra cepat dan intensitas tinggi dengan perimeter cage elastis tanpa jeda bola keluar.',
    image: 'https://images.unsplash.com/photo-1529900245534-47fbf82a4d33?auto=format&fit=crop&w=1200&q=80',
    features: ['Elastic Rebound Wall', 'Dynamic LED Floor Lines', 'Surround Sound Audio System']
  },
  {
    id: 'court-03',
    code: 'COURT 03',
    name: 'TACTICAL MATRIX',
    tag: 'Team Drill & League Matches',
    size: '40 × 20 M',
    surface: 'Polyurethane Seamless Court Flooring',
    lighting: '1100 Lux Natural White 5000K',
    camera: 'Ceiling Overhead Tactical Angle',
    capacity: '90 Spectators',
    description: 'Lantai vinyl pro khusus futsal indoor untuk manuver kontrol bola licin, traksi maksimal sepatu flat, dan rotasi taktik akurat.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    features: ['Tactical Whiteboard Station', 'Overhead Drone Cam Sync', 'Instant Video Replay Screen']
  },
  {
    id: 'court-04',
    code: 'COURT 04',
    name: 'SPEED ARENA',
    tag: 'Underground Night Matches',
    size: '36 × 18 M',
    surface: 'High-Density Hybrid Futsal Turf',
    lighting: 'Atmospheric Night LED Beams',
    camera: 'Side Goalposts Go-Pro Cam Integration',
    capacity: '60 Spectators',
    description: 'Arena atmosferik khusus sesi malam dan sparring komunitas dengan pencahayaan dramatis dan akustik gemuruh stadion.',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80',
    features: ['Night Glo-Strip Netting', 'Private Music Bluetooth Link', 'Direct Access to Shower Hub']
  }
];
