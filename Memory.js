// for primitive types our variable will store in the stack(call by value) which means if we change the value of variable then it will not affect the other variable
// example
let MyName = "Rohit";
let name = MyName;
name = "Tiwari";
console.log(MyName); // Rohit, because MyName is stored in stack and name is also stored in stack but they are different memory locations 
console.log(name); // Tiwari
// for non-primitive types our variable will store in the heap(call by reference) which means if we change the value of variable then it will affect the other variable
// example
let userOne = {
    Name : "Rohit",
    email : "rohit@example.com"
}
let userTwo = userOne;
userTwo.email = "abcd@google.com";

console.log(userOne.email);
console.log(userTwo.email); 
// so in heap we can see that there are chnages in both userOne and userTwo, beccause they are pointing to the same memory location in heap