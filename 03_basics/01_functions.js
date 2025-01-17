//Functions
function sayName(){
    console.log("D")
    console.log("A")
    console.log("K")
    console.log("S")
    console.log("H")
}

// sayName()

// function addTwoNumber(num1 , num2){
//     console.log(num1+num2);
// }

// addTwoNumber(5,9)

function addTwoNumber(num1 , num2){
    let result = num1 + num2
    return result          // no command after return is executed
}

const result = addTwoNumber(3,4)
console.log("Result is -> ", result);


function loginUserMessage(username = "sam"){
    if(!username){                                   //This is same is username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Daksh"))
