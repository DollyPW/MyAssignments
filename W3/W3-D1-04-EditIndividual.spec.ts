import {expect, test} from "@playwright/test"
test("Edit Individual",async({page})=>{
    await page.goto("https://testleaf.my.salesforce.com/")

        //Step 1 Login 
        await page.locator('input[id="username"]').fill("dilipkumar.rajendran@testleaf.com") //element by tag name
        await page.locator('#password').fill(`TestLeaf@2025`) //element by id
        await page.locator('input[class="button r4 wide primary"]').click()
      
      //Step 2 - Click on toggle menu button from the left corner
        await page.locator('div[class="slds-icon-waffle"]').click()

        //Step 3- Click view All and click Individuals from App Launcher
        await page.locator('button[aria-label="View All Applications"]').click()
        await expect(page.locator('//p[text()="Individuals"]')).toBeVisible()
        await page.locator('//p[text()="Individuals"]').click()

        await expect(page.locator('//div[@class="slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right"]')).toBeVisible()

        //Step 5 Search the Individuals last name
        await page.locator('//input[@aria-label="Search this list..." and @name="Individual-search-input"]').fill('Ask')
        await page.keyboard.press('Enter') //Enter key the search box

        //wait for the results to load
        //await expect(page.locator('//table[@class="slds-table slds-table_header-fixed slds-table_bordered slds-table_edit slds-table_resizable-cols"]')).toBeVisible()
        await page.waitForTimeout(3000)

        //Step 6. Click on the Dropdown icon and Select Edit
        await page.locator('(//span[text()="Show Actions"]/parent::button)[1]').click()
        await page.locator('//a[@class="highlightButton" and @title="Edit"]').click()

        //await page.pause() //for debugging pause induced in PW debugger console, and can be resumed using the Resume icon
        //Step 7. Select Salutation as 'Mr'

        //await page.locator('//a[@title="Mr."]').click()
        await page.locator('//div[@class="salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu"]//a').click()
        //await page.locator('//a[text()="Mr."]/parent::div').click()
        await page.locator('//a[text()="Mr."]/parent::li').click()

        //Step8 enter the first name
        await page.locator('//input[@class="firstName compoundBorderBottom form-element__row input"]').fill("AskFirst")

        await page.locator('//span[text()="Save"]').click()
        await page.waitForTimeout(3000)



       
        
})

