import type { TimeSlot } from '../types';

export const INITIAL_SLOTS: TimeSlot[] = [
  { id: 'slot-1', time: '08:00 - 09:00', period: 'pagi', status: 'available', price: 100000 },
  { id: 'slot-2', time: '09:00 - 10:00', period: 'pagi', status: 'available', price: 100000 },
  { id: 'slot-3', time: '10:00 - 11:00', period: 'pagi', status: 'booked', price: 100000 },
  { id: 'slot-4', time: '11:00 - 12:00', period: 'pagi', status: 'available', price: 100000 },
  { id: 'slot-5', time: '13:00 - 14:00', period: 'siang', status: 'available', price: 125000 },
  { id: 'slot-6', time: '14:00 - 15:00', period: 'siang', status: 'booked', price: 125000 },
  { id: 'slot-7', time: '15:00 - 16:00', period: 'siang', status: 'available', price: 125000 },
  { id: 'slot-8', time: '16:00 - 17:00', period: 'siang', status: 'booked', price: 150000 },
  { id: 'slot-9', time: '18:00 - 19:00', period: 'malam', status: 'available', price: 175000 },
  { id: 'slot-10', time: '19:00 - 20:00', period: 'malam', status: 'booked', price: 175000 },
  { id: 'slot-11', time: '20:00 - 21:00', period: 'malam', status: 'selected', price: 175000 },
  { id: 'slot-12', time: '21:00 - 22:00', period: 'malam', status: 'available', price: 175000 },
  { id: 'slot-13', time: '22:00 - 23:00', period: 'malam', status: 'available', price: 175000 },
  { id: 'slot-14', time: '23:00 - 24:00', period: 'malam', status: 'available', price: 150000 },
];
