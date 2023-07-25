// export-login.test.js

const { test, expect } = require('@playwright/test');

loginTest('Login Test', async ({ page }) => {
  await page.goto('http://localhost:9000');

  await page.fill('id=email', 'erika.musterfrau@example.com');
  await page.fill('id=password', 'geheimesPasswort456');

  // Click the login button
  await page.click('button[type="submit"]');

  await page.waitForSelector('text=Erika Musterfrau');
  await page.waitForSelector('text=Beispielweg 456, 67890 Beispielstadt');
  await page.waitForSelector('text=+49 987 654321');
});

module.exports = { loginTest }; // Export the test function
