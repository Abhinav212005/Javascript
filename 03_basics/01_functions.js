
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// console.log("Result: ", result); => undefined

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 // after returning the value function's work is done 
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); => 8


function loginUserMessage(username = "sam"){  // sam is default value if something is passed then it will be overwritten
    if(!username){                               //undefined, empty string are considered as 0
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) => [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) => [ 500, 2000 ] // val1=200 and val2=400 while other values goes to num1

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})                   // Username is sam and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); => 400
console.log(returnSecondValue([200, 400, 500, 1000])); // 400