// ================ NUMBERS ===================
const score = 500
// console.log(score)


const balance = new Number(1000)      // Explicitly converting into number      
// console.log(balance);

// console.log(balance.toString())   //number converted into string and now properties of strings can also be used
// console.log(balance.toFixed(2));    // upto decimal points

const otherNum = 115.890
// console.log(otherNum.toPrecision(3));      //returns value in string format
// console.log(otherNum.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString());     // By default US value
// console.log(hundreds.toLocaleString('en-IN'));     // Indian Value


// ----------------=> MATHS <=---------------- 
console.log(Math.abs(-5));        //-ve to +ve
console.log(Math.round(5.78));     //Round-off

console.log(Math.ceil(4.2));     // upper value
console.log(Math.floor(4.2));    // lower value

console.log(Math.sqrt(9));
console.log(Math.max(7,8,9,10));

console.log(Math.random());     // gives output between 0-1
console.log((Math.random()*6)+1);   //output between 1-6

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) + min));  // round off value between max and min 









