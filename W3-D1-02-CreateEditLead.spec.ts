import {test,expect} from "@playwright/test"

test("Handling Dropdown", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator('input[id="username"]').fill("democsr2") //filling the text box
    await page.locator('input[id="password"]').fill("crmsfa")

    await page.locator('input[class="decorativeSubmit"]').click() //clicking the button

    await page.locator('//a[contains(text(),"CRM/SFA")]').click() //click CRM/SFA

    await page.locator('//a[text()="Leads"]').click() //click leads

    await page.locator('//a[text()="Create Lead"]').click() //Click Create lead

    //Entering the text field
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("TstLf") //Enter Company Name
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Wowy") //Enter FirstName
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Cric") //Enter lastName

    //Handling dropdown
    //await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_COLDCALL"}) //note need to use : instead of =
    //await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:"Cold Call"}) //using the label/visble text from the code
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{index:1}) //using the index

    await page.selectOption('//select[@id="createLeadForm_generalCountryGeoId"]',{value:"AUT"}) //choose Country
    

    await page.locator('//input[@value="Create Lead"]').click() //Click Create Lead button

    await page.locator('//a[text()="Find Leads"]').click() //Click Find Leads
   // await expect(page.locator('(//div[@class="x-panel-body x-panel-body-noheader x-panel-body-noborder"])[6]')).toBeVisible()
   await expect(page.locator('//div[@class="x-panel-header x-panel-header-noborder x-unselectable"]//span')).toBeVisible()

    //await page.locator('//input[@name="firstName" and @class=" x-form-text x-form-field "]').fill("David") //Search using the Frist name 
    await page.locator('//div[@id="x-form-el-ext-gen248"]/input').fill("wow") //Search using the Frist name 
    await page.locator('//button[@class="x-btn-text" and text()="Find Leads"]').click() //click Find Leads Button

    //await page.locator('//td[@class="x-grid3-col x-grid3-cell x-grid3-td-firstName "]//a').click() //click the record frist nmame -- err Strict mode voilation
    await page.locator('//a[text()="Wowy"]').click() //click the record frist nmame
    await page.locator('//a[@class="subMenuButton" and text()="Edit"]').click() //Click Edit in view lead

    await page.selectOption('//select[@id="updateLeadForm_currencyUomId"]',{value:"CAD"}) //update the curr to Candian
    await page.locator('//input[@class="smallSubmit" and @name="submitButton" and @value="Update"]').click() //Click update



   await page.waitForTimeout(3000)
    
    
})