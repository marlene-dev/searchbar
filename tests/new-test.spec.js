const { test, expect } = require('@playwright/test');
const easyLogin = require('./export-login.js');

test('verify user information', async ({ page }) => {
  await easyLogin(page, 'max.mann@email.com', 'Passwort123');

  await page.waitForSelector('text=Max Mann');
  await page.waitForSelector('text=Maxstraße 1, 12345 Maxstadt');
  await page.waitForSelector('text=+49 123 456789');
});

test('verify user information2', async ({ page }) => {
  await easyLogin(page, 'franka.frau@email.com', 'keinPasswort456');

  await page.waitForSelector('text=Franka Frau');
  await page.waitForSelector('text=Frankastraße 2, 67890 Frankastadt');
  await page.waitForSelector('text=+49 987 654321');
});

test('no user information after logout', async ({ page }) => {
  await easyLogin(page, 'franka.frau@email.com', 'keinPasswort456');

  await page.waitForSelector('text=Franka Frau');
  await page.waitForSelector('text=Frankastraße 2, 67890 Frankastadt');
  await page.waitForSelector('text=+49 987 654321');

  await page.click('#logout');
  await page.waitForSelector('form.login_form');
  await page.waitForSelector('text=Um Daten zu sehen bitte einloggen.');
});