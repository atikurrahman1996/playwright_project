import { test, expect } from "@playwright/test";

test("handle drop down", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#country").selectOption("Japan");
  /*
  await page.locator("#country").selectOption({ label: "Japan" });
  await page.locator("#country").selectOption({ value: "canada" });
  await page.locator("#country").selectOption({ index: "1" }); // all 4 type of select methods are same
*/
  /*
// assertions - check number of options in drop-down (approch-1)

  const options = await page.locator("#country option");
  await expect(options).toHaveCount(10);
*/
  //check number of options in drop-down (approch-2)

  //const options = await page.$$("#country option");
  //console.log("number of options:", options.length);

  // check presence of value in the drop down (1)

  //const content = await page.locator("#country").textContent();

  //await expect(content.includes("Japan")).toBeTruthy();

  // check presence of value in the drop down (2)

  const options = await page.$$("#country option");

  for (const option of options) {
    console.log(await option.textContent());
  }

  await page.waitForTimeout(5000);
});
