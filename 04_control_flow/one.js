// if else statement
const isUserLoggedIn = true;
const temperature = 43;

if (2 != 3){            //Statement is true so it will be executed
    console.log("Code executed Successfully");
    
}

// if (temperature < 50 ){
//     console.log("Temperature is less than 50");
    
// } else{
//     console.log("Temperature is greater than 50");
// }

// const score = 200;
// if(score > 100){
//     let power = "You can fly";
//     console.log(`User Power: ${power}`);
    
// }

// const balance = 90;
// if (balance < 1000) {
//     console.log("Less than 1000");

// } else if(balance < 500){
//     console.log("Less than 500");

// } else if(balance < 250){
//     console.log("Less than 250");
// } else{
//     console.log("Greater than 1000");
// }

const userLoggedIn = true;
const debitCard = true;

const LoggedInFromGoogle = false; 
const LoggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allowed to purchase");
}

if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User Logged In");
    
}