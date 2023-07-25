const palindromes = function (str) {
    let indexStart = 0
    let indexEnd = str.length - 1

    while( !isValidChar( str[indexStart] ) ) {
        if(++indexStart == undefined)
            return false
    }

    while( !isValidChar( str[indexEnd] ) ) {
        if(--indexEnd == undefined)
            return false
    }

    if(indexStart < indexEnd) {
        if(str[indexStart++].toUpperCase() === str[indexEnd].toUpperCase()) {
            return palindromes(str.slice(indexStart, indexEnd--))
        } 
        return false        
    }
    return true  
};

function isValidChar(a) {
    let code = a.charCodeAt(0)
    if( (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ) {
        return true
    }
    return false
}

// Do not edit below this line
module.exports = palindromes;
