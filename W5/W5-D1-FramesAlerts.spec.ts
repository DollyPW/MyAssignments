import {expect, test} from "@playwright/test"

test('W3School Frames Alerts handling', async({page})=>{

    //- Load the URL
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    //Handling Confirmation Alert
    page.on("dialog",async(alert)=>{
    //Get the message, type and accept the alert.
        console.log("Alert Type is:",alert.type());
        console.log("Given Alert Message is:",alert.message());

    //Retrieve the text “You pressed OK!” and verify it.
        alert.accept()
         
    })
    //Click Try it
    const frame = page.frameLocator('//iframe[@id="iframeResult"]')
    await frame.locator('//button[text()="Try it"]').click()

    // Retrieve and verify the result text
    const resultText = await frame.locator('#demo').textContent();
    expect(resultText).toBe('You pressed OK!');


})