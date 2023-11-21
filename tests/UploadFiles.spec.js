import { test, expect } from "@playwright/test";

test.skip("upload single file", async ({ page }) => {
  await page.goto("https://www.foundit.in/");

  await page
    .locator(
      "//div[@class='heroSection-buttonContainer_secondaryBtn__imgHolder']"
    )
    .click();

  await page
    .locator("#file-upload")
    .setInputFiles("tests/UploadFiles/QA remote job companies.pdf");

  await page.waitForTimeout(5000);
});

test("upload multiple files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests/UploadFiles/QA remote job companies.pdf",
      "tests/UploadFiles/QA remote job companie2.pdf",
    ]);

  await page.waitForTimeout(5000);

  // remove files

  await page.locator("#filesToUpload").setInputFiles([]);

  await page.waitForTimeout(5000);
});
