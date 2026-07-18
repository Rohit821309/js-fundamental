// there are mainly 2 types of data in js
// 1. Primitive data types
// 7 types:- Number, String, Boolean, Null, Undefined, Symbol, BigInt
const number = 34;
console.log(typeof number);
const MyName = "Rohit";
console.log(typeof MyName);
const IsLoggedIn = true;
console.log(typeof IsLoggedIn);
const age = null;
console.log(typeof age); // object
let email;
console.log(typeof email);
let MyId = Symbol('123');
console.log(typeof MyId);
// symol is used to create unique identifiers for objects
let AnotherId = Symbol('123');
console.log(MyId === AnotherId); // false
let bigNumber = 498984889589598985n;
console.log(typeof bigNumber);
// 2. Non-primitive data types
// array, object, function
// ARRAY
const StudentNames = ["yadav", "Tiwari", "Gupta", "Thakur"];
console.log(typeof StudentNames); 
console.log(StudentNames);
// OBJECT
const classroom = {
    name: "Rohit",
    age : 23
}
console.log(classroom);
console.log(typeof classroom);
// FUNCTION
const MyFunc = function(){
    console.log("Hello World");     
}
console.log(typeof MyFunc);
console.log(MyFunc);

// all these codes are written just for investigation purpose

