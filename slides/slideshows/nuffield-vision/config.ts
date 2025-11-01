import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import NuffieldSupport from './slides/NuffieldSupport';
import EndSlide from './slides/EndSlide';

export const nuffieldVisionConfig: SlideshowConfig = {
  id: 'nuffield-vision',
  title: 'The Nuffield Foundation\'s vision for evidence-based policy',
  description: 'Anvar Sarygulov presents the Nuffield Foundation\'s support for PolicyEngine',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    NuffieldSupport,
    EndSlide,
  ],
};