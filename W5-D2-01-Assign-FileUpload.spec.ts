import {expect, test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from "fs"
import path from "path"

let SF_cred:any[] = parse(fs.readFileSync("../Data/SF_Login.csv"),{columns:true,skip_empty_lines:true})

for(let SF_data of SF_cred){
test('SalesForce FileUpload',async({page})=>{

    //Navigate to URL
    await page.goto("https://login.salesforce.com/")

    //Login
    await page.locator("#username").fill(SF_data.SF_uName)
    await page.locator("#password").fill(SF_data.SF_pwd)
    await page.locator("#Login").click()

    //Click App Launcher icon
    await expect(page).toHaveTitle(/Home | Salesforce/)
    await page.locator('div[class="slds-icon-waffle"]').click()
    
    //Click View All
    await page.locator('button[aria-label="View All Applications"]').click()
    
    //Enter Accounts in App Launcher search box
    await page.locator('//p[text()="Accounts"]').click()

    //Click New
    await expect(page).toHaveTitle(/Recently Viewed | Accounts | Salesforce/)
    await page.locator('//div[text()="New"]').click()

    //Enter Account Name
    await page.getByRole("textbox",{name:"Account Name"}).fill("TestSF")

    //Select Warm from the Rating dropdown
    await page.locator('(//div[@class="slds-input__icon-group slds-input__icon-group_right"])[2]//span').click()
    await page.locator('//span[text()="Warm"]').click()
    
    //Select Prospect from the Type dropdown
    //await page.getByRole("combobox",{name:"Type"}).click()
    await page.locator('(//div[@class="slds-input__icon-group slds-input__icon-group_right"])[4]//span').click()
    await page.locator('//span[text()="Prospect"]/parent::span').click()

    //Select Banking from the Industry dropdown
    await page.locator('(//div[@class="slds-input__icon-group slds-input__icon-group_right"])[6]//span').click()
    await page.locator('//span[text()="Banking"]/parent::span').click()

    //Select Public from the Ownership dropdown
    await page.locator('(//div[@class="slds-input__icon-group slds-input__icon-group_right"])[5]//span').click()
    await page.locator('//span[text()="Public"]/parent::span').click()

    //Click Save
    const save = page.locator('//button[text()="Save"]')
    await save.click()

    //Assert the Account created
    await expect(save).toContainText(/was created/)

    //Upload files
    const filePromise = page.waitForEvent("filechooser")
    await page.getByRole("button",{name:"Upload Files"}).click()
    const fileUpload = await filePromise
    await fileUpload.setFiles(path.join(__dirname,"../../Data/learningUpload.txt"))

    //Click Done and assert the uploaded file
    const saveFile = page.locator('//span[text()="Done"]')
    await saveFile.click()

    await expect(saveFile).toContainText(/1 file was added to the Account/)
    ////span[text()="Upload Files"]
    //1 file was added to the Account.

})

}
