const name = "hitesh" // string can be denoted with single quote also
const repoCount = 50

// console.log(name + repoCount + " Value"); => hitesh50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') //Using this we can access value pair and features that are available

// console.log(gameName[0]); => h
// console.log(gameName.__proto__); => {}


// console.log(gameName.length); => 13
// console.log(gameName.toUpperCase()); // here original value is not changed
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4) // negative value cannot be given
console.log(newString); // hite and last value(ending index) is not included

const anotherString = gameName.slice(-12, 4) // negative value can be given
console.log(anotherString); // ite

const newStringOne = "   hitesh    "
console.log(newStringOne);//    hitesh    ;exactly the same is printed
console.log(newStringOne.trim());// hitesh ;it trims the whitespaces as well as line terminators from beginning aand end

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar')) //false as it is not present

console.log(gameName.split('-')); //['hitesh','hc','com']