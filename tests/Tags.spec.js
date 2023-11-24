import { test, expect } from "@playwright/test";

test("Test1@sanity", async ({ page }) => {
  console.log(" This is sample sanity test1....");
});
test("Test2@sanity", async ({ page }) => {
  console.log(" This is sample sanity test2....");
});
test("Test3@regression", async ({ page }) => {
  console.log(" This is sample sanity test3....");
});
test("Test4@regression", async ({ page }) => {
  console.log(" This is sample sanity test4....");
});

test("Test5@sanity@regression", async ({ page }) => {
  console.log(" This is sample sanity test5....");
});

// to show specific report use >npx playwright test --grep @sanity
// to show specific report use >npx playwright test --grep @regression
// to show specific report use >npx playwright test --grep @sanity@regression
//npx playwright test Tags.spec.js --project chromium --headed --grep "@sanity@regression"
