// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function one(){                            // named IIFE
    console.log(`DB CONNECTED`)
})();

((name) => {                      //Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('DAKSH')


// ()() -> 1st paranthesis are used for function declaration and 2nd is used to execute the code

// IIFE are the functions which are executed immediately and aree used because global scope pollution creates problems
// many time , so in order to remove that pollution we use IIFE
