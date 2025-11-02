import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import UBICenterLaunch from './slides/UBICenterLaunch';
import MakeEveryonePolicymaker from './slides/MakeEveryonePolicymaker';
import USLaunch from './slides/USLaunch';
import PolicyScoring from './slides/PolicyScoring';
import MLAccuracy from './slides/MLAccuracy';
import GrowingAdoption from './slides/GrowingAdoption';
import NuffieldGrant from './slides/NuffieldGrant';
import IntroducingAnvar from './slides/IntroducingAnvar';

export const welcomeVisionConfig: SlideshowConfig = {
  id: 'welcome-vision',
  title: 'Welcome and vision',
  description: 'Opening presentation by Max Ghenis on PolicyEngine\'s journey and vision',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    UBICenterLaunch,
    MakeEveryonePolicymaker,
    USLaunch,
    PolicyScoring,
    MLAccuracy,
    GrowingAdoption,
    NuffieldGrant,
    IntroducingAnvar,
  ],
};