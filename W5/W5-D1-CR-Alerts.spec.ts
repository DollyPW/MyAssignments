import {test} from "@playwright/test"

test.only('Handling alerts', async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml")

    page.on("dialog", async(alert)=>{
    const msg = alert.message()
    console.log(msg);
    
    //await alert.accept()
    const alertType = alert.type()
    console.log(`Type of the alert is ${alertType}`);

    if(alertType==="confirm"){
        await alert.accept()
    }else if (alertType === "prompt"){
        await alert.accept("Test")
    }else
        await alert.dismiss()
    
    })
    
    //Simple alert
    await page.locator('//button[@id="j_idt88:j_idt91"]').click()
    await page.waitForTimeout(3000)
    //pw have inbuild feature to Cancel the alert --? means PW can cancel the alerts
    
    //Confirmation Alert
    //await page.locator('//button[@id="j_idt88:j_idt93"]').click()
    await page.locator('.card').filter({hasText: "Confirm Dialog"}).locator('//span[text()="Show"]').click()
    await page.waitForTimeout(3000)
    //7 containers named as Class=Card, narrow down to the particual unique <h5> 
    //look for the button name and click 

    //Prompt Alter
    await page.locator('.card').filter({hasText: "Prompt Dialog"}).locator('//span[text()="Show"]').click()
    await page.waitForTimeout(3000)
})