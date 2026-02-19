import {expect, test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from "fs"

import mData from "../Data/LeafTap_CreateLead.json"

let LT_login: any[] = parse(fs.readFileSync("../Data/LeafTaps_login.csv"),{columns:true,skip_empty_lines:true})

for(let LTlogin of LT_login){

test('CreateLead with DataParam',async({page})=>{

    //Navigate URL
    await page.goto('http://leaftaps.com/opentaps/control/main')

    //Login with Credentials using CSV file
    await page.locator('input[id="username"]').fill(LTlogin.lt_uname) 
    await page.locator('input[id="password"]').fill(LTlogin.lt_pwd)
    await page.locator('input[class="decorativeSubmit"]').click()

    //Click CRM/SFA
    await page.locator('//a[contains(text(),"CRM/SFA")]').click() 

    //Click Leads
    await page.locator('//a[text()="Leads"]').click() 

    //Click Create leads
    await page.locator('//a[text()="Create Lead"]').click() 

    //Entering the mandatory fields usinf json file
    await page.locator('//input[@id="createLeadForm_companyName"]').fill(mData.LT_CmpName)
    await page.locator('//input[@id="createLeadForm_firstName"]').fill(mData.LT_FName)
    await page.locator('//input[@id="createLeadForm_lastName"]').fill(mData.LT_LName) 

    //await page.waitForTimeout(5000)
    //Select Direct Mail from the Source dropdown using label
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:"Direct Mail"})

    //Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
    await page.selectOption('//select[@id="createLeadForm_marketingCampaignId"]',{value:"DEMO_MKTG_CAMP"})

    //Get the count and print all the values in the Marketing Campaign dropdown
    let Mkt = page.locator('//select[@id="createLeadForm_marketingCampaignId"]')
    let MktCnt = await Mkt.count()

    console.log(`Count of Marketing Camping options: ${MktCnt}`);

    console.log("List of Marketing Campaing:");
    
    for (let index = 0; index < MktCnt; index++) {
        console.log(await Mkt.nth(index).innerText()); 
    }

    //Select General Services from the Industry dropdown using index
    await page.selectOption('//select[@id="createLeadForm_industryEnumId"]',{index:6})

    //Select INR from the Preferred Currency dropdown
    await page.selectOption('//select[@id="createLeadForm_currencyUomId"]',{value:"INR"})

    //Select India from the Country dropdown
    await page.selectOption('//select[@id="createLeadForm_generalCountryGeoId"]',{label:"India"})

    //Select any state from the State dropdown
    await page.selectOption('//select[@id="createLeadForm_generalStateProvinceGeoId"]',{label:"TAMILNADU"})

    //Get the count of all states and print the values in the console
    let state = page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]')
    let stateCnt = await state.count()
    console.log(`Count of State listed:${stateCnt}`);

    console.log("List of States:"); //unable to fetch the list of states, getting timedout
    
    /* for (let inde = 0; inde=stateCnt; inde++) {
        console.log(await state.nth(inde).textContent());
    } */
    
    //Click Create Lead
    await page.locator('.smallSubmit').click()
    await expect(page).toHaveTitle(/View Lead | opentaps CRM/)


})

}