import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const BACKPACK = 'sauce-labs-backpack';

test.describe('Carrito y checkout', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('agregar producto al carrito', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addToCart(BACKPACK);
    await expect(inventory.cartBadge).toHaveText('1');
  });

  test('quitar producto del carrito', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addToCart(BACKPACK);
    await inventory.removeFromCart(BACKPACK);
    await expect(inventory.cartBadge).toHaveCount(0);
  });

  test('checkout completo', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const checkout = new CheckoutPage(page);

    await inventory.addToCart(BACKPACK);
    await inventory.openCart();
    await checkout.start();
    await checkout.fillInfo('Jony', 'QA', '64000');
    await checkout.finish();

    await expect(checkout.completeHeader).toHaveText('Thank you for your order!');
  });
});
