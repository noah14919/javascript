// for documentaion use MDNm or ECMA

"use strict";//treat all js code as newer version

/* alert("hello") -> throws error as alert cannot be used in nodeJs 
but in web browser
*/
console.log("error")
/* semicolon are not necessary if
the code is readable or in proper form,but
are advised to use to reduce chances of error
*/
console.log("hello")

// Datatypes

let sname="nishant" //String
let age=19      // Integer/number
let ispresent=false //Boolean

//number
//bigint
//string
//boolean
//null(IMP)=>standalone value
//undefined => value is not defined,not zero
// symbol =>unique

// object 
 console.log(typeof age ) // used to print the type of data[Number]
 console.log(typeof sname ) // used to print the type of data[string]
 console.log(typeof ispresent ) // used to print the type of data[bool]
 console.log(typeof null ) // Interview question
 /* type of null should be "null" but according to 
 compiler it comes out to be "object" which 
 can/cannot be consider as an error in lang
 */
console.log(typeof undefined)// o/p:- undefined
