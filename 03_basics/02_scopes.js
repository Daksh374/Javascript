//var c = 300         not to use var , it does not obey scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b);      no output will be provided as Scope is inside if 
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);       // It will declare a error as scope is outside 

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);          // it will return a error as scope is outside
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo = function(num){       // 2nd syntax to declare a function
    return num + 2
}
addTwo(5)