import {test, expect} from "@playwright/test"

test('Multiple web elements', async ({page}) =>{

await page.goto("https://www.demoblaze.com/")

const Links = await page.$$("a")

// find all links of the web page
/*
for(const link of Links){

    const linktext = await link.textContent();
    console.log(linktext)
}
*/
// find all products of the web page

const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

for( const product of products) {

    const productName = await product.textContent();

    console.log(productName)
}

})