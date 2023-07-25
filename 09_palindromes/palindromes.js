const palindromes = function (str) {
    let indexEnd = str.length - 1
    let indexStart = 0
    while( indexStart < indexEnd){
        if(str[indexStart++] != str[indexEnd--]) {
            return false
        } 
    }    
    return true
};

console.log(palindromes("AramkrA"))
// Do not edit below this line
module.exports = palindromes;
