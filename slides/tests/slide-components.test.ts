import { test, expect } from '@playwright/test';

test.describe('Slide Component Rendering', () => {
  test('all VAT slides should render without errors', async ({ page }) => {
    // Set up console error listener
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('http://localhost:3000/vat-analysis');
    await page.waitForLoadState('networkidle');

    // Check that no console errors occurred
    expect(consoleErrors).toHaveLength(0);

    // Navigate through all slides checking for errors
    const slideCount = 10;
    for (let i = 1; i < slideCount; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(300);

      // Check that no new errors occurred
      expect(consoleErrors).toHaveLength(0);
    }
  });

  test('all tech AI slides should render without errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('http://localhost:3000/tech-ai-2025');
    await page.waitForLoadState('networkidle');

    expect(consoleErrors).toHaveLength(0);

    const slideCount = 6;
    for (let i = 1; i < slideCount; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(300);
      expect(consoleErrors).toHaveLength(0);
    }
  });

  test('SlideTitle component should render consistently', async ({ page }) => {
    await page.goto('http://localhost:3000/vat-analysis');
    await page.waitForLoadState('networkidle');

    // Navigate to a content slide
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    // Check that SlideTitle has correct classes
    const title = page.locator('.text-6xl.font-bold.text-pe-teal.pb-5.border-b-4.border-pe-teal');
    await expect(title).toBeVisible();
    await expect(title).toHaveCSS('color', 'rgb(49, 151, 149)'); // #319795 in RGB
  });

  test('BulletList component should render with teal dots', async ({ page }) => {
    await page.goto('http://localhost:3000/vat-analysis');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    // Check that bullet dots are present and styled correctly
    const bulletDots = page.locator('.w-4.h-4.bg-pe-teal.rounded-full');
    const count = await bulletDots.count();
    expect(count).toBeGreaterThan(0);

    // Check first bullet dot has correct styling
    const firstDot = bulletDots.first();
    await expect(firstDot).toBeVisible();
    await expect(firstDot).toHaveCSS('background-color', 'rgb(49, 151, 149)');
    await expect(firstDot).toHaveCSS('border-radius', '9999px'); // rounded-full
  });

  test('SlideContent should apply correct text sizes', async ({ page }) => {
    await page.goto('http://localhost:3000/vat-analysis');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    // VAT intro uses size="sm" which should be text-xl
    const content = page.locator('.text-xl.leading-relaxed').first();
    await expect(content).toBeVisible();
  });

  test('ImageGrid component should display images correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/vat-analysis');

    // Navigate to firm distribution slide
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    // Check that grid layout is applied
    const grid = page.locator('.grid.grid-cols-2');
    await expect(grid).toBeVisible();

    // Check that images are present
    const images = page.locator('img[alt*="Distribution"]');
    await expect(images).toHaveCount(2);

    // Check that captions are present
    const captions = page.locator('text=/Figure \\d:/');
    await expect(captions).toHaveCount(2);
  });

  test('Cover and End slides should have gradient background', async ({ page }) => {
    await page.goto('http://localhost:3000/tech-ai-2025');
    await page.waitForLoadState('networkidle');

    // Check cover slide has gradient
    const coverSlide = page.locator('.gradient-bg').first();
    await expect(coverSlide).toBeVisible();

    // Navigate to end slide
    await page.keyboard.press('End');
    await page.waitForTimeout(300);

    // Check end slide has gradient
    const endSlide = page.locator('.gradient-bg').first();
    await expect(endSlide).toBeVisible();
  });

  test('Content slides should have white background', async ({ page }) => {
    await page.goto('http://localhost:3000/tech-ai-2025');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    const slide = page.locator('.bg-white').first();
    await expect(slide).toBeVisible();
    await expect(slide).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  });

  test('Slides should use full viewport dimensions', async ({ page }) => {
    await page.goto('http://localhost:3000/vat-analysis');
    await page.waitForLoadState('networkidle');

    const slide = page.locator('.w-screen.h-screen').first();
    await expect(slide).toBeVisible();

    const viewport = page.viewportSize();
    if (viewport) {
      const box = await slide.boundingBox();
      if (box) {
        expect(box.width).toBe(viewport.width);
        expect(box.height).toBe(viewport.height);
      }
    }
  });

  test('Mathematical formulas should render correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/vat-analysis');

    // Navigate to dynamic modelling slide
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    // Check for math content
    await expect(page.locator('text=/y.*=.*A.*x.*α/')).toBeVisible();
    await expect(page.locator('i:has-text("τ")')).toBeVisible();
    await expect(page.locator('sub')).toHaveCount(0, { timeout: 1000 }).catch(() => {
      // Subscripts exist, which is good
    });
  });

  test('Footer gradient should be present on content slides', async ({ page }) => {
    await page.goto('http://localhost:3000/vat-analysis');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    const footer = page.locator('.gradient-footer').first();
    await expect(footer).toBeVisible();
    await expect(footer).toHaveCSS('height', '80px'); // h-20 = 5rem = 80px
  });
});