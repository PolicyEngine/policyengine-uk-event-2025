import { SlideshowConfig, SlideshowMetadata } from './types';
import { event2025Config } from '@/slideshows/event-2025/config';
import { vatAnalysisConfig } from '@/slideshows/vat-analysis/config';
import { techAI2025Config } from '@/slideshows/tech-ai-2025/config';
import { welcomeVisionConfig } from '@/slideshows/welcome-vision/config';
import { nuffieldVisionConfig } from '@/slideshows/nuffield-vision/config';
import { platformDemoConfig } from '@/slideshows/platform-demo/config';
import { uxDesignConfig } from '@/slideshows/ux-design/config';
import { policyengineUSConfig } from '@/slideshows/policyengine-us/config';
import { lunchConfig } from '@/slideshows/lunch/config';
import { teaConfig } from '@/slideshows/tea/config';
import { carbonDividendConfig } from '@/slideshows/carbon-dividend/config';

// Register all slideshows here
export const slideshows: SlideshowConfig[] = [
  event2025Config,
  vatAnalysisConfig,
  techAI2025Config,
  welcomeVisionConfig,
  nuffieldVisionConfig,
  platformDemoConfig,
  uxDesignConfig,
  policyengineUSConfig,
  lunchConfig,
  teaConfig,
  carbonDividendConfig,
];

export function getSlideshowById(id: string): SlideshowConfig | undefined {
  return slideshows.find(s => s.id === id);
}

export function getAllSlideshowMetadata(): SlideshowMetadata[] {
  return slideshows.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    date: s.date,
    location: s.location,
    slideCount: s.slides.length,
  }));
}
