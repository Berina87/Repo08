// Only change code below this line
var minNumber;
var maxNumber;

function randomRangeNumber(minNumber, maxNumber){
    
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    
}

console.log(randomRangeNumber(minNumber, maxNumber));
// Only change code above this line

module.exports = randomRangeNumber;