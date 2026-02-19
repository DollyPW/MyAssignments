import {test,request, expect} from "@playwright/test"

let sys_id: any

test.describe.serial(`Service_Now`,async () => {

//Method: POST
test("Post a Change Request", async()=>{

    //config API context with ignoring the certificate
    const apiContext = await request.newContext({
        ignoreHTTPSErrors: true
    })

    //Creating the post request for Change Request
    const post_CR = await apiContext.post(`https://dev267889.service-now.com/api/now/table/change_request`,{
        headers:{
                "Authorization": "Basic YWRtaW46JWVCelUka3c1VkM4", //Base64Encoding: username+paswword
                "Content-Type": "application/json"            
        },
        data:{
            "short_description":"ShortDecription",
            "description":"testing the data"
        }
    })

    const respose = await post_CR.json()
    expect(post_CR.status()).toBe(201) //Checking the status of POST CR

    sys_id = await respose.result.sys_id //Dynamic validation using the sysID
    console.log("Change Request sysId:",sys_id);
    
})

//Method: GET
test("Fetching the CR info", async()=>{

    const apiContext = await request.newContext({
        ignoreHTTPSErrors: true
    })

    let getRsp = await apiContext.get(`https://dev267889.service-now.com/api/now/table/change_request/${sys_id}`,
        {
            headers:{
                "Authorization": "Basic YWRtaW46JWVCelUka3c1VkM4", //Base64Encoding: username+paswword
                "Content-Type": "application/json"                   
            }
        }
    )

    let response = await getRsp.json()
    console.log(response);

   expect(getRsp.status()).toBe(200) //Validating the GET CR status
})

//Method: PUT
test("Updating the CR_Short Description", async()=>{
  
    const apiContext = await request.newContext({
    ignoreHTTPSErrors:true
    })

    const putRsp = await apiContext.put(`https://dev267889.service-now.com/api/now/table/change_request/${sys_id}`,{
        headers:{
            "Authorization":"Basic YWRtaW46JWVCelUka3c1VkM4",
            "Content-Type":"application/json"
        },
        data:{
            "short_description":"Updated_ShortDescription"
        }
    })

    let putRes = await putRsp.json()
    console.log(putRes);
    expect(putRsp.status()).toBe(200) //Validating the PUT CR status
    expect(putRes.result.short_description).toBe("Updated_ShortDescription") //Validating the updated attribute 

})

test('Deleting the CR',async()=>{
    const apiContext = await request.newContext({
        ignoreHTTPSErrors:true
    })

    const delCr = await apiContext.delete(`https://dev267889.service-now.com/api/now/table/change_request/${sys_id}`,
    {
        headers:{
            "Authorization":"Basic YWRtaW46JWVCelUka3c1VkM4",
            "Content-Type":"application/json"
        }
    })

   // let delRes = await delCr.json()
    expect(delCr.status()).toBe(204) //Validating the DELETE CR status
})

})


