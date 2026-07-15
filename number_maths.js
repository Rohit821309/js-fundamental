// there are multiple way of creating numbers, and most common is
const score = 90 //it will detect autometacally that, it is a number
console.log(score)
const Balance = new Number(788) //here we declare exact number value if you run it in console so you can see many methods of Numbers
console.log(Balance)
// some methods are there for numbers
const otherNumber = 144.997
console.log(otherNumber.toPrecision(3));
const NewNumber = 100000
console.log(NewNumber.toLocaleString());
console.log(NewNumber.toLocaleString('en-IN'));

/* ++++++++++++++++++++++++++++ maths +++++++++++++++++++++++++++++++++++++*/
console.log(Math)
console.log(Math.abs(-4));  //gives absolute value
console.log(Math.round(4.67)) //gives the round of value of  digit, whene after . value is greater than 5 it gives next value otherwise same value,
//in above case it gives 5
//we can also control it manually by .floor() and .ceil()
console.log(Math.ceil(9.999));
console.log(Math.floor(9.999));
// also there are min() and max() to find minimum and maximum from a set of values
console.log(Math.min(4,5,2,88))
console.log(Math.max(4,5,3,2,88))
// random() selects some randome numbers in between the 0 and 1
console.log(Math.random())
// so we multiply it with 10 to get digit after decimal
console.log(Math.random()*10);
// so it can give 0,  to avoid this we add 1 which means we need minimum 1 value
console.log((Math.random()*10)+1);
// adding floor() or round() to get roung of value
console.log(Math.floor((Math.random()*10)+1));
// formula to minimum defined value whene there are min and max value
const min = 10;
const max = 20;
// formula
console.log(Math.round(Math.random()*(max-min + 1) + min));



