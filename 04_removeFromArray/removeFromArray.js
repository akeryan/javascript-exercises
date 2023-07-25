const removeFromArray = function(arr, ...vArgs) {
    let len = vArgs.length;

    while (len > 0) {
        let element = vArgs[len-1];

        if(arr.includes(element)) {
            let i = arr.indexOf(element);
            arr.splice(i, 1);
        }
        len--;
    }     
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

