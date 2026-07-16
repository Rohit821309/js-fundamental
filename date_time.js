// so currently we are implement date and time manually, but in future we can use some methods for it, just like Math
let myDateAndTime = new Date()
console.log(myDateAndTime)
// so there are many strings to get readable output like
const NewDate = myDateAndTime.toString()
console.log(NewDate);
const NewDate1 = myDateAndTime.toLocaleDateString()
console.log(NewDate1);
// date and time is a object we can check it also
console.log(typeof myDateAndTime);
// also we can give  parameter as per need
let myDateTime = new Date(2023, 0, 14)
console.log(myDateTime.toDateString());
// stamps :- give the date in miliseconds like-
console.log(Date.now());
// also by using .getTime() to get any dates in ms
// for example
console.log(myDateTime.getTime());
// also whene we need to get all of this in secondd than we simply devide it with the 1000 lets try a example:-
let dateForMe = Date.now()
let dateForMe1 = dateForMe/1000
console.log(dateForMe1);
// And to get a round fo value:-
console.log(Math.round(dateForMe1));
// similarly we can use .getmonth to get only month from date and so on...
console.log(myDateTime.getMonth())
// also we can customize our output with the help of LocalString
console.log(myDateTime.toLocaleString('default', {
    weekday: "long"
}))




