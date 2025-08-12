/**
 * 
 * @param {string} str
 * @returns {boolean}
 */
const palindromes = function (str) {
    const to_remove = [' ', '.', ',', ';', ':', '!', '?'];

    let chars = str.split('').filter(chr => !(to_remove.includes(chr))).map(chr => chr.toLowerCase())

    for (let i = 0; i < chars.length/2; i++) {
        if (chars[i] !== chars[(chars.length-i-1)]) {return false;}
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
