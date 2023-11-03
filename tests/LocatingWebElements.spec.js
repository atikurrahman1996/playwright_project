import { test, expect } from '@playwright/test';

// methods> property/ attribute, css, xpath

test("Locators", async({page})=>{

    await page.goto("https://www.demoblaze.com/")

    //click login button - property

    //await page.locator("id=login2").click()

      await page.click("id=login2")

      // provide username & password - cssSelectors, login button- xpath

      //await page.locator("#loginusername").fill("Atikur Rahman")
      
      await page.fill("#loginusername", "Atikur Rahman")
      await page.fill("#loginpassword", "Atik@123")

      //login button- xpath

      await page.click("//button[normalize-space()='Log in']")

      // verify logout presence or not //login button- xpath

      const logOutLink = await page.locator("//a[@id='logout2']")
      await expect(logOutLink).toBeVisible();

      // close the browser

      await page.close()






    



})
