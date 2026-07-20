/* first of all there are two way to create a object 
1.) Object litrals 
2.) Object Constructor(Single ton may occur)
Singleton:- It is a design pattern in javascript , which means only one instance(copy) of objects exits 
            in whole application
NOTE:- Singleton not made by object litrals, it made only by constructor
*/
// object litrals
const MySymbol =  Symbol("Key1"); //we take a symbol just to see how can we access a symbol
const JsUser = {
    Name: "Rohit",
    Age:  22,
    location: "Bihar",
    email: "Rohit@example.com",
    isLoggedIn: false,
    LastLoggin: ["Monday", "Sunday"],
    [MySymbol] : "MyKey1"


}
// we can access value with .value as well ass []
console.log(JsUser.Name)
console.log(JsUser["Name"]);
// whene we have to access symbol from the object
console.log(JsUser[MySymbol]);
// console.log(typeof JsUser[MySymbol]);
// to change or modify the object's elemnts
console.log(JsUser.email);
console.log("-----After Modification-----");
JsUser.email = "Hello@gmail.com";
console.log(JsUser.email);
//whene we want to lock or protect our object that no one can change or modify it.
// Object.freeze(JsUser);
// JsUser.Age = 90; 
// console.log(JsUser.Age); // it gives 22 not 90
// whenever we try to add any function in objects than:- 
JsUser.greeting = function(){
    console.log("Hello")
}

console.log(JsUser.greeting());
// whene we want to call any elements of object in function than we use bacckticks and ${}:-
JsUser.greetingTwo = function(){
    console.log(`Hello , ${this.Name}`);
    //using this to refer that object who call this function
    
}
console.log(JsUser.greetingTwo());




