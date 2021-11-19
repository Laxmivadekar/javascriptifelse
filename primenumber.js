var n=require("readline-sync");
const num=n.questionInt("enter number: ");
let i=1
var count=0;
while (i<=num) {
  if (num%i==0) {
  count=count+1
  }
  i++;
}
console.log(count)
if (count===2) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}

/*var readline=require('readline-sync')
var a=readline.question('enter the string: ')
var temp=a
var string=''
for (var i=temp.length-1;i>=0;i--){
  string+=temp[i]
}
if (a==string){
  console.log('polymdron')
}
else{
  console.log('not polyndron')
}*/

// var i=1;
// while (i<=50){
//   if (i%2==0){
//     console.log(-i)
//   }else{
//     console.log(i)
//   }
//   i++
// }