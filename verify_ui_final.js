import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2500 });
  await page.goto('http://localhost:5173');
  // Wait for the logo or some text to ensure it's loaded
  await page.waitForSelector('h1');
  await page.screenshot({ path: '/home/jules/verification/landing_page_final.png', fullPage: true });
  await browser.close();
})();
