const accountId = 1
let accountEmail = "daksh@google.com"
var accountPassword = "12345"
accountCity = "Gurgaon"   // not a good method

console.table([accountId, accountEmail,accountPassword, accountCity])   // console.table() is used to print in a tabular form 

// accountId = 2 (this is not allowed as value remains constant by using const)
accountEmail = "daksh123@gmail.com"
accountPassword = "54321"
let accountState;


console.table([accountId, accountEmail,accountPassword, accountCity,accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/