import { test, expect } from '@playwright/test';

test.describe('VAT Analysis Presentation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/vat-analysis');
    await page.waitForLoadState('networkidle');
  });

  test('should load the presentation', async ({ page }) => {
    // Check that the slideshow viewer is present
    await expect(page.locator('[role="main"]')).toBeVisible();
  });

  test('should display the cover slide correctly', async ({ page }) => {
    // Check cover slide elements
    await expect(page.locator('text=VAT threshold reform and synthetic data')).toBeVisible();
    await expect(page.locator('text=Nikhil Woodruff')).toBeVisible();
    await expect(page.locator('text=PolicyEngine')).toBeVisible();
  });

  test('should navigate through all slides', async ({ page }) => {
    const slideCount = 10; // Total number of slides in VAT presentation

    for (let i = 1; i < slideCount; i++) {
      // Navigate to next slide
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(300); // Wait for transition

      // Check that slide content is visible
      const slideContent = page.locator('.w-full.h-full.flex.flex-col');
      await expect(slideContent).toBeVisible();
    }
  });

  test('should display intro slide with bullet points', async ({ page }) => {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    // Check for key content
    await expect(page.locator('text=£90,000')).toBeVisible();
    await expect(page.locator('text=£85,000')).toBeVisible();
    await expect(page.locator('text=synthetic firm microdata')).toBeVisible();
  });

  test('should display firm distribution slide with images', async ({ page }) => {
    // Navigate to firm distribution slide
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    await expect(page.locator('text=Firm turnover distribution')).toBeVisible();

    // Check that images are present
    const images = page.locator('img[alt*="Distribution"]');
    await expect(images).toHaveCount(2);
  });

  test('should display turnover distributions chart', async ({ page }) => {
    // Navigate to turnover distributions slide
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    await expect(page.locator('text=Turnover distributions')).toBeVisible();
    await expect(page.locator('img[alt*="bunching"]')).toBeVisible();
  });

  test('should display firm microdata slide with two columns', async ({ page }) => {
    // Navigate to firm microdata slide
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Firm-level microdata')).toBeVisible();
    await expect(page.locator('text=synthetic firm microdata')).toBeVisible();
    await expect(page.locator('text=200')).toBeVisible(); // calibration targets
  });

  test('should display dynamic modelling slide with equations', async ({ page }) => {
    // Navigate to dynamic modelling slide
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Firm VAT dynamic modelling')).toBeVisible();
    await expect(page.locator('text=Cobb–Douglas')).toBeVisible();
    await expect(page.locator('text=sigmoid tax schedule')).toBeVisible();
  });

  test('should display behavioural extension slide', async ({ page }) => {
    // Navigate to behavioural extension slide
    for (let i = 0; i < 7; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Behavioural extension and elasticity')).toBeVisible();
    await expect(page.locator('text=No-notch')).toBeVisible();
    await expect(page.locator('text=Elasticity Estimation')).toBeVisible();
  });

  test('should display HMRC comparison slide', async ({ page }) => {
    // Navigate to HMRC comparison slide
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Comparison with HMRC projections')).toBeVisible();
    await expect(page.locator('text=£85k to £90k')).toBeVisible();
  });

  test('should display static simulation dashboard', async ({ page }) => {
    // Navigate to static simulation slide
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Static simulation dashboard')).toBeVisible();
    await expect(page.locator('img[alt*="simulation"]')).toBeVisible();
  });

  test('should display end slide', async ({ page }) => {
    // Navigate to end slide
    for (let i = 0; i < 9; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }

    await expect(page.locator('text=Thank you')).toBeVisible();
    await expect(page.locator('text=Questions?')).toBeVisible();
  });

  test('should navigate backwards through slides', async ({ page }) => {
    // Go to end
    for (let i = 0; i < 9; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(100);
    }

    // Navigate back to start
    for (let i = 0; i < 9; i++) {
      await page.keyboard.press('ArrowLeft');
      await page.waitForTimeout(100);
    }

    // Should be back at cover slide
    await expect(page.locator('text=VAT threshold reform and synthetic data')).toBeVisible();
  });

  test('all slides should fill available space', async ({ page }) => {
    const slideCount = 10;

    for (let i = 0; i < slideCount; i++) {
      if (i > 0) {
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(300);
      }

      // Check that the main content div has full width/height classes
      const contentDiv = page.locator('.w-full.h-full.flex.flex-col').first();
      await expect(contentDiv).toBeVisible();

      // Check that content is not cut off
      const viewport = page.viewportSize();
      if (viewport) {
        const box = await contentDiv.boundingBox();
        if (box) {
          expect(box.width).toBeGreaterThan(viewport.width * 0.8);
        }
      }
    }
  });

  test('should handle keyboard navigation correctly', async ({ page }) => {
    // Test various keyboard shortcuts
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(200);

    // Should be back at first slide
    await expect(page.locator('text=Nikhil Woodruff')).toBeVisible();

    // Test going to end and back
    await page.keyboard.press('End');
    await page.waitForTimeout(300);
    await expect(page.locator('text=Thank you')).toBeVisible();

    await page.keyboard.press('Home');
    await page.waitForTimeout(300);
    await expect(page.locator('text=Nikhil Woodruff')).toBeVisible();
  });
});