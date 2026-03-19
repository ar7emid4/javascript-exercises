const removeFromArray = function(array, ...unwanted) {
    return array.filter((item) => !unwanted.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
