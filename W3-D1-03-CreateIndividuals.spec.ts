import {test} from "@playwright/test"

test("Create Individulas in Sales Force", async({page})=>{
    await page.goto("https://testleaf.my.salesforce.com/")

        //Step 1 Login 
        await page.locator('input[id="username"]').fill("dilipkumar.rajendran@testleaf.com") //element by tag name
        await page.locator('#password').fill(`TestLeaf@2025`) //element by id
        await page.locator('input[class="button r4 wide primary"]').click()
      
      //Step 2 - Click on toggle menu button from the left corner
        await page.locator('div[class="slds-icon-waffle"]').click()

        //Step 3- Click view All and click Individuals from App Launcher
        await page.locator('button[aria-label="View All Applications"]').click()
        await page.locator('//p[text()="Individuals"]').click()

        //Step 4. Click on the Dropdown icon in the Individuals tab
        await page.locator('//span[contains(text(),"ndividuals List")]').click() //Xpath Partial text based

        //Step 5. Click on New Individual
        await page.locator('//span[text()="New Individual"]').click()

        //Step 6 Enter the Last Name
        await page.locator('input[class="lastName compoundBLRadius compoundBRRadius form-element__row input"]').fill("TLfl")

        //Step 7 Click save and verify Individuals Name
        await page.locator('//span[@class=" label bBody" and text()="Save"]').click() //collection of Xpath

        //await page.waitForTimeout(20000)
        
})