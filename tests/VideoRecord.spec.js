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

// failed test

test.only("Home Page Test2", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Atikur Rahman");
  await page.locator("#loginpassword").fill("Atik@123");
  await page.locator("button[onclick='logIn()']").click();

  await page.waitForTimeout(5000);

  await page.locator("#logout").click(); // logout
});

// if we want to record automatic video for test > go to> config.js file add > video: "on" under use section
