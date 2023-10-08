// const myArr = [1,2,3,4,5,6,7,8]
const myArr = new Array(1,2,3,4,5,6,7,8)

// myArr.push(9) // push adds the value at the last index of an array
// myArr.push(10)
// console.log(myArr);

// myArr.pop() // pop removes the value present at the last index of an array
// console.log(myArr);

// myArr.unshift(11) // unshift works same as push but it adds the element at the starting index
// myArr.unshift(12)
// console.log(myArr);

// myArr.shift() // shift works same as pop but instead it removes element from the starting index
// console.log(myArr);

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(8));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// =====================================================================================================================

console.log("A ",myArr);
console.log("Using slice: ",myArr.slice(1 , 4)); // slice gives element till n-1 and it operates on the copy of an array 
console.log("After using slice:");
console.log("B ",myArr);

// the diferrence between slice is and splice is that slice don't manipulate the 
// actual array while splice manipulates the actual array 
// eg: here slice returns [2,3,4] and the original array left is [1,2,3,4,5,6,7,8] i.e no change in original array
// eg: here splice returns [2,3,4,5] and the original array left is [1,6,7,8] i.e it changes the actual array

console.log("Using splice: ",myArr.splice(1 , 4)); // splice works on the actual array i.e. it manipulates the original array and it gives element till the n
console.log("After using splice:");
console.log("C ", myArr);