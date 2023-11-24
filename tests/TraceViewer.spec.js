import { test, expect } from "@playwright/test";

test("Home Page Test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Atikur Rahman");
  await page.locator("#loginpassword").fill("Atik@123");
  await page.locator("button[onclick='logIn()']").click();

  await page.waitForTimeout(5000);

  await page.locator("#logout2").click(); // logout
});

// failed Test

test.only("Home Page Test1", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Atikur Rahman");
  await page.locator("#loginpassword").fill("Atik@123");
  await page.locator("button[onclick='logIn()']").click();

  await page.waitForTimeout(5000);

  await page.locator("#logout").click(); // logout
});

// to view result in the Trace viewer > go to config.js file > add > trace: "on", in the use section
// Trace file will generated in the test-results file in the project directory
// to open trace file in the GUI mode > npx playwright show-trace test-results\TraceViewer-Home-Page-Test-chromium\trace.zip
