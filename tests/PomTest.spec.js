import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";

// Login

test("Login Home and Cart Page Test", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("Atikur Rahman", "Atik@123");

  await page.waitForTimeout(3000);

  // HomePage

  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(3000);
  await home.gotoCart();

  // Cart Page

  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Nexus 6");

  expect(await status).toBe(true);
});
