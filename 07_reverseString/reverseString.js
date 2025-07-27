/**
 * 
 * @param {string} to_reverse 
 * @returns {string}
 */
const reverseString = function(to_reverse) {
    let reversed = "";
    let str_length = to_reverse.length;

    for (let i = 0; i < str_length; i++) {
        reversed += to_reverse[str_length-1-i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;