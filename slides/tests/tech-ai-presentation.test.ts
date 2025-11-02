import { test, expect } from '@playwright/test';

test.describe('Tech AI Presentation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/tech-ai-2025');
    await page.waitForLoadState('networkidle');
  });

  test('should load the presentation', async ({ page }) => {
    await expect(page.locator('[role="main"]')).toBeVisible();
  });

  test('should display the cover slide correctly', async ({ page }) => {
    await expect(page.locator('text=Technology and AI at PolicyEngine')).toBeVisible();
    await expect(page.locator('text=Nikhil Woodruff')).toBeVisible();
    await expect(page.locator('text=PolicyEngine')).toBeVisible();
  });

  test('should navigate through all slides', async ({ page }) => {
    const slideCount = 6; // Total number of slides

    for (let i = 1; i < slideCount; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(300);

      const slideContent = page.locator('.w-full.h-full.flex.flex-col');
      await expect(slideContent).toBeVisible();
    }
  });

  test('should display context slide with bullet points', async ({ page }) => {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    await expect(page.locator('text=Technology at PolicyEngine')).toBeVisible();
    await expect(page.locator('text=SOTA')).toBeVisible();
    await expect(page.locator('text=agile')).toBeVisible();
    await expect(page.locator('text=accuracy and impact')).toBeVisible();

    // Check that content is centered vertically
    const contentDiv = page.locator('.flex-1.flex.items-center').first();
    await expect(contentDiv).toBeVisible();
  });

  test('should display AI uses slide', async ({ page }) => {
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    await expect(page.locator('text=AI at PolicyEngine: two uses')).toBeVisible();
    await expect(page.locator('text=Building internally')).toBeVisible();
    await expect(page.locator('text=Communicating externally')).toBeVisible();
    await expect(page.locator('text=LLM coding agents')).toBeVisible();
  });

  test('should display building internally slide', async ({ page }) => {
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Building internally')).toBeVisible();
    await expect(page.locator('text=Encoding tax-benefit reforms')).toBeVisible();
    await expect(page.locator('text=Custom data imputation')).toBeVisible();
    await expect(page.locator('text=Pulling out the outputs')).toBeVisible();
    await expect(page.locator('text=LFS, EHS')).toBeVisible();
  });

  test('should display communicating externally slide', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Communicating externally')).toBeVisible();
    await expect(page.locator('text=Interactive policy visualisations')).toBeVisible();
    await expect(page.locator('text=Custom calculators and apps')).toBeVisible();
    await expect(page.locator('text=Automated slide decks')).toBeVisible();
    await expect(page.locator('text=Claude Code')).toBeVisible();
  });

  test('should display end slide', async ({ page }) => {
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Thank you')).toBeVisible();
    await expect(page.locator('text=Questions?')).toBeVisible();
  });

  test('all slides should use BulletList component', async ({ page }) => {
    // Check context slide
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    let bullets = page.locator('.w-4.h-4.bg-pe-teal.rounded-full');
    await expect(bullets).toHaveCount(3);

    // Check AI uses slide
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    bullets = page.locator('.w-4.h-4.bg-pe-teal.rounded-full');
    await expect(bullets).toHaveCount(2);

    // Check building slide
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    bullets = page.locator('.w-4.h-4.bg-pe-teal.rounded-full');
    await expect(bullets).toHaveCount(3);

    // Check external slide
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    bullets = page.locator('.w-4.h-4.bg-pe-teal.rounded-full');
    await expect(bullets).toHaveCount(3);
  });

  test('all content slides should fill available space', async ({ page }) => {
    const contentSlides = 4; // Slides 2-5 have content

    for (let i = 0; i < contentSlides; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(300);

      // Check for the flex layout structure
      const contentDiv = page.locator('.w-full.h-full.flex.flex-col').first();
      await expect(contentDiv).toBeVisible();

      // Check for centered content wrapper
      const centeredContent = page.locator('.flex-1.flex.items-center').first();
      await expect(centeredContent).toBeVisible();
    }
  });

  test('should have consistent SlideTitle styling', async ({ page }) => {
    const slides = [
      { index: 1, title: 'Technology at PolicyEngine' },
      { index: 2, title: 'AI at PolicyEngine: two uses' },
      { index: 3, title: 'Building internally' },
      { index: 4, title: 'Communicating externally' }
    ];

    for (const slide of slides) {
      for (let i = 0; i < slide.index; i++) {
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(200);
      }

      const title = page.locator(`text="${slide.title}"`).first();
      await expect(title).toBeVisible();

      // Check that title has the teal color and border
      const titleElement = page.locator('.text-6xl.font-bold.text-pe-teal.pb-5.border-b-4.border-pe-teal').first();
      await expect(titleElement).toBeVisible();

      // Go back to start for next iteration
      await page.keyboard.press('Home');
      await page.waitForTimeout(200);
    }
  });

  test('should handle keyboard navigation', async ({ page }) => {
    // Test arrow navigation
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await expect(page.locator('text=Technology at PolicyEngine')).toBeVisible();

    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(200);
    await expect(page.locator('text=Nikhil Woodruff')).toBeVisible();

    // Test End/Home keys
    await page.keyboard.press('End');
    await page.waitForTimeout(300);
    await expect(page.locator('text=Thank you')).toBeVisible();

    await page.keyboard.press('Home');
    await page.waitForTimeout(300);
    await expect(page.locator('text=Technology and AI at PolicyEngine')).toBeVisible();
  });

  test('should have proper subtitle formatting', async ({ page }) => {
    // Navigate to slides with subtitles
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    // AI uses slide has subtitle
    const subtitle = page.locator('text=We use AI in two main ways:');
    await expect(subtitle).toBeVisible();

    // Check building slide subtitle
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    const buildingSubtitle = page.locator('text=LLM coding agents help us model the household sector');
    await expect(buildingSubtitle).toBeVisible();

    // Check external slide subtitle
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    const externalSubtitle = page.locator('text=Dashboards, apps, and presentations');
    await expect(externalSubtitle).toBeVisible();
  });
});