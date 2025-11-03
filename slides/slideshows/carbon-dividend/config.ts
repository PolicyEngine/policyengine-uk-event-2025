import { SlideshowConfig } from '@/lib/types';
import SectionTitle from '@/components/AutoSectionTitle';
import GoogleSlidesEmbed from './slides/GoogleSlidesEmbed';
import EndSlide from './slides/EndSlide';

export const carbonDividendConfig: SlideshowConfig = {
  id: 'carbon-dividend',
  title: 'Microsimulation of a carbon dividend',
  description: 'Presentation by Malcolm Torry on carbon dividend microsimulation',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    GoogleSlidesEmbed,
    EndSlide,
  ],
};
