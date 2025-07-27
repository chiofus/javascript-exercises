/**
 * 
 * @param {Array} og_array 
 * @param  {...any} to_remove
 * @returns {Array}
 */
const removeFromArray = function(og_array, ...to_remove) {
    let new_array = structuredClone(og_array);

    for (let i = 0; i < to_remove.length; i++) {
        while (new_array.includes(to_remove[i])) {
            new_array.splice(new_array.indexOf(to_remove[i]), 1);
        }
    }

    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
