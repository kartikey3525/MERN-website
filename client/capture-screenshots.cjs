const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function captureScreenshots() {
  const screenshotsDir = path.join(__dirname, 'screenshots');

  // Create screenshots directory if it doesn't exist
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const baseUrl = 'http://localhost:5173';

  const pages = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'contact', path: '/contact' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'register', path: '/register' },
    { name: 'login', path: '/login' },
    { name: 'error', path: '/nonexistent-page' }
  ];

  console.log('📸 Starting screenshot capture...\n');

  for (const pageInfo of pages) {
    try {
      console.log(`Capturing ${pageInfo.name}...`);
      await page.goto(`${baseUrl}${pageInfo.path}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });

      // Wait for animations to settle
      await page.waitForTimeout(2000);

      // Take full page screenshot
      await page.screenshot({
        path: path.join(screenshotsDir, `${pageInfo.name}.png`),
        fullPage: true
      });

      console.log(`✅ ${pageInfo.name}.png saved\n`);
    } catch (error) {
      console.error(`❌ Failed to capture ${pageInfo.name}: ${error.message}\n`);
    }
  }

  await browser.close();
  console.log('✨ Screenshot capture complete!');
  console.log(`📁 Screenshots saved to: ${screenshotsDir}\n`);
}

captureScreenshots().catch(console.error);
