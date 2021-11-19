// var readlineSync=require('readline-sync')
// var num=readlineSync.question('enter the number: ')
// if (num%2==0){
//     console.log('divisible by two')
// }
// else{
//     console.log('not divisible by two')
// }

var readlineSync=require('readline-sync')
var num1=readlineSync.question('enter the number: ')
// var readlineSync1=require('readline-sync')
// var num2=readlineSync1.question('enter the number: ')
if (num1%5==0 && num1%15==0){
    console.log('it is divisible by both')
}
else{
    console.log('not divisible')
}