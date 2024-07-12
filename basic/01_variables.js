// for documentation use MDN 

const accountId=14453
let accountEmail="nishantsekhri33@gmail.com"
// var pass='124'

/* Prefer not to use var 
because of issue in block scope and functional scope
*/
let pass='124'
accountcity='chandigarh'

/* JS allows to declare a variable without keyword
but it is generally advised to not declare 
without keyword
*/
let accountState;

accountEmail="doka"
pass='234'
accountcity="pune"

// accountId=2 -> error as accountId is constant(const)

// to print multiple values in tabular form
console.table([accountId,pass,accountEmail,accountcity,accountState])