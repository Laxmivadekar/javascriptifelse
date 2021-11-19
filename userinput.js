/*var num1 = 300 - 123;
let readlineSync = require("readline-sync");
var num2=readlineSync.question("enter a number");
console.log(num2)

if(num1==num2){
console.log("equal hai")
}
else{
console.log("not equal")
}*/

// Check if this number1 is greater than or equal to number2. If the entered number2 is greater than or equal to number1, 
// console "number2 is greater than or equal" else console "number2 is lesser".

var number1 = 44 * 30;
console.log(number1)
var a=require('readline-sync')
var number2=a.questionInt('enter the number: ')
console.log(number2)
if (number2>=number1){
    console.log('number2 is greaterthan or equal to number1')
}
else{
    console.log('number2 is lesser')
}