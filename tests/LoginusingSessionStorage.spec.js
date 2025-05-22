const { test, expect } = require('@playwright/test');

test('Complete Dashboard Scenario', async ({ page }) => {

    await test.step('Navigate and verify title', async () => {
      
        await page.goto('https://rahulshettyacademy.com/client/');
        
        await expect(page).toHaveTitle(/Let's Shop/);
        
  });

    await test.step('Navigate and  Verify dashboard URL', async () => {
      
        await expect(page).toHaveURL(/.*dashboard/);

      
  });

    await test.step('Navigate and Logout from the application', async () => {
      
        await page.getByRole('button', { name: ' Sign Out ' }).click();
    });
});
