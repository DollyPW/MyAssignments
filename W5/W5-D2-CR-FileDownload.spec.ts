import {test} from "@playwright/test"
import path from "path"

test("Handling file download", async({page})=>{

    await page.goto('https://leafground.com/file.xhtml')
    const fileDownPrm = page.waitForEvent('download') //capturing the listener and resolved after the click action
    await page.getByText(`Download`,{exact:true}).click() 

    const fileDown = await fileDownPrm //Promise the filedown to a variable

    //Option 1: Relative path NOT Advisible
    //await fileDown.saveAs('Data/JanPW.png') 
    // //Relative Not advisable, file extension is not specific, can be anything

    //Option 2: Using Abosulye Path
    await fileDown.saveAs(path.join(__dirname,`../Data/AbsPath_JanPW.png`))
    //import the path, my control pointing to the Absolute path of current directory

    //Printing the Directory name
   // console.log(__dirname);
    

    await page.waitForTimeout(3000)


})