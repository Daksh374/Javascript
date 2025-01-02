let myDate = new Date()
console.log(myDate)     //unreadable format

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);    // typeof=> Object

let myDate1 = new Date(2024 , 0 , 30)
console.log(myDate1.toDateString())

let myDate2 = new Date(2024,1,24,5,6)
console.log(myDate2.toLocaleString());

let myDate3 = new Date("2024-12-31")       //YYYY-MM-DD format
console.log(myDate3.toLocaleString());


let myTimeStamp = Date.now()    
console.log(myTimeStamp);  // Time in milliseconds

console.log(myDate3.getTime());

console.log(Math.floor(Date.now()/1000))    //Time in seconds


let myCreateDate = new Date()
myCreateDate.toLocaleString('default',{
    second: myTimeStamp
    
})
