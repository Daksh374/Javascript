//Object Literals 

// Object.create     -> constructor method

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Daksh",
    age:  19,
    location: "Gurgaon",
    email: "daksh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Tuesday", "Friday"],
    [mySymbol]: "keyss"
}

console.log(JsUser.email);     //1st method to access elements
console.log(JsUser["email"]);   //2nd method to access elements

JsUser.age = 22;
//Object.freeze(JsUser);     //now the value of object cannot be changed
JsUser.age = 25;

console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user ");
    
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user ${this.name}`);
    
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());







