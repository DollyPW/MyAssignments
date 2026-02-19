import {expect, test} from "@playwright/test"

test(`Handling RadioButtons`, async({page})=>{
    //1. Navigate to the URL
    await page.goto(`https://leafground.com/radio.xhtml`)

    //2. Identify and assert the default selected radio button
    await expect(page.locator('(//div[@class="grid formgrid"])[3]//label[text()="Safari"]')).toBeChecked
    await expect(page.locator('(//div[@class="grid formgrid"])[4]//label[text()="21-40 Years"]')).toBeChecked

    //3. Click your most favorite browser and assert that the browser is enabled.
    await page.locator('(//div[@class="grid formgrid"])[1]//label[text()="Chrome"]').click()

    //4. Click one of the cities.
    await page.locator('(//div[@class="grid formgrid"])[2]//label[text()="Chennai"]').click()

    //5. Select the age group. Assert the default selected button.
    await expect(page.locator('(//div[@class="grid formgrid"])[4]//label[text()="21-40 Years"]')).toBeChecked
    await page.locator('(//div[@class="grid formgrid"])[4]//label[text()="1-20 Years"]').click()
})