# Guide for adding presentations with Claude Code

This guide helps presenters use Claude Code to add their slides to the PolicyEngine UK Event 2025 slideshow app.

## Quick start

Tell Claude Code:

> "Add a new presentation for [your talk title] with slides about [brief description]"

Claude will create the necessary files and add your presentation to the agenda.

## Manual process

### 1. Create your slideshow directory

```bash
mkdir -p slideshows/your-talk-id/slides
```

Use a simple ID like `technology-ai`, `carbon-dividend`, etc.

### 2. Create slide components

Each slide is a React component. Create files in `slideshows/your-talk-id/slides/`:

```tsx
// slideshows/your-talk-id/slides/IntroSlide.tsx
import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function IntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Your slide title</SlideTitle>
        </SlideHeader>

        <p className="text-xl italic text-gray-600 mb-8 text-left">
          Speaker: Your Name
        </p>

        <SlideContent size="md">
          <p>Your content here. Keep it concise and left-aligned.</p>
        </SlideContent>
      </div>
    </Slide>
  );
}
```

### 3. Create cover and end slides

```tsx
// slideshows/your-talk-id/slides/CoverSlide.tsx
import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-16">
        <SlideTitle isCover>
          Your talk title
        </SlideTitle>
        <div className="text-3xl text-white space-y-3 text-center">
          <p className="font-medium">Your Name</p>
          <p>Your Organisation</p>
        </div>
      </div>
    </Slide>
  );
}
```

```tsx
// slideshows/your-talk-id/slides/EndSlide.tsx
import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-12">
        <SlideTitle isEnd>Thank you</SlideTitle>
        <div className="text-2xl text-white space-y-6 text-center">
          <p className="text-3xl font-medium">Questions?</p>
        </div>
      </div>
    </Slide>
  );
}
```

### 4. Create config file

```tsx
// slideshows/your-talk-id/config.ts
import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import IntroSlide from './slides/IntroSlide';
import EndSlide from './slides/EndSlide';
// Import other slides...

export const yourTalkConfig: SlideshowConfig = {
  id: 'your-talk-id',
  title: 'Your Talk Title',
  description: 'Brief description of your talk',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    CoverSlide,
    IntroSlide,
    // Add other slides in order...
    EndSlide,
  ],
};
```

### 5. Register your slideshow

Edit `lib/slideshows.ts`:

```tsx
import { yourTalkConfig } from '@/slideshows/your-talk-id/config';

export const slideshows: SlideshowConfig[] = [
  event2025Config,
  yourTalkConfig, // Add here
];
```

### 6. Update the agenda

Edit `lib/agenda.ts` to link your talk:

```tsx
{
  time: '2:00 PM - 2:20 PM',
  title: 'Your Talk Title',
  speaker: 'Your Name, Organisation',
  slideshowId: 'your-talk-id',  // This links to your slideshow
  type: 'talk'
},
```

## Slide components

### SlideContent

Use for main content with different sizes:

```tsx
<SlideContent size="sm">...</SlideContent>  // Smaller text (text-xl)
<SlideContent size="md">...</SlideContent>  // Medium text (text-2xl)
<SlideContent size="lg">...</SlideContent>  // Large text (text-3xl)
```

### Two-column layout

```tsx
<SlideContent columns={2}>
  <div>
    <h2 className="text-3xl font-semibold text-pe-dark mb-4">Left column</h2>
    <p>Content here</p>
  </div>
  <div>
    <h2 className="text-3xl font-semibold text-pe-dark mb-4">Right column</h2>
    <p>Content here</p>
  </div>
</SlideContent>
```

### Lists

```tsx
<ul className="list-disc list-inside space-y-3 text-xl text-left">
  <li>First point</li>
  <li>Second point</li>
  <li>Third point</li>
</ul>
```

## Design guidelines

- **Font**: Use Inter (automatically applied)
- **Alignment**: Always left-align text (use `text-left`)
- **Colors**:
  - Teal: `text-pe-teal` (#319795)
  - Dark teal: `text-pe-dark` (#1D4044)
- **Logo**: Profile logo appears automatically on middle slides (aligned with title)
- **Keep it simple**: Use large text, minimal content per slide

## Testing locally

```bash
cd slides
npm run dev
```

Open http://localhost:3000 to see your slides.

## Building

```bash
npm run build
```

The site will be built to `slides/out/` and deployed to GitHub Pages at:
https://policyengine.github.io/policyengine-uk-event-2025

## Getting help

Ask Claude Code:
- "Show me an example slide with bullet points"
- "Create a two-column slide comparing X and Y"
- "How do I add images to my slides?"
- "Fix the layout on my slides"

## Common patterns

### Speaker attribution

```tsx
<p className="text-xl italic text-gray-600 mb-8 text-left">
  Speaker: Your Name, Organisation
</p>
```

### Emphasised text

```tsx
<p className="text-3xl font-bold text-pe-teal mb-6">
  Key takeaway message
</p>
```

### Section headers within slides

```tsx
<h2 className="text-3xl font-semibold text-pe-dark mb-4 text-left">
  Section title
</h2>
```

Remember: Everything should be **left-aligned** except for cover/end slides which are centered.
