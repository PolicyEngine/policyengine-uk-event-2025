import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import DavidIntro from './slides/DavidIntro';
import ElectionCalculatorDemo from './slides/ElectionCalculatorDemo';
import PavelIntro from './slides/PavelIntro';
import OBBBADashboard from './slides/OBBBADashboard';
import DaphneIntro from './slides/DaphneIntro';
import ACACalculator from './slides/ACACalculator';
import EndSlide from './slides/EndSlide';

export const policyengineUSConfig: SlideshowConfig = {
  id: 'policyengine-us',
  title: 'PolicyEngine US: Modelling federal, state, and local policies',
  description: 'David Trimmer, Pavel Makarchuk, and Daphne Hansell showcase PolicyEngine US capabilities',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    DavidIntro,
    ElectionCalculatorDemo,
    PavelIntro,
    OBBBADashboard,
    DaphneIntro,
    ACACalculator,
    EndSlide,
  ],
};
