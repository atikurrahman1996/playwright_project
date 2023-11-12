import { test, expect } from "@playwright/test";

test("handle hidden items in drop down", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("button[type='submit']").click();

  // locate PIM section

  await page.locator("//span[normalize-space()='PIM']").click();
  await page
    .locator(
      "div:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)"
    )
    .click();

  await page.waitForTimeout(3000);

  const options = await page.$$("//div[@role='listbox']//span");

  for (let option of options) {
    const jobTitle = await option.textContent();
    //console.log(jobTitle);   // if we want to see all the job titles

    // If we want to select one job title

    if (jobTitle.includes("QA Engineer")) {
      await option.click();
      break;
    }
  }
  await page.waitForTimeout(5000);
});
