const sumAll = function(a, b) {
    let sum = 0;
    let start = 0;
    let end = 0;

    if(!(typeof(a) === 'number' && typeof(b) === 'number'))
        return "ERROR";

    if( a < 0 || b < 0)
        return "ERROR";

    if(a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    } 

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
