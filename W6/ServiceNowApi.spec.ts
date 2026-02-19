//POSTMAN API Testing in SERVICE NOW

/*endpoint -https://dev267889.service-now.com/api/now/table/incident
http methods - CRUD - > POST, GET, PATCH,DELETE
Authorization
Headers
Request Body  */

import{test,request,expect} from "@playwright/test"

let id : any

test.describe.serial(`Service_Now`,async () => {
    
test(`Creating the incident using Playwright API`, async ({  }) => {

    const apiContext = await request.newContext({
        ignoreHTTPSErrors: true
       })

    // await page.goto()
    const response = await apiContext.post(`https://dev267889.service-now.com/api/now/table/incident`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46JWVCelUka3c1VkM4", //Base64Encoding: username+paswword
                "Content-Type": "application/json"
            },
            data: { // Request Body
                "short_description": "Network issue created through PLAYWRIGHT API"
            }

        }
    )

    const responseBody = await response.json(); // deserialization json to object
    console.log(responseBody);


    id = responseBody.result.sys_id;
    console.log(id);   

    console.log(response.status()); // 201
    expect(response.status()).toBe(201)

    console.log(response.statusText()); // CReated
    expect(response.statusText()).toBe("Created")
    


})

test('Fetch Incident',async({})=>{

        const getRes = await request.newContext({
        ignoreHTTPSErrors: true
       })

     const res1 = await getRes.get(`https://dev267889.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                "Authorization" : "Basic YWRtaW46JWVCelUka3c1VkM4",
                "Content-Type":"application/json"
            }

        })


    await res1.json()
    console.log(res1.status());


})

})