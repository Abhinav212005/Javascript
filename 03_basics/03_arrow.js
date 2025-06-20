const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);                                 //=> hitesh , welcome to website
                                                           //  {username: "hitesh",
    }                                                      //   price: 999,
                                                           //   welcomeMessage: [function: welcomeMessage]
                                                           //  } 
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()                                 =>  sam , welcome to website
                                                        //  {username: "sam",
                                                        //   price: 999,
                                                        //   welcomeMessage: [function: welcomeMessage]
                                                        //  } 

// console.log(this);   => {} and in browser it will come as window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); 
// }

// chai()  => undefined // we can use this inside objects only and not inside functions

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()  => undefined // we can use this inside objects only and not inside functions(2nd way of declaring)

const chai =  () => {       // Arrow function
    let username = "hitesh"
    console.log(this);
}

// chai()   => undefined

// const addTwo = (num1, num2) => { 
//     return num1 + num2      //Explicit return     
// }

// console.log(addTwo(3, 4)) => 7

// const addTwo = (num1, num2) =>  num1 + num2 // Implicit return for one line statement
// console.log(addTwo(3, 4)) => 7

// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4)) => 7

const addTwo = (num1, num2) => ({username: "hitesh"}) //For returning object it's mandotry to wrap it inside parenthesis


console.log(addTwo(3, 4))  // => hitesh


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()