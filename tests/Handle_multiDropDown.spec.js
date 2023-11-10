import { test, expect } from "@playwright/test";

test("handle muti drop down and select multi dorpdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //await page.selectOption("#colors", "Red"); // select single option
  //await page.selectOption("#colors", ["Red", "Blue", "Yellow"]); // select multiple options

  // assertions

  //const options = await page.$$("#colors option");
  // console.log("the number of options:", options.length); // should be 5

  // check presence of value in the drop down

  const options = await page.$$("#colors option");

  for (const option of options) {
    console.log(await option.textContent());
  }

  await page.waitForTimeout(5000);
});
