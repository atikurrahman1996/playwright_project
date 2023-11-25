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

// To see Allure report: Install> : npm i -D @playwright/test allure-playwright
// Install Allure commandline: npm install -g allure-commandline --save-dev
// To see allure report add > reporter: "allure-playwright"; in config file or write - npx playwright test --reporter=allure-playwright
//Generate Allure Report: allure generate my-allure-results -o allure-report --clean
//Open Allure Report: allure open allure-report
