import {expect, test} from "@playwright/test"

//used Page fixture
test("Handling Frames",async({page})=>{

    //Launch the URL
    await page.goto("https://leafground.com/frame.xhtml")

    //Interact with the Click Me button inside frame
    const frame = page.frameLocator(`iframe[src="default.xhtml"]`)
    await frame.locator('//button[text()="Click Me"]').click()

    //Assert the text changed after clicking the button
    await expect(frame.locator('//button[text()="Hurray! You Clicked Me."]')).toBeVisible()

    //Get the total count of frames present in the page
    const frameLen = page.frames().length
    console.log(`Total Frames in this page:${frameLen}`);
    
    //Interact with the Click Me button present inside the nested frames
     const outterFrame = page.frameLocator('iframe[src="page.xhtml"]')
    const innerFrame = outterFrame.frameLocator('iframe')

    /*const nestedButton = innerFrame.locator('//button[text()="Click Me"]')
    await nestedButton.click()

    // Assert text change in nested frame
    await expect(nestedButton).toHaveText('Hurray! You Clicked Me.'); */
    //expect(nestedFrame.locator('//button[text()="Hurray! You Clicked Me."]')).toBeVisible()
   
  //  await page.waitForTimeout(6000)

  //const outerFrame = page.frameLocator('iframe[src="nested.xhtml"]');
  //const innerFrame = outerFrame.frameLocator('iframe');

  const nestedButton = innerFrame.locator('#Click');
  await nestedButton.click();

  // Assert text change in nested frame
  await expect(nestedButton).toHaveText('Hurray! You Clicked Me.'); // failling

})