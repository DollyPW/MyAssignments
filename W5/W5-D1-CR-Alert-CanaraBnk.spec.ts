import{test} from "@playwright/test"

test('Handle alert in Canara Bank using page.on', async({page})=>{
    
    // Launch any banking website
    await page.goto('https://www.canarabank.bank.in/pages/net-banking')

    //Capture the alert using an event listener.
    page.on("dialog",async(alert)=>{
        const msg = alert.message()
        console.log("Confirmation Alert message is:",msg);

        const alertType = alert.type()
        console.log(`Alert Type is ${alertType}`);
        
        if (alertType==="confirm"){
            await alert.accept()
        } else
            await alert.dismiss()
    })

    //Trigger an alert -click on the Net Banking link
    await page.locator('//a[@id="netbanking-link"]').click()
    
})