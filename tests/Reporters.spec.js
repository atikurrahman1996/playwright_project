import { test, expect } from "@playwright/test";

test("Test1", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
});
test("Test2", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
});
test("Test3", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

// by default we can see HTML report
// to see report in list format -use "list" in the config.js file under reporter or write  npx playwright test --reporter=list in the terminal
// to see line report - npx playwright test --reporter=line or add "line" in config file
//to see json report - npx playwright test --reporter=json  or add reporter: [['json', { outputFile: 'results.json' }]]
