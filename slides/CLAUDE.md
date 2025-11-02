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
import SlideLayout from '@/components/SlideLayout';
import BulletList from '@/components/BulletList';

export default function IntroSlide() {
  return (
    <Slide>
      <SlideLayout title="Your slide title">
        <BulletList
          size="md"
          items={[
            { text: 'Your first point here' },
            { text: 'Your second point here' },
            { text: 'Your third point here' },
          ]}
        />
      </SlideLayout>
    </Slide>
  );
}
```

### 3. Create cover and end slides

```tsx
// slideshows/your-talk-id/slides/CoverSlide.tsx
import React from 'react';
import Slide from '@/components/Slide';
import CoverSlideLayout from '@/components/CoverSlideLayout';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <CoverSlideLayout
        title="Your talk title"
        presenter="Your Name"
        organization="Your Organisation"
      />
    </Slide>
  );
}
```

```tsx
// slideshows/your-talk-id/slides/EndSlide.tsx
import React from 'react';
import Slide from '@/components/Slide';
import EndSlideLayout from '@/components/EndSlideLayout';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <EndSlideLayout />
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

### BulletList

Use for lists with different sizes:

```tsx
<BulletList
  size="sm"  // or "md" or "lg"
  items={[
    { text: 'First point' },
    { text: 'Second point', subtext: 'Optional additional detail' },
    { text: 'Third point' },
  ]}
/>
```

### SlideLayout

Standard slide with title:

```tsx
<SlideLayout title="Your slide title">
  <BulletList items={[...]} />
</SlideLayout>
```

### Image layouts

```tsx
// Single image
<SingleImageLayout
  title="Your title"
  image={{ src: "/path/to/image.png", alt: "Description", caption: "Figure 1: Caption" }}
/>

// Two images side by side
<TwoImageLayout
  title="Your title"
  images={[
    { src: "/image1.png", alt: "First", caption: "Figure 1: First" },
    { src: "/image2.png", alt: "Second", caption: "Figure 2: Second" }
  ]}
/>

// Text with image
<TextImageLayout
  title="Your title"
  image={{ src: "/image.png", alt: "Description" }}
>
  <BulletList items={[...]} />
</TextImageLayout>
```

## Design guidelines

- **Font**: Use Inter (automatically applied)
- **Alignment**: All text is left-aligned, including cover and end slides
- **Colors**:
  - Teal: `text-pe-teal` (#319795)
  - Dark teal: `text-pe-dark` (#1D4044)
- **Logo**: Profile logo appears automatically on middle slides (aligned with title)
- **Keep it simple**: Use large text, minimal content per slide

## Component usage rules

**CRITICAL**: Slide `.tsx` files must NEVER contain custom `<p>`, `<div>`, or inline styling unless absolutely necessary. Always use the existing reusable components to maintain consistency across all presentations.

Available components:
- `SlideLayout` - standard slide layout with title
- `CoverSlideLayout` - cover slide with title, presenter, organisation
- `EndSlideLayout` - end slide with thank you message
- `BulletList` - consistent bullet point lists with size options
- `SlideSubtitle` - subtitle text
- `TwoImageLayout` - two images side by side
- `SingleImageLayout` - single image with caption
- `TextImageLayout` - text and image layout
- `ImageGrid` - grid of images
- `StatCard` - statistics card
- `HighlightBox` - highlighted content box
- `MathFormula` - mathematical formulas
- `SVGGraphic` - SVG graphics

If you need custom styling or layout that doesn't exist, create a new reusable component in `slides/components/` rather than adding inline styles to slide files.

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

### Slides with subtitles

```tsx
<SlideLayout title="Main title">
  <SlideSubtitle>
    Your subtitle or introductory text
  </SlideSubtitle>
  <BulletList items={[...]} />
</SlideLayout>
```

### Highlighted content

```tsx
<SlideLayout title="Your title">
  <HighlightBox>
    Key takeaway message or important point
  </HighlightBox>
  <BulletList items={[...]} />
</SlideLayout>
```

### Statistics or metrics

```tsx
<SlideLayout title="Key metrics">
  <StatCard
    value="42%"
    label="Improvement in accuracy"
  />
</SlideLayout>
```
