import {test} from "@playwright/test"

test('Handling Windows Sequentially', async({page, context})=>{

    //Launch the URL
    await page.goto('https://www.flipkart.com/')

    //Search for "Phone" and click the result in new window/tab
    const searchBox = page.getByPlaceholder("Search for Products, Brands and More")
    await searchBox.fill(`Phones`)
    await searchBox.press("Enter")

    await page.waitForLoadState("domcontentloaded")

    //Capture the new page using broswer context - array pf promises hence childpage is defined as array
    const [childpage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//div[text()="POCO C75 5G (Silver Stardust, 64 GB)"]').click()
    ])

    //Print title of both pages
    console.log("Parent page title: ",await page.title());
    console.log("Child page title is:",await childpage.title())

    //Bring page to front
    await page.bringToFront()

})