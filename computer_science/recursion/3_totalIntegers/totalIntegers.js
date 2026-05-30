const totalIntegers = function(object) {
    if (typeof object != "object") {
        return;
    }
    const values = Object.values(object);
    let counter = 0;
    for (const value of values) {
        if (Number.isInteger(value)) {
            counter += 1;
        }
        if (typeof value == "object" && value != null) {
            counter += totalIntegers(value);
        }
    }
    return counter;
};
  
// Do not edit below this line
module.exports = totalIntegers;
