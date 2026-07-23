// so parameter is that who passed in the function and Agument is those who called during function call
// example
function myFunc(Name) {  // Name is parameter
    console.log("Hello", Name);
    
}
// function call
myFunc("Rohit"); //so "Rohit" is argument
console.log("------------------------------------------------------------------------------------------------------------------------------");

// function to add two numbers
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
    
}
addTwoNumbers(3, 5) //but im that case we can't store result in any variables so we use retrurn key
//after return we cant perform any task in the function
function addNumbers(num1, num2){
    result = num1+num2
    return result;
}
// console.log(addNumbers(5,10))
result = addNumbers(6,7)
console.log(result);
console.log("------------------------------------------------------------------------------------------------------------------------------");
// some example of userlogin mmassage
function LoginMassage(userName){
    return `User ${userName} just logged-in`
}
console.log(LoginMassage("Rohit"));
// but whene user not pass any argument than it gives undefined so,  with the help of some conditional statement we can handle it
function LoginMassage2(username){
    // if(username === undefined)
                // OR
    if(!username){
        console.log("please enter valid name");
        return;
    }
    return `User ${username} just logged-in`
}
console.log(LoginMassage2());
console.log("------------------------------------------------------------------------------------------------------------------------------");
// whene there no guaess of how many arguments can be passed from the user side so we use "..."
function calculatePrice(...number){
    return number;
}
console.log(calculatePrice(20,30,10,40,50,60));
// gives all prices in a array form
console.log("------------------------------------------------------------------------------------------------------------------------------");
// whene we want to assign first 1 or 2 or more numbers to assign any specific value
function SomeNums(val1, val2, ...values){
    return values
}
console.log(SomeNums(20,20,30,40,80));
// only 30,40,80 will show interminal because anotherr two has own varialbleName

console.log("------------------------------------------------------------------------------------------------------------------------------");
// Passing object in function
const MyObj = {
    NameOfUser: "Rohit",
    Age: 23
}
function findUser(anyObject){
    console.log( `Name of the user is ${anyObject.NameOfUser} and Age of user is ${anyObject.Age}`)
}
findUser(MyObj);

console.log("------------------------------------------------------------------------------------------------------------------------------");
const MyArr = [50,30,60,45]
function FindFirst(AnyArray){
    console.log(AnyArray[0]);
    
}
FindFirst(MyArr);