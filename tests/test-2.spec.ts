import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await page.getByLabel("", { exact: true }).locator("span").nth(1).click();
  await page.getByRole("treeitem", { name: "Bangladesh" }).click();
});
