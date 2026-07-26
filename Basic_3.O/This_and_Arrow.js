// this keyword is actually used to refer current context
// Exampole:-
const user = {
    userName: "Rohit",
    price: 999,
    welcomeMassage: function(){
        console.log(`${this.userName}, welcome to the site`);
        console.log(this);
        
        
    }
}
// user.welcomeMassage() // it simply prints the welcome massage for rohit and the context of welcomemasssage function
// lets try after changing the user name
// user.userName = "Rahul"
// user.welcomeMassage()
// console.log(this) //it gives a simple empty object but whene we try it in the browser it give more outputs
// this with function
function some(){
    console.log(this);
    
}
// some()
/* so, it gives many environment and multiple things 
and in this case this work with object not function */
// example of undefined
// function chai(){
//     let Name = "Rohit"
//     console.log(this.Name);
// }
// chai()
const chai = function(){
    let Name = "Rohit"
    console.log(this.Name);
}
chai()
console.log("============================================================================================================================================");
// now its time to use arrow function
/* Regular function:- this Binding[Dynamic (depends on how it is called)]
                      Hoisting:[Yes (if declared as a function declaration)]                    

Arrow Function:- this Binding: [Lexical (inherits from surrounding scope)]
                 Hoisting: [No; behaves like a variable]
*/
const chai_Tea= () => {
    let Name1 = "Rohit"
    console.log(this);
    
}
chai_Tea()
