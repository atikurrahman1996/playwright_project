import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Atikur Rahman');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Atik@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});

// The above code I just copy from codegen
// to do > terminal > npx playwright codegen > browser & code inspector will open > do action in browser > code will generate in code inspector