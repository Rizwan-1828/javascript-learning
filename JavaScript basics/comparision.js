// This are basic comparisions where both values are of same type 
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// This are basic comparisions where both values are of different type which creates problems
// console.log("2" > 1);
// console.log("02" > 1);

// Avoid this type of conversions 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// because they will make you feel confused
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === i.e. strict check , it also checks the datatype of both values

console.log("2" === 2);