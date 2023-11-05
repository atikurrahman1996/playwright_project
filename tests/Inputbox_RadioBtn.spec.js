import {test, expect} from "@playwright/test"

test("Handle Inputbox and Radio Button", async({page})=>{
/*
    // Input Box 

    await page.goto("https://demo.nopcommerce.com/login?returnUrl=%2F")

    await expect( await page.locator("#Email")).toBeVisible()
    await expect( await page.locator("#Email")).toBeEmpty()
    await expect( await page.locator("#Email")).toBeEditable()
    await expect( await page.locator("#Email")).toBeEnabled()

    await page.locator("#Email").fill("atik@gmail.com")
    await page.waitForTimeout(5000)

    */

    // Radio Button

    await page.goto("https://demo.nopcommerce.com/register?")

    await page.locator("#gender-male").check()  // check male radio button
    await expect(page.locator("#gender-male")).toBeChecked()   // male button checked or not
    await expect(page.locator("#gender-male").isChecked()).toBeTruthy()  // if male button checked assertion was passed

    await expect(await page.locator("#gender-female").isChecked()).toBeFalsy()  // female radio button is not selected

    await page.waitForTimeout(5000)










})