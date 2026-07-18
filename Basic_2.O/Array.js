// in genrally array in js can be resizable, mean we can add elements in existing array
const myArr = [1,2,3,4, "ROHIT"]
            // or
const myArr2 = new Array(1,2,3,4,5)

console.log(myArr)

console.log(myArr2)
// there are some methodes like push and to insert and delete element in array
myArr.push(8)
console.log(myArr);
myArr.pop()
console.log(myArr);
// unshift :- so this method is similar to push() but it insert value at begining of array
myArr2.unshift(10)
console.log(myArr2)
myArr2.shift() //just to remove/delete item from front
console.log(myArr2);
// whene we need to check if the  element is available in array or not, we can use include() and this method gives the value in boolean
console.log(myArr2.includes(4))
// indexof
console.log(myArr.indexOf(2))
// join use to  convert array into string
let newArray = myArr.join()
console.log(newArray);
console.log(typeof newArray);
// slice and splice 
// slice just give value from between the range
console.log(myArr.slice(1,3));
// slice not do changes in actuall array
console.log(myArr)
// on the other hand splice perform changes in actuall array for example:-
let newArray2 = [0,1,2,3,4,5,6,7,8,9]
console.log(newArray2.splice(1, 3))
console.log(newArray2);




