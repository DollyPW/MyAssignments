import {test} from "@playwright/test"
import path from "path"

test('handle file upload n download',async({page})=>{

    //File Upload
    await page.goto('https://the-internet.herokuapp.com/upload')

    //Upload a document without clicking the Upload button on the page
    const choose = page.locator('(//input[@type="file"])[1]')
    await choose.setInputFiles(path.join(__dirname,"../Data/AbsPath_JanPW.png"))

    //Upload an image inside the red square area
    const fPrm = page.waitForEvent("filechooser")
    await page.locator('//div[@id="drag-drop-upload"]').click()
    const fleUp = await fPrm
    await fleUp.setFiles(path.join(__dirname,"../Data/AbsPath_JanPW.png"))

    //Assert that the file has been uploaded

    //await page.close()

    //File Download
    await page.goto('https://the-internet.herokuapp.com/download')

    //Download file.json from the list of files
    const fDown = page.waitForEvent("download")
    await page.getByText("file.json",{exact:true}).click()
    const downld = await fDown
    await downld.saveAs(path.join(__dirname,`../Data/file.json`))

})