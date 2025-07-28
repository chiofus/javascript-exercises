/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number | string}
 */
const sumAll = function(n1, n2) {
    let sum = 0;
    let starting = Math.min(n1, n2);
    const ending = Math.max(n1, n2);

    console.log(typeof(n1))
    console.log(typeof(n2))

    if (n1 < 0 || n2 < 0) {
        return "ERROR";
    }

    if (typeof(n1) !== 'number' || typeof(n2) !== 'number') {
        return "ERROR";
    }

    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        return "ERROR";
    }

    while (starting <= ending) {

        sum += starting;

        starting += 1;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
