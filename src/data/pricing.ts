import type { PricingPlan } from '../types';

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'casual',
    name: 'CASUAL',
    priceFormatted: 'Rp 100K',
    priceValue: 100000,
    unit: '/hour',
    description: 'Pilihan pas untuk sparing santai, latihan mandiri, atau bermain bersama kawan sepulang kerja.',
    features: [
      'Akses Lapangan Pilihan 1 Jam',
      '2 Bola Futsal Match-Ready',
      'Akses Ruang Ganti & Loker Standar',
      'Air Mineral Refill Station',
      'Waktu Siang & Sore (08.00 - 16.00)'
    ],
    recommended: false,
    highlightColor: 'white'
  },
  {
    id: 'team',
    name: 'TEAM',
    priceFormatted: 'Rp 175K',
    priceValue: 175000,
    unit: '/hour',
    description: 'Format paling favorit untuk laga kompetitif antar tim dengan perlengkapan lengkap.',
    features: [
      'Akses Lapangan Pro Turf 1 Jam',
      'Set Rompi Tim (2 Warna Berbeda)',
      '3 Bola Futsal FIFA Quality Pro',
      'Akses Hot Shower & Loker Khusus',
      'Bebas Pilih Jam (Termasuk Prime Night 18.00 - 24.00)',
      'Papan Skor Digital Terintegrasi'
    ],
    recommended: true,
    highlightColor: 'electric'
  },
  {
    id: 'pro',
    name: 'PRO',
    priceFormatted: 'Rp 250K',
    priceValue: 250000,
    unit: '/hour',
    description: 'Pengalaman bertanding layaknya turnamen profesional dengan dokumentasi dan wasit bersertifikat.',
    features: [
      'Akses Lapangan Utama Championship',
      'Rekaman Pertandingan Full HD 60fps',
      'Wasit Berlisensi Resmi Pengcab',
      'Highlight Video Reels Otomatis',
      'Lounge VIP Eksklusif & Handuk Bersih',
      'Konsultasi Taktik Papan Digital'
    ],
    recommended: false,
    highlightColor: 'orange'
  }
];
