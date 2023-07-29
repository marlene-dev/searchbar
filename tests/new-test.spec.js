const { test, expect } = require('@playwright/test');
const easyLogin = require('./export-login.js');

test('verify user information', async ({ page }) => {
  await easyLogin(page, 'max.mustermann@example.com', 'meinPasswort123');

  await page.waitForSelector('text=Max Mustermann');
  await page.waitForSelector('text=Musterstraße 123, 12345 Musterstadt');
  await page.waitForSelector('text=+49 123 456789');
});

test('verify user information2', async ({ page }) => {
  await easyLogin(page, 'erika.musterfrau@example.com', 'geheimesPasswort456');

  await page.waitForSelector('text=Erika Musterfrau');
  await page.waitForSelector('text=Beispielweg 456, 67890 Beispielstadt');
  await page.waitForSelector('text=+49 987 654321');
});

test('no user information after logout', async ({ page }) => {
  await easyLogin(page, 'erika.musterfrau@example.com', 'geheimesPasswort456');

  await page.waitForSelector('text=Erika Musterfrau');
  await page.waitForSelector('text=Beispielweg 456, 67890 Beispielstadt');
  await page.waitForSelector('text=+49 987 654321');

  await page.click('#logout');
  await page.waitForSelector('form.login_form');
  await page.waitForSelector('text=Um Daten zu sehen bitte einloggen.');
});