import { test, expect } from "@playwright/test";

test("country dropdown", async ({ page }) => {
  await page.goto("http://autopract.com/selenium/dropdown4/");
  await page.locator("button.dropdown-toggle").click();

  // select text Bangladesh

  await page
    .locator("ul.dropdown-menu")
    .locator("li")
    .filter({ hasText: "Bangladesh" })
    .click();

  // print all the drop down value

  const options = await page.$$("ul>li");
  for (let option of options) {
    const value = await option.textContent();
    console.log("value is", value);
  }
});
