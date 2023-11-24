import { test, expect } from "@playwright/test";

test("page screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/index.php?route=cms/demo");
  //await page.screenshot({ path: "tests/Screenshoot/" + "HomePage.png" }); // default screenshot will save project folder
  await page.screenshot({
    path: "tests/Screenshoot/" + Date.now() + "HomePage.png",
  }); // screenshot will save with different name if we take multiple screenshoot
});
test("Full page screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/index.php?route=cms/demo");

  await page.screenshot({
    path: "tests/Screenshoot/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});
test.only("Elements screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/index.php?route=cms/demo");

  await page.locator("//a[@href='https://demo.opencart.com/']").screenshot({
    path: "tests/Screenshoot/" + Date.now() + "StorePage.png",
  });
});

// if we want to take automatic screenshoot for test > go to> config.js file add > screenshoot: "on" under use section
