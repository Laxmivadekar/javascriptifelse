var i=50;
let sum=0
while (i>40){
    var a=require('readline-sync')
    var b=a.questionInt('enter the number:')
    sum+=b
    i--
}
console.log(sum)