const { test, expect } = require('@playwright/test');

test('verify user information', async ({ page }) => {
    await page.goto('http://localhost:9000');
  
    await page.fill('id=email', 'max.mann@email.com');
    await page.fill('id=password', 'Passwort123');
  
    await page.click('button[type="submit"]');

    await page.waitForSelector('text=Max Mann');
    await page.waitForSelector('text=Maxstraße 1, 12345 Maxstadt');
    await page.waitForSelector('text=+49 123 456789');
  });

test('verify user information2', async ({ page }) => {
    await page.goto('http://localhost:9000');
  
    await page.fill('id=email', 'franka.frau@email.com');
    await page.fill('id=password', 'keinPasswort456');

    await page.click('button[type="submit"]');

    await page.waitForSelector('text=Franka Frau');
    await page.waitForSelector('text=Frankastraße 2, 67890 Frankastadt');
    await page.waitForSelector('text=+49 987 654321');
  });
  test('invalid login', async ({ page }) => {
    await page.goto('http://localhost:9000');
  
    await page.fill('id=email', 'invalid@email.com');
    await page.fill('id=password', 'invalidpassword');
  
    await page.click('button[type="submit"]');
    
    await page.waitForSelector('text=Um Daten zu sehen bitte einloggen.');
  });
test('no user information after logout', async ({ page }) => {
    await page.goto('http://localhost:9000');
  
    await page.fill('id=email', 'franka.frau@email.com');
    await page.fill('id=password', 'keinPasswort456');
  
    await page.click('button[type="submit"]');

    await page.waitForSelector('text=Franka Frau');
    await page.waitForSelector('text=Frankastraße 2, 67890 Frankastadt');
    await page.waitForSelector('text=+49 987 654321');

    await page.click('#logout');
    await page.waitForSelector('form.login_form');

    await page.waitForSelector('text=Um Daten zu sehen bitte einloggen.');
  });
