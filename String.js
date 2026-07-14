// we have multiple ways to create strings 1 commonn is like that:-
const MyName = "Rohit" //this is a string litral, we can also create string using new keyword:-
const MyCourse = new String("Java-Script")
// we can  check the result
console.log(MyName)
console.log(MyCourse)
// bassically we use "+" to concatenate strings,  but here we can use backticks(``) to concate it we can also call it string interpolation
console.log(`Hello my name is ${MyName} and my course is ${MyCourse}`)
// one more thing about string is that we can access key value pairs of string using index, for example
console.log(MyName[3]);
// also there are so many methods available in string, we use some of them here, for exampple
console.log(MyName.length) // it will return the length of string
console.log(MyName.toUpperCase()) // it will return the string in upper case
// method to access a character at a specific index
console.log(MyCourse.charAt(5)) 
// we have to go through the all string methods, we can all realted documentation at mdn
// substring
let newString = "Hello-Java-Script"
let anotherString = newString.substring(0,6);
console.log(anotherString);
// slice allowed negative indexing
let anotherString2 = newString.slice(1, 4)
console.log(anotherString2)
// trim cut the extra spaces fromm the string
const newString2 = "      Rohit      "
console.log(newString2);
console.log(newString2.trim())
// replace helps to  replace any specific keys from string
const MyUserId = "https://rohit.com//Rohit%20repo"
console.log(MyUserId.replace("%20", "-"))
// includes used to check is there any relatable word or key in string or not
console.log(MyUserId.includes("rohit"))
// split just give strings or convert  in a array formate
console.log(newString.split("-"))


