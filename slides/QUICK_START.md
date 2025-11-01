# Quick start guide

## Add a slide to an existing presentation

### 1. Create your slide component

```tsx
// slideshows/event-2025/slides/MySlide.tsx
import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function MySlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Technology and AI for UK policymaking</SlideTitle>
        </SlideHeader>

        <p className="text-xl italic text-gray-600 mb-8">
          Speaker: Nikhil Woodruff
        </p>

        <SlideContent size="md">
          <p>
            PolicyEngine leverages artificial intelligence and software
            architecture to transform UK policy analysis.
          </p>
        </SlideContent>
      </div>
    </Slide>
  );
}
```

### 2. Register in the slideshow config

```tsx
// slideshows/event-2025/config.ts
import MySlide from './slides/MySlide';

export const event2025Config: SlideshowConfig = {
  // ...
  slides: [
    CoverSlide,
    WelcomeSlide,
    MySlide,  // ← Add here
    EndSlide,
  ],
};
```

### 3. View your changes

```bash
npm run dev
```

Navigate to http://localhost:3000, select your presentation, and your slide will be there.

## Common patterns

### Two-column layout

```tsx
<SlideContent columns={2}>
  <div>
    <h2 className="text-3xl font-semibold text-pe-dark mb-4">
      Left column
    </h2>
    <p>Content here</p>
  </div>
  <div>
    <h2 className="text-3xl font-semibold text-pe-dark mb-4">
      Right column
    </h2>
    <p>Content here</p>
  </div>
</SlideContent>
```

### Bullet points

```tsx
<ul className="list-disc list-inside space-y-3 text-xl">
  <li>First point</li>
  <li>Second point</li>
  <li>Third point</li>
</ul>
```

### Speaker attribution

```tsx
<p className="text-xl italic text-gray-600 mb-8">
  Speaker: Name
</p>
```

## Create a new presentation

See the full README.md for details on creating an entirely new presentation slideshow.

## Styling

Tailwind classes available:
- `text-pe-teal` - Teal (#319795)
- `text-pe-dark` - Dark teal (#1D4044)
- `text-pe-darker` - Darker teal (#0D2F33)
- `gradient-bg` - Teal gradient background
