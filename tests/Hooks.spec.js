import { test, expect } from "@playwright/test";

test("Home Page Test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Atikur Rahman");
  await page.locator("#loginpassword").fill("Atik@123");
  await page.locator("button[onclick='logIn()']").click();

  await page.waitForTimeout(5000);

  // Home page total products

  const products = await page.$$(".hrefch"); // finding totals products
  await expect(products).toHaveLength(9); // assertions

  await page.locator("#logout2").click(); // logout

  await page.waitForTimeout(5000);
});

test.only("Add product to cart test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Atikur Rahman");
  await page.locator("#loginpassword").fill("Atik@123");
  await page.locator("button[onclick='logIn()']").click();

  await page.waitForTimeout(5000);

  // add products to cart

  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();

  // verify the dialog window

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
  await page.waitForTimeout(5000);

  await page.locator("#logout2").click(); // logout
});

// using beforeEach, afterEach, beforeAll, afterAll
// we need to use browser ficture insted of "page"
