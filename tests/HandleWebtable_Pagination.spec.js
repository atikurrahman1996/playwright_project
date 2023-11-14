//const { test, expect } = require("@playwright/test")
import { test, expect } from "@playwright/test";

test("handle table pagination", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  // find total numbers of row and column

  const columns = await table.locator(" thead tr th");

  console.log(" the number of columns:", await columns.count());

  //expect(await columns.count()).toBe("4"); // assertions

  const rows = await table.locator("tbody tr");

  console.log(" the number of rows:", await rows.count());

  //expect(await rows.count()).toBe("5"); // assertions

  // seclect checkbox from the table - for product 4

  const matchRow = rows.filter({
    has: page.locator("td"),
    hasText: "Product 4",
  });
  await matchRow.locator("input").check();

  await page.waitForTimeout(5000);
});
