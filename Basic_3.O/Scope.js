// Scope:- Scope is the area or context in which a variable can be accessed or used in a program.
// Global Scope:- The variable which is declare outside the function or block
// Local Scope:- The variable which is declare inside the function or block
// Example:-

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30

// }
// // console.log(a,b); // it can't  print
// console.log(c); // easily give value of  c this is the problem with var it can be changed
let a = 300  //Global Scope
if(true){
    let a = 10 //Local Scope
    const b = 20
    console.log("INNER:  ", a);
}
console.log(a);

console.log("--------------------------------------------------------------------------------------------------------------------------------------------");
// nested scope :- A scope in the scope
// so there are a key point that, local scope variable are not accessable  in global scope but global scopp variable are accebble in global scope
// Example code:-

function one(){
    const userName = "Rohit"
    function two(){
        const website = "Google"
        console.log(userName); //we can access global scope variable in local scope        
    }
    // console.log(website); //we cant access like that

    two()
}
one()
console.log("--------------------------------------------------------------------------------------------------------------------------------------------");

// with some conditonal statements
if (true){
    const UserName1 = "Rohit"
    if(UserName1 === "Rohit"){
        const website1 = "Youtube"
        console.log(UserName1 + website1);
        
    }
    // console.log(website1); // not possible because it is outside from the scope

    
}
// console.log(UserName1); //can't access because it is outside the scope

console.log("--------------------------------------------------------------------------------------------------------------------------------------------");
// Some more interesting things
// function addOne(num){
//     return num+1;
// }
// console.log(addOne(5)) // it can easily run
                // OR
// we can write it above 
console.log(addOne(4));

function addOne(num){
    return num+1;
}
console.log("--------------------------------------------------------------------------------------------------------------------------------------------");

function addTwo(num){
    return num + 2;
}
console.log(addTwo(5)); 
console.log("============================================================================================================================================");

console.log(addTwo(8));
   
function addTwo(num){
    return num + 2;
}


console.log("--------------------------------------------------------------------------------------------------------------------------------------------");
const addThree = function(num){
    return num+3;
}
console.log(addThree(5))
console.log("===========================================================================================================================================");
// but whene we try to give argument before it can give some error
console.log(addFour(7))
const addFour = function(num){
    return num+3;
}
