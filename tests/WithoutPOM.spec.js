const { test, expect } = require('@playwright/test')

test("Sauce lab", async ({ page }) => {
    
    await page.goto("https://www.saucedemo.com/")
    
    await page.locator("#user-name").fill("visual_user")

    await page.locator("#password").fill("secret_sauce")

    await page.locator("#login-button").click()

    await page.waitForLoadState('networkidle')

    const items = await page.locator('.inventory_item')

    await items.locator('.inventory_item_name').filter({ hasText: "Sauce Labs Onesie" }).click()
    
    await page.locator('#add-to-cart').click()

    await expect(page.locator('#remove')).toHaveText("Remove")

    await page.locator('.shopping_cart_link').click()
    
    await expect(page.locator("a[id*='title_link'] div").filter({hasText:"Sauce Labs Onesie"})).toBeVisible()

    await page.locator('#react-burger-menu-btn').click()
    
    await page.locator('#logout_sidebar_link').click()

})