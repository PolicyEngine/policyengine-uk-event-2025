# PolicyEngine event presentations

A modular Next.js app for hosting multiple slide presentations, styled with PolicyEngine branding.

## Features

- Multiple presentations in one app with a menu system
- Clean, full-screen layout optimised for presentations
- PolicyEngine branding (main logo on first/last slides, profile logo on middle slides)
- Keyboard navigation (arrow keys, space, F11 for fullscreen)
- GitHub Pages deployment ready

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the menu.

## Creating a new presentation

### 1. Create a slideshow directory

```bash
mkdir -p slideshows/my-event-2025/slides
```

### 2. Create slide components

Create slides in `slideshows/my-event-2025/slides/`:

```tsx
// slideshows/my-event-2025/slides/MySlide.tsx
import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function MySlide() {
  return (
    <Slide>
      <SlideTitle>My slide title</SlideTitle>
      <SlideContent size="md">
        <p>Slide content goes here</p>
      </SlideContent>
    </Slide>
  );
}
```

### 3. Create a config file

```tsx
// slideshows/my-event-2025/config.ts
import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import MySlide from './slides/MySlide';
import EndSlide from './slides/EndSlide';

export const myEvent2025Config: SlideshowConfig = {
  id: 'my-event-2025',
  title: 'My Event Title',
  description: 'Brief description of the event',
  date: '1 January 2025',
  location: 'Event Location',
  slides: [
    CoverSlide,
    MySlide,
    EndSlide,
  ],
};
```

### 4. Register the slideshow

Add it to `lib/slideshows.ts`:

```tsx
import { myEvent2025Config } from '@/slideshows/my-event-2025/config';

export const slideshows: SlideshowConfig[] = [
  event2025Config,
  myEvent2025Config, // Add here
];
```

## Slide components

### Slide

Main slide container with automatic logo placement:

```tsx
<Slide>...</Slide>                    // Regular slide
<Slide isCover>...</Slide>           // Cover slide with main logo
<Slide isEnd>...</Slide>             // End slide with main logo
```

### SlideTitle

Styled title with automatic styling:

```tsx
<SlideTitle>Title</SlideTitle>              // Regular slide title
<SlideTitle isCover>Title</SlideTitle>      // Cover slide title
<SlideTitle isEnd>Title</SlideTitle>        // End slide title
```

### SlideContent

Content area with sizing and column options:

```tsx
<SlideContent size="sm">...</SlideContent>    // Small text
<SlideContent size="md">...</SlideContent>    // Medium text (default)
<SlideContent size="lg">...</SlideContent>    // Large text

<SlideContent columns={2}>                    // Two-column layout
  <div>Left</div>
  <div>Right</div>
</SlideContent>
```

## Keyboard navigation

- **Arrow keys**: Navigate between slides
- **Space**: Next slide
- **Home**: First slide
- **End**: Last slide
- **F** or **F11**: Toggle fullscreen
- **Escape**: Exit fullscreen

## Building for production

```bash
npm run build
```

Output will be in the `out/` directory.

## Deploying to GitHub Pages

The app includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to main.

## Project structure

```
slides/
├── app/                          # Next.js app directory
│   ├── [slideshow]/page.tsx     # Dynamic slideshow viewer
│   ├── page.tsx                 # Menu page
│   └── layout.tsx
├── components/                   # Shared slide components
│   ├── Slide.tsx
│   ├── SlideTitle.tsx
│   └── SlideContent.tsx
├── slideshows/                  # All presentations
│   └── event-2025/
│       ├── config.ts            # Slideshow configuration
│       └── slides/              # Individual slide components
├── lib/                         # Utilities
│   ├── slideshows.ts           # Slideshow registry
│   └── types.ts                # TypeScript types
└── public/
    └── logos/                   # Logo files
```

## Working with Claude Code

This structure is designed to work well with Claude Code:

1. "Add a new slide to event-2025 about [topic]" - Claude will create a new slide component
2. "Create a new presentation for [event]" - Claude will set up a new slideshow directory
3. "Update the styling of all slides" - Claude can modify the shared components

The modular structure makes it easy for AI assistants to understand and modify presentations.
