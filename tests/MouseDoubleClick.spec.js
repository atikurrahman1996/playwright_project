import { test, expect } from "@playwright/test";

test("handle mouse hover action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const btnCopy = await page.locator("//button[normalize-space()='Copy Text']");
  // button double click
  await btnCopy.dblclick();

  // assertion

  const field2 = await page.locator("#field2");
  await expect(field2).toHaveValue("Hello World!");

  await page.waitForTimeout(5000);
});
