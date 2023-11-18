import { test, expect } from "@playwright/test";

test("handle mouse hover action", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  //await page.locator(".context-menu-one.btn.btn-neutral").click(); // right click button

  // right click button
  const button = await page.locator(".context-menu-one.btn.btn-neutral");

  await button.click({ button: "right" });

  await page.waitForTimeout(5000);
});
