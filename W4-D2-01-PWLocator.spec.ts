import {test} from "@playwright/test"

test("Handling Playwright Locators", async({page})=>{

   /*  await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByRole("textbox",{name: "Username"}).fill("democsr2")
    await page.getByLabel("Password").fill("crmsfa")

    await page.getByRole("button",{name: "Login"}).click() */
    
    await page.goto("https://testleaf.my.salesforce.com/")

    await page.getByAltText("Salesforce", { exact: true }).isVisible()
    await page.getByRole("textbox",{name: "Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.getByRole("button",{name:"Log In"}).click()

    await page.getByTitle("App Launcher",{exact:true}).isVisible()
    await page.getByTitle("App Launcher",{exact:true}).click()
    await page.getByText("View All").nth(6).click()
    
   // await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads")
    //await page.getByPlaceholder("Search apps or items$").clear()
    //await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("In")

})

