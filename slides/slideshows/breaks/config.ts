import { SlideshowConfig } from '@/lib/types';
import LunchSlide from './slides/LunchSlide';
import TeaSlide from './slides/TeaSlide';

export const breaksConfig: SlideshowConfig = {
  id: 'breaks',
  title: 'Break Slides',
  description: 'Lunch and tea break holder slides with countdown timers',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    LunchSlide,
    TeaSlide,
  ],
};
