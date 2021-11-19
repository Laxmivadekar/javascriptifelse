/*var num1= 10;

var num2 = 20;

if (num1>num2){
    console.log('num1 is greater than num2')
}
else{
    console.log('num1 is not greater than num2')
}

var lan='Telugu'
if (lan=='Hindi'){
    console.log('wrong')
}
else if (lan=='urdu'){
    console.log('wrong')
}
else if(lan=='Marathi'){
    console.log('wrong')
}
else{
    console.log('Right')
}*/

/*var day='Saturday'.toLowerCase()
if (day=='sunday'){
    console.log('that day is sunday')
}
else if (day=='monday'){
    console.log('that day is monday')
}
else if (day=='tuesday'){
    console.log('that day is tuesday')
}
else if (day=='wednursday'){
    console.log('that day is wednusday')
}
else if (day=='thursday'){
    console.log('that day is thursday')
}
else if (day=='friday'){
    console.log('that day is friday')
}
else if (day=='saturday'){
    console.log('that day is saturday')
}
else{
    console.log('that day is sunday')
}*/

/*var x = 10;

var y = 12

var z = 90

 

if (x > y){

  if (x < z){

      x = y

  }

  else{

      m = z

  }

}

else {

  if(y > z){

      m = y

  }

  else {

      m = x

  }

   

}

console.log(m)*/
// var readlineSync = require("readline-sync");
// var firstName = readlineSync.question("First Name:");
// console.log("Hi" + firstName);

// This will work
a();

// This will throw an error
b();

// function declaration
function a() {
    console.log("This function is hoisted!");
}

// function expresssion
var b = function () {
console.log("This declaration makes function not hoisted!");
}