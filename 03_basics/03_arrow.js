const user = {
    username: "Daksh", 
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);    // this is used to get the current context 
        
    }
}

user.welcomeMessage()
user.username = "Varun"         // now value of username is changed , so it becomes the current context 
user.welcomeMessage()

console.log(this);  // it will print a empty object , but in browser it will show window object


// function one(){
//     let username = "Daksh"
//     console.log(this);    //it will print many values, but if we give this.username then, it will print undefined
// }

// one()


const one = () => {              //this is arrow function
    let username = "Daksh";
    console.log(this);
}

const addTwo = (num1 , num2) => {
    return num1 + num2;

}
console.log(addTwo(42,23));


const addThree = (n1 , n2 , n3) => (n1+n2+n3)     //this is called implicit return
console.log(addThree(3,4,5));


