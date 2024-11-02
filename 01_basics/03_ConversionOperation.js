//let score = "33" =>number in form of string
//let score = "33a" =>string
//let score = null
//let score = undefined
let score = true

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);
console.log(ValueInNumber);

//"33" => 33
//"33a" => NaN also for undefined
//"true" => 1; "false" => 0

//let isLoggedIn = 1
let isLoggedIn = ''

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);