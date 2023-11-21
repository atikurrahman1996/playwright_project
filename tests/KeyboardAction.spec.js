import { test, expect } from "@playwright/test";

test("keyboard actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  await page
    .locator("textarea[placeholder='Paste one version of the text here.']")
    .type("Welcome to Automation");

  // Ctrl + A = selelt the text
  await page.keyboard.press("Control+A");

  //Ctrl + C == copy the text
  await page.keyboard.press("Control+C");

  //Tab

  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  //Ctrl + V =text paste in the text box
  await page.keyboard.press("Control+V");

  await page.waitForTimeout(5000);
});
