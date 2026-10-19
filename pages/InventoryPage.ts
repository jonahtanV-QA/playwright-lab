import { type Page, type Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addToCart(item: string) {
    await this.page.locator(`[data-test="add-to-cart-${item}"]`).click();
  }

  async removeFromCart(item: string) {
    await this.page.locator(`[data-test="remove-${item}"]`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
