// object constructor(singleton)
const tinderUser = new Object();
tinderUser.Id = "123abc";
tinderUser.Name = "atif"
tinderUser.isLoggedId = false

console.log(tinderUser);

console.log("--------------------------------------------------------------------------------------------------------------");

// objects in objects (nested object)
const anotherUser = {
    email: "me@example.com",
    fullName: {
        UserFullName: {
            FirstName: "Rohit",
            LastName: "Tiwari"
        }
    }

    
} 
// accesing
console.log(anotherUser.fullName.UserFullName.FirstName);

console.log("--------------------------------------------------------------------------------------------------------------");

// whene we have to add/merge two objects we use assign({}, objects)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2);
// we can ignore {} but it is used to store merged value in it
console.log(obj3);

console.log("--------------------------------------------------------------------------------------------------------------");

// we can also spread objects
const obj4 = {...obj1, ...obj2}
console.log(obj4);

console.log("--------------------------------------------------------------------------------------------------------------");

// also we can hold multiple objects in a array

const user = [
    {
        id: 1,
        Name: "Rohit"
    },
    {
        id: 2,
        Name: "Rahul"
    }
]
console.log(user[0].Name);

console.log("--------------------------------------------------------------------------------------------------------------");

// we can access key and value of the object in array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log("--------------------------------------------------------------------------------------------------------------");

// hasOwnProperty used to check if the value exists or not!
console.log(tinderUser.hasOwnProperty('Name'));
console.log("--------------------------------------------------------------------------------------------------------------");
// obeject de-structure
// so destructuring means we just try to dmilify our object to 
// allows you to extract properties from objects and bind them to variables using a syntax that mirrors object literals.
// Object ke andar jo properties hoti hain unhe direct variables me nikalna hi object destructuring kehlata hai.
const course = {
    courseName: "javascript",
    coursePrice: "999",
    courseInstructor: "Hitesh"

}

// destructuring....
const {courseInstructor: tutor} = course
// now we can  just call tutor
console.log(tutor);
/* API:- Application Programming Interface is a set of rules and protocols that allows different software (also
different programming languages) to communicate and exchange data with each-other.
API actually gives protocol and which data to be send.
*/
/* JSON(JavaScript Object Notation):- this is just a formate in which we store and tranfer the data.
whenever API send data it sends in JSON
 */
/* JSON can be in form of object or array:-
{
    "Name" : "Rohit"
    "Course" : "MCA"
}
    Or,
[
{}
{}
]
like that

*/


