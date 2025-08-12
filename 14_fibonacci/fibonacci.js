/**
 * 
 * @param {number} nbr_at
 * @returns {number}
 */
const fibonacci = function(nbr_at) {
    let seq = [1,1];

    try {
        nbr_at = parseInt(nbr_at);
        if (nbr_at < 0) {throw "NEGATIVE" };
    }
    catch {
        return "OOPS";
    }   

    if (nbr_at === 0) {return 0};

    while (seq.length < nbr_at) {
        seq.push(seq[seq.length-1] + seq[seq.length-2]);
    }

    return seq[nbr_at-1];
};

// Do not edit below this line
module.exports = fibonacci;
