import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import GoogleSlidesEmbed from './slides/GoogleSlidesEmbed';
import EndSlide from './slides/EndSlide';

export const uxDesignConfig: SlideshowConfig = {
  id: 'ux-design',
  title: 'UX research and design of PolicyEngine v2 platform',
  description: 'Biniam Gebre and MaSara Myers present UX research and design',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    GoogleSlidesEmbed,
    EndSlide,
  ],
};
