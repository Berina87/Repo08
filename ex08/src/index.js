// Only change code below this line
var total = 0;

function funcWithArg(digit){
    digit = (digit + 9) /5;
    return digit;
}
total = funcWithArg(6);

//Only change code above this line

console.log(total);
module.exports = funcWithArg;