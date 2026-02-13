enum Environment{
    LOCAL = "LOCAL",
    DEVELOPMENT = "DEVELOPMENT",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION"
}

function runTest(result : Environment){
    console.log(`Test running in environment: ${result}`);
    //return void()
    
}

runTest(Environment.LOCAL)
runTest(Environment.DEVELOPMENT)
runTest(Environment.STAGING)
runTest(Environment.PRODUCTION)