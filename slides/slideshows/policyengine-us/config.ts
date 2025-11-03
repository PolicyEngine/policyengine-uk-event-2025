import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import OBBBAIntro from './slides/OBBBAIntro';
import OBBBADashboard from './slides/OBBBADashboard';
import HealthInsurancePathways from './slides/HealthInsurancePathways';
import ACAShutdown from './slides/ACAShutdown';
import EnhancedSubsidies from './slides/EnhancedSubsidies';
import QASlide from '@/components/QASlide';
import EndSlide from './slides/EndSlide';

export const policyengineUSConfig: SlideshowConfig = {
  id: 'policyengine-us',
  title: 'PolicyEngine US: Tools for deconstructing complex policies',
  description: 'David Trimmer and Daphne Hansell showcase PolicyEngine US tools',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    OBBBAIntro,
    OBBBADashboard,
    HealthInsurancePathways,
    ACAShutdown,
    EnhancedSubsidies,
    QASlide,
    EndSlide,
  ],
};
