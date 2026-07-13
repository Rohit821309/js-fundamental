// there are so many comparisons
console.log(2 <3); // true
// also
console.log(2 == "2"); // true
// but typescript not allowed this type of conversion
// also with null and undefined
console.log(null > 0); // false
console.log(null == 0);
console.log(null >= 0); // true because null is converted to 0 in tht cases
// undefined
console.log(undefined > 0); // false
console.log(undefined == 0); // false       
console.log(undefined >= 0); // false
// it gives false in all cases because undefined is not converted to 0 
// there are a term strict check
console.log(2 === "2"); // false