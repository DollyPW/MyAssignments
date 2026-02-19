import {test} from "@playwright/test"

test("W4-D1-Dropdown",async({page})=>{
    await page.goto("https://leafground.com/select.xhtml")
/* 
    //2. favorite UI automation tool
    await page.selectOption('//select[@class="ui-selectonemenu"]',{label: "Selenium"})

    //3. Get the count and print of all the values
    const tool = page.locator('//select[@class="ui-selectonemenu"]')
    const toolCount = await tool.count()
    
    console.log("List of Favorite UI Automation Tool:");
    
    for (let index = 0; index < toolCount; index++) {
        console.log(await tool.nth(index).innerText());
    }
  */
    //4. Choose your preferred Country
    await page.selectOption('//select[@id="j_idt87:country_input"]',{value:"India"})

    //5. Confirm Cities belongs to Country is loaded


    //Choose any three courses from the dropdown


    await page.waitForTimeout(3000)
})