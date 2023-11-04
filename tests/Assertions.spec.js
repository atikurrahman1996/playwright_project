import{test, expect} from '@playwright/test'

test('Assertions Test', async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?")

    // await expect(page).toHaveURL() -> page has a url 

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?")

    //await expect(page).toHaveTitle() -> page has a title

    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    //await expect(locator).toBeVisible()->	Element is visible

    const logo = await page.locator("img[alt='nopCommerce demo store']")
    await expect(logo).toBeVisible()

    //await expect(locator).toBeEnabled() ->	Element is enabled
    //await expect(locator).toBeDisabled()->	Element is disabled

    const searchBox = await page.locator("#small-searchterms")
    await expect(searchBox).toBeEnabled()

    //await expect(locator).toBeChecked()	Checkbox/Radio button is checked

    //radio button

    const maleRadioButton = await page.locator("#gender-male")
    await maleRadioButton.click() // select he radion button 
    await expect(maleRadioButton).toBeChecked()

   // check box 

    const newsLetterCheckBox = await page.locator("#Newsletter")
    await expect(newsLetterCheckBox).toBeChecked()

    //await expect(locator).toHaveAttribute()->	Element has a DOM attribute

    const regButton = await page.locator("#register-button")
    await expect(regButton).toHaveAttribute('type', 'submit')

    //await expect(locator).toHaveText()	Element matches text

    await expect(await page.locator("div[class='page-title'] h1")).toHaveText("Register")  // we need to put full text

    //await expect(locator).toContainText()	Element contains text
    await expect(await page.locator("div[class='page-title'] h1")).toContainText("Regi")  // we need to put full partial text

    //await expect(locator).toHaveValue() ->	Input has a value

    const emailInputBox = await page.locator("#Email")
    await emailInputBox.fill("test@gmail.com")
    await expect(emailInputBox).toHaveValue("test@gmail.com")

    //await expect(locator).toHaveCount()->	List has exact number of children

    const monthOptions = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(monthOptions).toHaveCount(13)






    



})