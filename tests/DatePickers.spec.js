import { test, expect } from "@playwright/test";

test("handle date pickers/calenders", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#datepicker").fill("11/17/2023");

  await page.waitForTimeout(5000);
});
