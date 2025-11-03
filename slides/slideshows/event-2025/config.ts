import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import WelcomeSlide from './slides/WelcomeSlide';

export const event2025Config: SlideshowConfig = {
  id: 'event-2025',
  title: 'PolicyEngine 2.0 and the future of public policy analysis',
  description: 'PolicyEngine UK Event 2025 presentation',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    CoverSlide,
    WelcomeSlide,
    
  ],
};
