const { chromium } = require('@playwright/test');

module.exports = async () => {

  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://rahulshettyacademy.com/client');

  await page.fill('#userEmail', 'jamunacerlin6545@gmail.com');

  await page.fill('#userPassword', 'Test@1234');

  await page.click('#login');

  await page.screenshot({ path: 'screenshot.png' }); 

  await context.storageState({ path: 'state.json' });

  await browser.close();
};