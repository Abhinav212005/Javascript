const accountId = 142 //value once assigned cannot be changed
let accountEmail = "hiteshgoogle.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId =2 // not allowed

accountEmail = "hc@h.com"
accountPassword = "213"
accountCity = "bengal"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
