import {test,expect} from "@playwright/test"

test("Handling Dropdown", async({page,context})=>{
    //Launch URL
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter Credentials
    await page.locator('input[id="username"]').fill("DemoSalesManager") 
    await page.locator('input[id="password"]').fill("crmsfa")

    //Click the Login button
    await page.locator('input[class="decorativeSubmit"]').click() 

    await expect(page.locator('//div[@id="form"]')).toContainText("Welcome")
    //Click CRM/SFA
    await page.locator('//a[contains(text(),"CRM/SFA")]').click() 

    //click leads
    await page.locator('//a[text()="Leads"]').click() 

    //Click Merge Leads
    await page.locator('//a[text()="Merge Leads"]').click()

    //Click From Lead widget
    await page.locator('(//img[@alt="Lookup"])[1]').click() 

    //Returing the promise of From Leads widgets/page
    const [fromLead] = await Promise.all([
        context.waitForEvent('page'),
       // page.locator('//a[@class="linktext"])[1]').click()

    ])
    await fromLead.waitForLoadState();

    //Select the first resulting lead id
    await fromLead.click('(//a[@class="linktext"])[1]')

    //Click To Lead widget
    await page.locator('(//img[@alt="Lookup"])[2]').click()
 
    //Returing the promise of To Leads widgets/page
    const [toLead] = await Promise.all([
        context.waitForEvent('page'),
       // page.locator('//a[@class="linktext"])[1]').click()

    ])
        
    //Select the second resulting lead id
    await toLead.click(`(//td[@class="x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first "]//a)[2]`)

    page.on("dialog",async(alert)=>{
        //Get the message and type of the alert
        const altMsg = alert.message()
        console.log("Getting the alert message:",altMsg);
        const altType = alert.type()
        console.log("Getting Alert Type:",altType);
        
        //Accept the alert
        await alert.accept()
        
    })
    //Click Merge button
    await page.locator('//a[text()="Merge"]').click()

    //Assert the title of the page
    await expect(page).toHaveTitle(/View Lead | opentaps CRM/)

})