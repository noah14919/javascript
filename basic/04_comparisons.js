// Genral comparisons[easy to guess]
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


console.log("2">1);//true
console.log("02">1);//true

//Nulls and Undefined comparisons

console.log(null>0);//false
console.log(null==0);//false
console.log(null<0);//false
console.log(null>=0);//true[unpredicteble]
/* Reason
">,<" and "==" operator works differently
"==" operator converts null value into "Nan" 
whereas ">,<" operator converts null to 0,
therefore when we do 
if null==0, then null converts to nan , thus false
if null>=0,then null changes to 0 thus o/p is true 
and null>0 or null<0 ,o/p is false
*/

console.log(undefined==0);//false
console.log(undefined>=0);//false
console.log(undefined<=0);//false

//note:-try to avoid them to avoid confusion

//=== :- strict check (value and datatype)
console.log(0===0);//true
console.log("0"===0);//false
