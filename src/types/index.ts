export interface Court {
  id: string;
  name: string;
  code: string;
  tag: string;
  size: string;
  surface: string;
  lighting: string;
  camera: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
}

export interface Player {
  id: string;
  number: string;
  name: string;
  role: string;
  position: string;
  specialty: string;
  stats: {
    speed: number;
    stamina: number;
    shotPower: number;
    technique: number;
  };
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceFormatted: string;
  priceValue: number;
  unit: string;
  description: string;
  features: string[];
  recommended?: boolean;
  highlightColor?: 'electric' | 'orange' | 'white';
}

export interface TournamentData {
  title: string;
  subTitle: string;
  year: string;
  teamsCount: number;
  prizePool: string;
  targetDate: string; // ISO string for live countdown
  format: string;
  location: string;
  highlights: string[];
}

export interface TimeSlot {
  id: string;
  time: string;
  period: 'pagi' | 'siang' | 'malam';
  status: 'available' | 'booked' | 'selected';
  price: number;
}

export interface SocialPost {
  id: string;
  author: string;
  handle: string;
  category: string;
  title: string;
  image: string;
  likes: number;
  tags: string[];
}
