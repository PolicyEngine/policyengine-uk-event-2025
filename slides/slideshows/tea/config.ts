import { SlideshowConfig } from '@/lib/types';
import TeaSlide from './slides/TeaSlide';

export const teaConfig: SlideshowConfig = {
  id: 'tea',
  title: 'Tea Break',
  description: 'Tea break and networking',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    TeaSlide,
  ],
};
