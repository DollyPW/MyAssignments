import {test, request} from "@playwright/test"

test('Learing SalesForce API', async()=>{

    const apiContext = await request.newContext({
    ignoreHTTPSErrors: true
   })
   
    const response = await apiContext.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "client_id": "3MVG9HtWXcDGV.nFaq.RVPox4Ywj.3L1lqb9iyTYWbWjgRzE6m_EEzdbuz_gc.M_vVfVQ.xVkqjnfyU8JWzMN",
                "client_secret": "F06D1D2EE696189302A18B6BD633A329BFD15E0388AA3164271CE64AFD52619E",
                "username": "dollyirudayaraj.a57c7cdf7ded@agentforce.com",
                "password": "Testleaf@20261WdSNfKSsbdsnzFKU1cAUZIAD",
                "grant_type": "password",
            }
        }
    )
    const responseBody = await response.json()
    console.log(responseBody); 

})
