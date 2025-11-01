import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function captureSlides() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  const baseUrl = 'http://localhost:3001';
  const slides = ['tech-ai-2025'];

  for (const slide of slides) {
    await page.goto(`${baseUrl}/${slide}`);
    await page.waitForLoadState('networkidle');

    // Capture each slide by pressing arrow keys
    const slideCount = await page.evaluate(() => {
      const counter = document.querySelector('span[class*="min-w"]');
      if (counter) {
        const text = counter.textContent;
        const match = text.match(/\/ (\d+)/);
        return match ? parseInt(match[1]) : 6;
      }
      return 6;
    });

    for (let i = 0; i < slideCount; i++) {
      await page.screenshot({
        path: join(__dirname, `screenshot-${slide}-slide-${i + 1}.png`),
        fullPage: false
      });

      if (i < slideCount - 1) {
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(500);
      }
    }
  }

  await browser.close();
  console.log('Screenshots saved!');
}

captureSlides().catch(console.error);
