//If-else Condition
function launchBrowser(browserName){
    if(browserName==="Chrome"){
        console.log(browserName," browser launched");
        
    }else{
        console.log("Chrome browser is not launched as ",browserName);
        
    }
}

//Switch Condition
function runTests(){
    switch (testType) {
        case "Smoke":
            console.log("Test Type is:", testType);
            
            break;
        case "Sanity":
            console.log("Test Type is:", testType);
            
            break;
        case "Regression":
            console.log("Test Type is:", testType);
            
            break;
        default:
            console.log("Default Test Type is Smoke, but we have:", testType);
            
            break;
    }
}

//Call the If Condition
launchBrowser("Chrome")
launchBrowser("Firefox")

//Calling the Switch Condition to print default value
let testType = "Functional"
runTests(testType) 

//Calling the Switch Condition to print case value
testType = "Smoke"
runTests(testType) 

