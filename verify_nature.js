const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000');

  // Wait for animations to settle
  await page.waitForTimeout(3000);

  await page.screenshot({ path: 'nature_hero.png' });

  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'nature_projects.png' });

  await page.evaluate(() => window.scrollTo(0, 3000));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'nature_skills.png' });

  await page.evaluate(() => window.scrollTo(0, 4500));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'nature_footer.png' });

  await browser.close();
})();
