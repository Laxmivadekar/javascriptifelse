// var choice ="overcast";
// var message ="" 
// if (choice === 'sunny') {
//     message = 'It is nice and sunny outside today. \nWear shorts! Go to the beach, or the park, and get an ice cream.'
//  } else if (choice === 'rainy') {
//      message = 'Rain is falling outside; \nTake a rain coat and an umbrella, and don\'t stay out for too long.'
//  } else if (choice === 'snowing') {
//      message = 'The snow is coming down — it is freezing! \nBest to stay in with a cup of hot chocolate, or go build a snowman.'
//  } else if (choice === 'overcast') {
//      message = 'It isn\'t raining, but the sky is grey and gloomy; \nit could turn any minute, so take a rain coat just in case.'
//  } else {
//    message = 'Nothing'
// }
// console.log(message)

// var n=15;
// if (n<10){
//     console.log('number is less than 10')
// }
// else if(n>10 && n<20){
//     console.log('number is less than 20')
// }
// else{
//     console.log('greater than 20')
// }

/*var a=require('readline-sync')
var b=a.questionInt('enter the number: ')
var c=require('readline-sync')
var d=a.questionInt('enter the number: ')
var e=b+d
console.log(e)
console.log(b+d)*/

var readlineSync =require('readline-sync');
var number=readlineSync.questionInt('enter the number: ')
if(number%3==0 && number%7==0) {
    console.log("Chocolate")
}
else if(number%3 === 0){
   console.log("choco")
}
else if(number % 7==0){
   console.log("late")
}
else if(number%3==0 && number%7==0) {
   console.log("Chocolate")
}
else {
   console.log("Not divisible by 3 , 7")
}