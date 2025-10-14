// array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [0, 1, 2, 3, 4, 5] //shallow copy -> same reference point -> changes will be in original copy as well //deep copy
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() => last value will be removed

// myArr.unshift(9) => it will be added to the start of the array and other values will be shifted and the last value will be removed
// myArr.shift() => starting value is removed

// console.log(myArr.includes(9)); => false
// console.log(myArr.indexOf(3)); => 3(as 0 is already removed)

// const newArr = myArr.join()

// console.log(myArr); [1,2,3,4,5]
// console.log( newArr); =>1,2,3,4,5 array is converted to string by join
// console.log(typeof newArr) => string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [1,2]
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // [1,2,3] last value is included
console.log("C ", myArr); // C [0,4,5] (original array is updated by splice as it removes the sliced portion)
console.log(myn2); // [1,2,3]