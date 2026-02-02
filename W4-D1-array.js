const num = [2,4,5,2,1,2]
let count = 0
const k = 10

for (let index = 0; index < num.length; index++) {
        const num1 = num[index];
        if (num1===k){
            count++
            
        }        
}
 console.log("Occurance of the number:",k,"is:",count);