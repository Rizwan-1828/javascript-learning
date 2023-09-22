const accountId = 138
let accountEmail = "138gmail.com"
var accountPassword = "43263"
accountCity = "Mumbai"

/*  
Prefer not to use var 
because of issue in block scope and functional scope 
*/

// accountId = 145
accountEmail = "sriz@.com"
accountPassword = "12343"
accountCity = "Chennai"

console.table([accountId,accountEmail,accountPassword,accountCity])