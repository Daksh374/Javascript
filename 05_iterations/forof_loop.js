const arr = [1, 2, 3, 4, 5]
// FOR OF LOOP 
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1 : "Driving",
    game2 : "Car"
}

// for (const i of myObject) {           //MAPS ARE ITERABLE BUT OBJECTS ARE NOT HENCE FOROF DOES NOT WORK WITH OBJECTS
//     console.log(i);
    
// }