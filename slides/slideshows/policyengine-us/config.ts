import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import DavidIntro from './slides/DavidIntro';
import OBBBADashboard from './slides/OBBBADashboard';
import HealthInsurancePathways from './slides/HealthInsurancePathways';
import DaphneIntro from './slides/DaphneIntro';
import ACACalculator from './slides/ACACalculator';
import EndSlide from './slides/EndSlide';

export const policyengineUSConfig: SlideshowConfig = {
  id: 'policyengine-us',
  title: 'PolicyEngine US: Tools for deconstructing complex policies',
  description: 'David Trimmer and Daphne Hansell showcase PolicyEngine US tools',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    DavidIntro,
    OBBBADashboard,
    HealthInsurancePathways,
    DaphneIntro,
    ACACalculator,
    EndSlide,
  ],
};
