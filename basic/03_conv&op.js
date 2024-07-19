//****************************Conversions***************************************/

let score =33
console.log(typeof score); //number
score='win'
console.log(typeof score);//string
let score2="abs"
let value=Number(score2)
console.log(value);//NaN
console.log(typeof value);//Number
/*
Similarly
"33"=>33
"33a"=>NaN
true =>1; false=>0
null =>0
undefined=>nan
*/

let logged=233
let bool_ans=Boolean(logged)
console.log(bool_ans);//true

/*Similarly
"any string"=>true ; ""=>false
1 or any number=>1 ; 0=>false
null,undefined=>false
*/

let num=undefined
let str=String(num)
console.log(str);//undefined

/* Similary all other variable
with different datatype converts
to string*/

// ********************************* Operations ***************************

// Baic Arithmetic operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/4);
// console.log(2%4);

let str1="hello"
let str2=" world"
let str3=str1+str2 //concatination
console.log(str3); //hello world

// Minor things to Remember

console.log('1'+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+'2'+2); //122
console.log(1+2+'2'); //32 => how?->ECMA Script
console.log("1"+'2'+2); //122
console.log(1+'2'+"2"); //122
console.log("1"+2+"2"); //122

// NOTE: READABILITY is most important in coding

  



