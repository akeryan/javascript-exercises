const palindromes = function (str) {
    console.log(str)
    let indexStart = 0
    let indexEnd = str.length - 1

    console.log(str[indexStart])
    console.log(str[indexEnd])

    if(indexStart < indexEnd){
        if(str[indexStart++] != str[indexEnd--]) {
            return false
        } else {
            palindromes(str.slice(indexStart, indexEnd + 1))
        } 
    } else {
        return true
    }   
};

let str = 'AramakrA'

console.log(palindromes(str))
// Do not edit below this line
module.exports = palindromes;
