import { SlideshowConfig } from '@/lib/types';
import ReceptionSlide from './slides/ReceptionSlide';

export const receptionConfig: SlideshowConfig = {
  id: 'reception',
  title: 'Reception and Networking',
  description: 'Reception and networking',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    ReceptionSlide,
  ],
};
