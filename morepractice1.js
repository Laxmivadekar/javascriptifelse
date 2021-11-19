/*const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--){
   string=string+name[i]
}
if (store===string) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}*/

const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
let i=name.length-1
while (i>=0){
   string+=store[i]
   i--
}
if (name==string){
   console.log('it is a polyndrom')
}
else{
   console.log('it is not a polyndrom')
}