import {expect, test} from "@playwright/test"

test("Handling Auto Wait", async({page})=>{
    //1.cNavigate URL
    await page.goto("https://leafground.com/waits.xhtml")
    await expect(page).toHaveTitle(/Element Wait/)

    //2. Wait for an element to become visible before interacting with it
    const visiblityButton = page.locator('//button[@id="j_idt87:j_idt89"]')
    await visiblityButton.click()

    const visible= page.locator('//span[text()="I am here"]/parent::button')
    await expect(visible).toBeVisible()

    //3. Wait for an element to disappear from the page.
    await expect(page.locator('//button[@id="j_idt87:j_idt93"]//span')).toHaveText(/I am about to hide/)
    const inVisiButton = page.locator('//button[@id="j_idt87:j_idt92"]')
    await inVisiButton.click()

    await expect(page.locator('//button[@id="j_idt87:j_idt93"]//span')).toBeHidden() 

    //4. Wait for an element to become clickable.
    const waitButton = page.locator(`//button[@id="j_idt87:j_idt95"]`)
    await expect(waitButton).toBeEnabled()

    await waitButton.click()

    //5. Check for text changes within an element and respond accordingly.
    const txtChange = page.locator('//button[@id="j_idt87:j_idt99"]/span')
    await expect(txtChange).toHaveText(/I am going to change!/)

    await page.locator('//button[@id="j_idt87:j_idt98"]/span').click()
    await expect(txtChange).toHaveText(/Did you notice?/)

})