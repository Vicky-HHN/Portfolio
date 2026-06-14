const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport for desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000); // Wait for animations
  await page.screenshot({ path: 'samsung_desktop.png', fullPage: true });

  // Set viewport for mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'samsung_mobile.png', fullPage: true });

  await browser.close();
})();
