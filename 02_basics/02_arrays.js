const marvel_heroes = ["Thor", "Spiderman", "Hulk"]
const dc_heroes = ["Superman", "Flash", "Batman","Robin"]

//marvel_heroes.push(dc_heroes);     //Not a good method to concatenate array
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes);    //Better way to concatenate
// console.log(allHeroes);


const all_new_heroes = [...marvel_heroes , ...dc_heroes];   //Best method to concatenate the array by using -> [...] (spread operator)
console.log(all_new_heroes);

const new_array = [1,2,3 ,[4,5,6] , 7,3,[1,2,[8,9]]]
const real_new_array = new_array.flat(Infinity)
console.log(real_new_array);

console.log(Array.isArray("Daksh"));
console.log(Array.from("DAKSH"));

console.log(Array.from({name : "Daksh"}));   //Will give empty array , we need to declare key or value 

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

