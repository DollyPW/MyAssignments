import {expect, test} from "@playwright/test"

test('Handle Checkbox',async({page})=>{
    await page.goto('https://leafground.com/checkbox.xhtml')

    //2. Click on the "Basic Checkbox.”
    await page.locator('//span[text()="Basic"]/parent::div').click()

    //3. Click on the "Notification Checkbox."
    await page.locator('//span[text()="Ajax"]').click()

    //4. Verify that the expected message is displayed.
    await expect(page.locator('//span[text()="Checked"]')).toBeVisible()

    //5. Click on your favorite language (assuming it's related to checkboxes).
    await page.getByText("Java",{exact:true}).check()

    //6. Click on the "Tri-State Checkbox."
   // await page.locator('//span[@class="ui-chkbox-icon ui-c "]').click()
    await page.locator('//div[@id="j_idt87:ajaxTriState"]').click()

    //7. Verify which tri-state option has been chosen.
    //Need held from Coordinator
    await expect(page.locator('//span[text()="State has been changed."]')).toBeVisible()

    //8. Click on the "Toggle Switch."
    //await page.locator('//div[@class="ui-toggleswitch ui-widget"]//input').check()
   // await page.locator('//input[@id="j_idt87:j_idt100_input"]').check()


    //9. Verify that the expected message is displayed.
   // await expect(page.locator('//span[text()="Checked"]')).toBeVisible()

    //10. Verify if the Checkbox is disabled.
    await expect(page.locator('//span[text()="Disabled"]')).not.toBeChecked()

    //11. Select multiple options on the page (details may be needed).


    await page.waitForTimeout(3000)
})