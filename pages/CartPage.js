exports.CartPage = class CartPage {

    constructor(page,expect) {

        this.page = page;
        this.expect = expect;
        this.cartItem = page.locator("a[id*='title_link'] div");
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async verifyItemInCart(itemName) {
        await this.expect(this.cartItem.filter({ hasText: itemName })).toBeVisible();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
};
