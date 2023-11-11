import { test, expect } from "@playwright/test";

test("country dropdown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.locator("#src").fill("Delhi");

  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI ')]/div/text[1]"); // own made xpath

  const citiesOptions = await page.$$(
    "//li[contains(@class,'sc-iwsKbI ')]/div/text[1]"
  );

  for (let option of citiesOptions) {
    const value = await option.textContent();
    console.log(value);
  }
});
