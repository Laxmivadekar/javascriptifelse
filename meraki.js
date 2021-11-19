// If this number is less than 10 then print "number is less than 10". 
// If it is greater than 10 and less than 20 then print "number is less than 20". 
// Else if it is greater than 20 then print "greater than 20".

var n=15;
if (n<10){
    // console.log('number is less than 10')
    if (n<=10){
        console.log(n)
    }
    else if(n>10 && n<20){
        console.log('number is less than 20')
}
}
else{
    console.log('greater than 20')
}