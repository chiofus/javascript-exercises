const repeatString = function(to_repeat, repetitions) {
    let repeated_string = "";

    if (repetitions < 0) {
        return "ERROR";
    }

    for (let i = 0; i < repetitions; i++) {
        repeated_string += to_repeat;
    }

    return repeated_string;
};

// Do not edit below this line
module.exports = repeatString;