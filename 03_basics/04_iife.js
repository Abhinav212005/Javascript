// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()() => here the first parenthesis is for function definition and second one is for execution

( (name) => { //simple or un named iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')      // => DB CONNECTED TWO hitesh
