//  Primitive => call by value => it means a copy is created and changes will be done in the copy not in the original

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;// value is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// false as both symbols are unique

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];// array => object is returned in case of typeof
let myObj = {
    name: "hitesh",
    age: 22,
}// object

const myFunction = function(){
    console.log("Hello world");
}// object function

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3