

/*var i=5;
while (i>=1){
    var j=1;
    var string=''
    while (j<=5){5 5 5 5 5
// 4 4 4 4 4
// 3 3 3 3 3
// 2 2 2 2 2
// 1 1 1 1 1
        string+=i
        j++
    }
    console.log(string)
    i--
    // console.log()
}*/

/*let n=require("readline-sync");
let choose_ascii=(n.questionInt("enter number: "));
var ascii_char=97+choose_ascii
for (var i=97;i<=ascii_char;i++) {
       console.log(chr(i),end="");
}*/


const result = {
success: ["max-length", "no-amd", "prefer-arrow-functions"],
failure: ["no-var", "var-on-top", "linebreak"],
skipped: ["no-extra-semi", "no-dup-keys"]
};
const success=result.success
const store=success.length
for(const value in success){ 
console.log(success[value]) 
}
