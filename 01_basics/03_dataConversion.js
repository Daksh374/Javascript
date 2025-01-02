let score = "33abc"     

console.log(typeof score)
console.log(score)

let valueInNum = Number(score)

console.log(typeof(valueInNum));
console.log(valueInNum);  //output => Nan - Not a number 

// inputs and outputs
// "33" => 33
// "33abc" => NaN
// "Daksh" => NaN
// true => 1 , false => 0
// null => 0
// undefined = Nan

let isLoggedIn = 1

let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn);

// 1 => true , 0 => false
// "" => false
// "Daksh" => true

let num = 7
let typeNum = String(num)
console.log(typeof num);
console.log(typeof typeNum);


/* ARITHMETIC AND STRING OPERATIONS */

console.log(3**3)

let str1 = "Hello"
let str2 = " Daksh"
let str3 = str1 + str2
console.log(str3)           //Hello Daksh
console.log("1" + 2);      //12
console.log("1" + "2");    //12
console.log("1" + 2 + 2);    //122
console.log(3 + 4 + "2");    //72


let counter = 100
counter++
console.log(counter)      //101 (incremented by 1)
