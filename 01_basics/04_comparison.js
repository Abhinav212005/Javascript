// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);=>true
// console.log("02" > 1);=>true

//equality check and comparison work differently as comparison converts null to 0 whereas equality does not convert it
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === =>strict check

console.log("2" === 2);//false because it is strictly checked
