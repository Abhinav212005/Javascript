// Immediately Invoked Function Expressions (IIFE)
//An IIFE (Immediately Invoked Function Expression) is used to execute code immediately 
//while creating its own scope, which prevents leaking variables into the 
//global scope and enables encapsulation and privacy for data and functions.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semi colon is to end

// ()() => here the first parenthesis is for function definition and second one is for execution

( (name) => { //simple or un named iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')      // => DB CONNECTED TWO hitesh
