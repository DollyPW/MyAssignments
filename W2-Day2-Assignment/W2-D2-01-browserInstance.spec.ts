import {test,chromium,webkit, firefox} from "@playwright/test";

test(`Launch RedBus`, async()=>{
    const browser = await chromium.launch({channel:"msedge",headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(`https://www.redbus.in`)
    const title = await page.title()
    const url = await page.url()
    console.log("URL launched: "+url+"\nIts title is:",title);
    
})

test('Launch Flipkart', async() =>{
   // const browser1 = await firefox.launch({channel:"firefox",headless:false})
   const browser1 = await firefox.launch({headless:false})
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()

    await page1.goto('https://www.flipkart.com')
    const title1 = await page1.title()
    const url1 = await page1.url()
    console.log("URL launched: "+url1+"\nIts title is:",title1);
})