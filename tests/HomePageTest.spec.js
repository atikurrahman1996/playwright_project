//const {test, expect} = require("@playwright/test")
import { test, expect } from '@playwright/test';


test("Home Page title", async ({page})=>{

    await page.goto("https://www.eudika.com/en")  // launch the web page

    const PageTitle= await page.title()
    console.log("The Title of this Page is:", PageTitle)   //print the title 

    await expect(page).toHaveTitle("Eudika")  // verify title

    const pageURL = await page.url()
    console.log("URL of this web page is:", pageURL)   // print the url


    await expect(page).toHaveURL("https://www.eudika.com/en")  // verify url

    //page.close()   // close the browser

})

    //npx playwright test  - run all the test in headless mode & will run in three browser by deafult
    //npx playwright test HomePageTest.spec.js // open specific file 
    //npx playwright show-report - we can see the report 

    //npx playwright test HomePageTest.spec.js --project chromium  // open test case only in chromium browser
    //npx playwright test HomePageTest.spec.js --project chromium -- headed  //test will open in headed mode
    //npx playwright test HomePageTest.spec.js --project chromium -- headed --debug //test will execute step by step
