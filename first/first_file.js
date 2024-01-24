//console.log("hello")
const accountId = 14444
let accountEmail = "hello@gmail.com"


//the 'var' keyword was used before, but it has scope problem. It's better to use the 'let' keywords instead.
//prefer not to use the var
var accountPassword = "1234"
accountCity = "Pune"

accountEmail = "hello123@gmail.com"
accountPassword = "123121"
accountCity = "Mumbai"

let accountState;

// accountId = 4
/* console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity); */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])