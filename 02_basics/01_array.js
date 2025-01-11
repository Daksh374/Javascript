// Array
const myArr = [1,2,3,4,5]
console.log(myArr);

let myHeroes = ["Shaktiman, Nagraaj"]

const myArr1 = new Array(2,4,6,8)
console.log(myArr1);

//Array Methods
// myArr.push(6)
// myArr.push(9)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

myArr.unshift(8)           //Used to enter element in starting of array
console.log(myArr);

myArr.shift()      //Used to delete the unshift element, no parameter is given 


console.log(myArr.includes(1));    //Returns true/false
console.log(myArr.indexOf(4));    //Returns -1 , if no index is found 

const newArr = myArr.join()
console.log(newArr);      //type => String

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   //removes the given elements between given indexes
console.log("C ", myArr);
console.log(myn2);









