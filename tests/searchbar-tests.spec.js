const { test, expect } = require('@playwright/test');
const loginTest = require('./export-login.test.js');

test('Logout Test', async ({ page }) => {
  // Führen Sie den ersten Test aus, indem Sie die importierte Funktion aufrufen
  await loginTest(page);
  // Setzen Sie hier die Schritte für den zweiten Test fort
  await page.click('#logout');
  await page.waitForSelector('form.login_form');
  await page.waitForSelector('text=Um Daten zu sehen bitte einloggen.');
});
// test('verify user information', async ({ page }) => {
//     await page.goto('http://localhost:9000');
  
//     await page.fill('id=email', 'max.mustermann@example.com');
//     await page.fill('id=password', 'meinPasswort123');
  
//     // Click the login button
//     await page.click('button[type="submit"]');

//     await page.waitForSelector('text=Max Mustermann');
//     await page.waitForSelector('text=Musterstraße 123, 12345 Musterstadt');
//     await page.waitForSelector('text=+49 123 456789');
//   });

// test('verify user information2', async ({ page }) => {
//     await page.goto('http://localhost:9000');
  
//     await page.fill('id=email', 'erika.musterfrau@example.com');
//     await page.fill('id=password', 'geheimesPasswort456');
  
//     // Click the login button
//     await page.click('button[type="submit"]');

//     await page.waitForSelector('text=Erika Musterfrau');
//     await page.waitForSelector('text=Beispielweg 456, 67890 Beispielstadt');
//     await page.waitForSelector('text=+49 987 654321');
//   });
// test('no user information after logout', async ({ page }) => {
//     await page.goto('http://localhost:9000');
  
//     await page.fill('id=email', 'erika.musterfrau@example.com');
//     await page.fill('id=password', 'geheimesPasswort456');
  
//     // Click the login button
//     await page.click('button[type="submit"]');

//     await page.waitForSelector('text=Erika Musterfrau');
//     await page.waitForSelector('text=Beispielweg 456, 67890 Beispielstadt');
//     await page.waitForSelector('text=+49 987 654321');

//     await page.click('#logout');
//     await page.waitForSelector('form.login_form');

//     await page.waitForSelector('text=Um Daten zu sehen bitte einloggen.');
//   });
