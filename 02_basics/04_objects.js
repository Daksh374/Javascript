const tinderUser = new Object();       //method to declare an object 

tinderUser.id = "123abc"
tinderUser.name = "Ronny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Daksh",
            lastname: "Yadav"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);    //Elements are accesses using . operator

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1,obj2}   //not used to combine as combines the whole object
//const obj3 = Object.assign(obj1,obj2) //not used that much

const obj3 = {...obj1 , ...obj2}
console.log(obj3);


console.log(Object.keys(tinderUser))           // We get an Array in return
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name'));     // To check that Key exists in Object or not

const course = {
    coursename: "Javascript in Hindi",
    price: "999",
    instructor: "Hitesh Chaudhary"
}

//console.log(course.instructor)

const {coursename: n} = course       // destructure the object using (:)  //Used to prevent using . operator
console.log(n);


//JSON
// {
//     "coursename": "Javascript in Hindi",
//     "price": "999",
//     "instructor": "Hitesh Chaudhary"

// }







