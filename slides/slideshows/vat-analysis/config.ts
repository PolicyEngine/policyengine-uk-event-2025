import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import CoverSlide from './slides/CoverSlide';
import IntroSlide from './slides/IntroSlide';
import FirmDistributionSlide from './slides/FirmDistributionSlide';
import FirmMicrodataSlide from './slides/FirmMicrodataSlide';
import HMRCComparisonSlide from './slides/HMRCComparisonSlide';
import StaticSimulationSlide from './slides/StaticSimulationSlide';
import DynamicModellingSlide from './slides/DynamicModellingSlide';
import BehaviouralExtensionSlide from './slides/BehaviouralExtensionSlide';
import TurnoverDistributionsSlide from './slides/TurnoverDistributionsSlide';
import EndSlide from './slides/EndSlide';

export const vatAnalysisConfig: SlideshowConfig = {
  id: 'vat-analysis',
  title: 'VAT analysis with synthetic firm microdata',
  description: 'Analysis of VAT threshold reforms using synthetic firm-level microdata',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    IntroSlide,
    FirmDistributionSlide,
    FirmMicrodataSlide,
    HMRCComparisonSlide,
    StaticSimulationSlide,
    DynamicModellingSlide,
    BehaviouralExtensionSlide,
    TurnoverDistributionsSlide,
    EndSlide,
  ],
};
