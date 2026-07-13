let score = "33";
let score1 = "33abc";
// let score2 = "abcd";
// let score3 = true;
// let score4 = null;
// let score5 = undefined;

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let valueInNumber1 = Number(score1);
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);

/* 
   so whene we convert a string into number than it gives NaN (fact is type of NaN is number) which means not a number.
   and whene we give boolean value like true or false than after conversion it gives 1 or 0 and whene we give null than after conversion it gives 0 and whene we give undefined than after conversion it gives NaN.

*/

// boolean conversion
let isLoggedIn = 0;
let boolIsLoggedIn = Boolean(isLoggedIn);   
// console.log(boolIsLoggedIn);

let IsLoggedIn = "abcd";
let boolIsLoggedIn1 = Boolean(IsLoggedIn);
// console.log(boolIsLoggedIn1);

// so 0=> false, 1=> true, null=> false, undefined=> false, NaN=> false, ""=> false, "abcd"=> true, "0"=> true, "false"=> true

// string conversion
let number = 34;
let stringNumber = String(number);
// console.log(stringNumber);
// console.log(typeof stringNumber);

//********************************Operations *************************
// so here are some operations in js
let str1 = "hello"
let str2 = " Rohit"
let str3 = str1 + str2;
console.log(str3);
console.log("1" + 1); // 11
console.log("1" - 1); // 0
console.log(1 + "1"); // 11
console.log("1" + 1 + 1); // 111
console.log(1 + 1 + "1"); // 21
console.log(+true); // 1
console.log(+""); // 0

// prefix and postfix
let counter = 100;
counter++;
console.log(counter); // 101
++counter;
console.log(counter); // 102
