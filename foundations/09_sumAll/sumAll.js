const sumAll = function(limit1, limit2) {
    if (limit1 < 0 
        || limit2 < 0 
        || !Number.isInteger(limit1) 
        || !Number.isInteger(limit2)) return "ERROR"
    let sum = 0;
    if (limit1 <= limit2) {
        for (let i = limit1; i <= limit2; i++) {
            sum += i;
        }
    } else {
        for (let i = limit2; i <= limit1; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
