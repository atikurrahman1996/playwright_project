//import {test, expect} from "@playwright/test"
const {test, expect} = require("@playwright/test")

test("soft assertion", async({page})=>{

    await page.goto("https://www.demoblaze.com/")

    /*
    // hard assertions -> terminate execution if any of steps/test get error/failed
    await expect(page).toHaveTitle("STORE")
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    await expect(page.locator("#nava")).toBeVisible()
    */


    // soft assertions -> not terminate execution if any of steps get error/failed

    await expect.soft(page).toHaveTitle("STORE123")  // wrong input
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/")
    await expect.soft(page.locator("#nava")).toBeVisible()




})
