/*console.log("_________________Square star pattern_______________")
let n = 5; // row or column count
// defining an empty string
let string = "";
for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j <=i; j++) { // internal loop
    string += "*"; }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);*/

/*let n=4;
for (var i=1;i<=n;i++){
    let str="";
  for (var j=1;j<=n;j++){
    str+="*"}
    console.log(str)
    str+="\n"
}*/

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
console.log(string);