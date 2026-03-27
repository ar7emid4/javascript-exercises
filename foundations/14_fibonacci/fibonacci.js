const fibonacci = function(index) {
    if (!Number.isInteger(+index)) return "OOPS";
    if (+index < 0) return "OOPS";
    if (index == 0) return 0;

    let prevNumber = 0;
    let currentNumber = 1;
    for (let i = 1; i < index; i++){
        let temp = currentNumber;
        currentNumber += prevNumber;
        prevNumber = temp;
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
