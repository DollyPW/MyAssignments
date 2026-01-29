import {test,chromium} from "@playwright/test"
    test ("Test SalesForce CSS selector",async({page})=>{ //using Page fixture

        await page.goto("https://testleaf.my.salesforce.com/")

        //Step 1 Login 
        await page.locator('input[id="username"]').fill("dilipkumar.rajendran@testleaf.com") //element by tag name
        await page.locator('#password').fill(`TestLeaf@2025`) //element by id
        await page.locator('input[class="button r4 wide primary"]').click()
      // await page.locator('.button r4 wide primary').click() //failed with msg as waiting for locator

      //Step 2 - Click on toggle menu button from the left corner
        await page.locator('div[class="slds-icon-waffle"]').click()

        //Step 3- Click view All and click Sales from App Launcher
        await page.locator('button[aria-label="View All Applications"]').click()
        //await page.locator('(//p[@class="slds-truncate"])[7]').click() //Xpath with index match Note Index starts from 1
        await page.locator('//p[text()="Sales"]').click()

        //Step 4 - Click on Leads tab
        await  page.locator('(//span[text()="Leads"])[1]').click()

        //step 5 -Click on New button
        await page.locator('//div[text()="New"]').click() //Visible text Xpath

        //Step 6 - Select Salutation dropdown
        await page.locator('//button[@aria-label="Salutation"]').click()
        //await page.selectOption('//button[@id="combobox-button-957"]',{value: "Mr"})
        await page.locator('(//button[@class="slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value"])[2]').click()

        //Step 7 -Enter the Last Name
        await page.locator('input[name="lastName"]').fill("Test")

        //setp 8 - Enter the Company Name
        await page.locator('input[name="Company"]').fill("TestCmp")

        //Step 9 - Click Save and Verify Leads name created
        //await page.locator('(//button[text()="Save"])[1]').click()
        //await page.locator('button[@name="SaveEdit"]').click()
        await page.locator('(//button[@class="slds-button slds-button_brand"])[3]').click()


    }
)