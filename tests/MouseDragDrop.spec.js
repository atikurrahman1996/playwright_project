import { test, expect } from "@playwright/test";

test("handle mouse hover action", async ({ page }) => {
  //await page.goto("https://demo.automationtesting.in/Static.html");
  await page.goto("https://demoqa.com/droppable/");

  /*
  const angular = await page.locator("#angular");
  const drp = await page.locator("//div[@id='droparea']");
  /*
  await angular.hover();
  await page.mouse.down();

  await selenium.hover();
  await page.mouse.up();
  */
  // await angular.dragTo(drp);

  const dragMe = await page.locator("#draggable");
  const droparea = await page.locator(
    "//div[@id='simpleDropContainer']//div[@id='droppable']"
  );

  await dragMe.dragTo(droparea);

  await page.waitForTimeout(5000);
});
