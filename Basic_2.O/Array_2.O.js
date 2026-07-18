/* whene we push one array into another than it not give  sinngle array in that case it take another
array as a single element , array in an array */
let marvel_heros = ["ironman", "thor", "Hulk"]
let dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
marvel_heros.pop()
// actually it gives array inside array
console.log(marvel_heros)
//  so we use concate to merge to arrays
const All_Heros = marvel_heros.concat(dc_heros)
console.log(All_Heros);
// spread
const all_New_Heros = [...marvel_heros, ...dc_heros]
console.log(all_New_Heros);
// flat is use to solve array in which there are array in array and those arrays are in the depth
const Arr_1 = [1,2,3,[4,5,6], 267, [23,4,56,67,[34,67,78]]]
// so in these cases we use flat method to solve it out
/*
whene we use flat() we  pass parameter
and those parameters are nothing more than depth of the array
but whene we dont have idea about depth  we can simply pass
infinity
 */
console.log(Arr_1.flat(Infinity))
// Array.isArray() this method as it name suggest it use for the identification of array
console.log(Array.isArray("Rohit")); // annswer is false because it is a string
// Array.from() use to convert string into a array
console.log(Array.from("Rohit"))
console.log(Array.from[{name: "Rohit"}]) //gives undefined because it can't  change it
// and last but not least we use .of() to convert or merge multiple variables into a single array for example:- 
let score1 = 99
let score2 = 98
let score3 = 88
const All_In_One = Array.of(score1, score2, score3)
console.log(All_In_One);

