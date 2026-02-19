"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//using | means less strict, we are omit using or calling any keys
var QAProfile = {
    adminName: "Testleaf",
    privileges: ['server'],
    name: "Ravindran",
    empId: 1001,
    date: "31/01/26"
};
console.log(QAProfile.adminName);
console.log(QAProfile.date);
var QAProfile1 = {
    adminName: "TestleafLess",
    privileges: ['server'],
    name: "Test",
    empId: 2001,
    date: "30/01/26"
};
console.log(QAProfile1.adminName);
console.log(QAProfile1.date);
