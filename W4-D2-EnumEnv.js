var Environment;
(function (Environment) {
    Environment["LOCAL"] = "LOCAL";
    Environment["DEVELOPMENT"] = "DEVELOPMENT";
    Environment["STAGING"] = "STAGING";
    Environment["PRODUCTION"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTest(result) {
    console.log("Test running in environment: ".concat(result));
    //return void()
}
runTest(Environment.LOCAL);
runTest(Environment.DEVELOPMENT);
runTest(Environment.STAGING);
runTest(Environment.PRODUCTION);
