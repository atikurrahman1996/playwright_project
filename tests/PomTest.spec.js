import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

// Login

test("Login Page Test", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("Atikur Rahman", "Atik@123");

  await page.waitForTimeout(3000);
});

// HomePage

test("Home Page Test", async ({ page }) => {});

// CartPage

test("Cart Page Test", async ({ page }) => {});
