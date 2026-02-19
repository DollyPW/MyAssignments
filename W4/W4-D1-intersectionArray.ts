const arr1: any = []
const arr2: any = []

function Intersection(arr1, arr2){
    const result: any = []
    for (let index = 0; index < arr1.length; index++) {
        const value = arr1[index]
        if(arr2.includes(value) && !result.includes(value)){
            result.push(value)
        }
    }
    return result

}

console.log("Numbers Intersection:");
console.log(Intersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log("No Common numbers between array:");
console.log(Intersection([1, 2, 3, 4], [ 5, 6,7,8]));
console.log("All elements common");
console.log(Intersection([1, 2, 3, 4], [ 1, 2, 3, 4]));
console.log("Duplicate elements within array:");
console.log(Intersection([1, 2, 1, 1], [ 1, 2, 3, 4]));



