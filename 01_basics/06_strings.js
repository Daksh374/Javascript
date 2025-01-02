const name = "Daksh"
const age = 19

console.log(`Hello my name is ${name} and my age is ${age}`);   

const gameName = new String("Battle-Royale")        // way to declare a string 

console.log(gameName[1]);

//console.log(gameName.__proto__);    //to check the prototype of string (different methods of strings)

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(0));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,6)     // Last index is not included
console.log(newString);

const anotherString = gameName.slice(-6,2)      // Negative values can be added in slide()
console.log(anotherString);


const anotherStringOne = "       Daksh     "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());


const url = "https://daksh.com//daksh%20yadav"
console.log(url.replace('%20', '-'));

console.log(gameName.split("-"));






