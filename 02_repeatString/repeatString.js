const repeatString = function(str, num) {
    if(num < 0) return "ERROR";
    let out = "";
    while(num > 0) {
        out += str;
        num--;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
