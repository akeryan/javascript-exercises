// const palindromes = function (str) {
//     let indexEnd = str.length - 1
//     let indexStart = 0
//     while( indexStart < indexEnd){
//         if(str[indexStart++] != str[indexEnd--]) {
//             return false
//         } 
//     }    
//     return true
// };


const palindromes = function (str) {
    let indexStart = 0
    let indexEnd = str.length - 1

    if(indexStart < indexEnd){
        if(str[indexStart++] === str[indexEnd--]) {
            return palindromes(str.slice(indexStart, indexEnd + 1))
        } 
        return false        
    }
    return true  
};

let str = 'ArimarA'

console.log(palindromes(str))
// Do not edit below this line
module.exports = palindromes;
