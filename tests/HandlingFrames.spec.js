import { test, expect } from "@playwright/test";

test("handling frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // finding total frames

  const allFrames = await page.frames();
  console.log("Numbers of frames:", allFrames.length);

  // approach 1 - using name or url

  //const frame = page.frame('frame-login'); // if name is present we can write like this

  const frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  frame1.fill("input[name='mytext1']", "Hello Atik!");

  await page.waitForTimeout(5000);
});
