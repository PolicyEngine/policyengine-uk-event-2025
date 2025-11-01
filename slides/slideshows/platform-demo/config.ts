import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import DemoSlide from './slides/DemoSlide';
import EndSlide from './slides/EndSlide';

export const platformDemoConfig: SlideshowConfig = {
  id: 'platform-demo',
  title: 'Live demo: PolicyEngine v2 platform',
  description: 'Anthony Volk demonstrates the redesigned PolicyEngine platform',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    DemoSlide,
    EndSlide,
  ],
};