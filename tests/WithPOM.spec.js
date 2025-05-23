const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');

const { InventoryPage } = require('../pages/InventoryPage');

const { CartPage } = require('../pages/CartPage');

test('Sauce Demo Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const inventoryPage = new InventoryPage(page, expect);
    
    const cartPage = new CartPage(page,expect);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login('visual_user', 'secret_sauce');

    await page.waitForLoadState('networkidle');

    await inventoryPage.selectItemByName('Sauce Labs Onesie');

    await inventoryPage.addItemToCart();

    await inventoryPage.verifyItemAdded();

    await inventoryPage.goToCart();

    await cartPage.verifyItemInCart('Sauce Labs Onesie');
    
    await cartPage.logout();
});
