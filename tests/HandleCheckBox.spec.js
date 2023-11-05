import{test, expect} from "@playwright/test"

test("handle checkbox", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/login?returnUrl=%2F")

    await page.locator("//input[@id='RememberMe']").check();  // check box will selected 
    await expect(await page.locator("//input[@id='RememberMe']")).toBeChecked()
    await expect(await page.locator("//input[@id='RememberMe']").isChecked()).toBeTruthy()

    // unchecked the selected checkbox

    await page.locator("//input[@id='RememberMe']").uncheck()

    await page.waitForTimeout(5000)
    

})