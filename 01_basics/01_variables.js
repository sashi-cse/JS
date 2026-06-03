const accountId = 8485044
let accountEmail = "sashisanjay@gmail.com"
var accountPassword = "sashiSanjay"
accountCity = "Patna"
let accountState;

// accountId = 2; //not allowed
console.log(accountId);

accountEmail = "sashi@gmail.com"
accountPassword = "ashi"
accountCity = "Bangaluru"

/*
prefer not to use var because of issue in block scope and fuctional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])