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

function calculateCartPrice(val1, val2, ...num1){        // ... operator is used to detect multiple values
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

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
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
