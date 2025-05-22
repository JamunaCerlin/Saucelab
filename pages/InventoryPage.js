exports.InventoryPage = class InventoryPage {

    constructor(page, expect) {

        this.page = page;
        this.expect = expect;

        this.inventoryItems = page.locator('.inventory_item');
        this.itemName = page.locator('.inventory_item_name');
        this.addToCartButton = page.locator('#add-to-cart');
        this.removeButton = page.locator('#remove');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async selectItemByName(name) {
        await this.itemName.filter({ hasText: name }).click();
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async verifyItemAdded() {
        await this.expect(this.removeButton).toHaveText('Remove');
    }

    async goToCart() {
        await this.cartLink.click();
    }
};
