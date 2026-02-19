import { BlockList } from "node:net"

type Admin = {
    adminName : string,
    privileges : string[]
}

type Emp = {
    name : string,
    empId : number,
    date: string
}

type QA = Admin & Emp //Intersection Type Alias
//using & means we have to use all the key mentioned in the BlockList

type QAA = Admin | Emp 
//using | means less strict, we are omit using or calling any keys

const QAProfile : QA ={
    adminName : "Testleaf",
    privileges : ['server'],
    name:"Ravindran",
    empId : 1001,
    date: "31/01/26"
}

console.log(QAProfile.adminName);
console.log(QAProfile.date);

/* const QAProfiles : QAA ={
    adminName : "TestleafLess",
    name:"Test",
    empId : 2001,
    date: "30/01/26"
}

console.log(QAProfiles.adminName);
console.log(QAProfiles.date); */