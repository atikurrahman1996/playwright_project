import { test, expect } from "@playwright/test";

test("country dropdown", async ({ page }) => {
  await page.goto("http://autopract.com/selenium/dropdown4/");
  await page.locator("button.dropdown-toggle").click();

  await page
    .locator("ul.dropdown-menu")
    .locator("li")
    .filter({ hasText: "Bangladesh" })
    .click();
});
