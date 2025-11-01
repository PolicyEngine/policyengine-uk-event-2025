import { SlideshowConfig } from '@/lib/types';
import LunchSlide from './slides/LunchSlide';

export const lunchConfig: SlideshowConfig = {
  id: 'lunch',
  title: 'Lunch Break',
  description: 'Registration, lunch and networking',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    LunchSlide,
  ],
};
