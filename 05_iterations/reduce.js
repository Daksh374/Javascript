const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)       //0 is the initial value

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        courseName : "WEB DEV Course",
        price : 999
    },
    {
        courseName : "JAVA Course",
        price : 1999
    },
    {
        courseName : "DSA Course",
        price : 2999
    }
];

const TotalPrice = shoppingCart.reduce(  (acc , item) => acc + item.price, 0)

console.log(TotalPrice);
