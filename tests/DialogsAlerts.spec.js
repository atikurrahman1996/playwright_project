import { test, expect } from "@playwright/test";

test.skip("handle js alerst with OK button", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling alert handling/ dialog window handler

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });
  await page.locator("button[onclick='myFunctionAlert()']").click();

  await page.waitForTimeout(5000);
});

test.skip("Confirmation Dialogs alert with OK & Cancel Button", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling alert handling/ dialog window handler

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept(); // close with OK button
    //await dialog.dismiss();  // close with cancel button
  });
  await page.locator("//button[normalize-space()='Confirm Box']").click();

  await expect(page.locator("#demo")).toHaveText("You pressed OK!");

  await page.waitForTimeout(5000);
});

test("Prompt Dialogs alert with OK/Cancel Button with Input Box", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling alert handling/ dialog window handler

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Atik"); // Input Atik and then close
  });
  await page.locator("button[onclick='myFunctionPrompt()']").click();

  await expect(page.locator("#demo")).toHaveText(
    "Hello Atik! How are you today?"
  );

  await page.waitForTimeout(5000);
});
