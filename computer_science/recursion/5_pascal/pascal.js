const pascal = function(row) {
    if (row == 1) return [1];

    const previousRow = [0].concat(pascal(row - 1), [0]);
    
    let currentRow = [];
    for (let i = 0; i < previousRow.length - 1; i++) {
        currentRow.push(previousRow[i] + previousRow[i+1]);
    }
    return currentRow;
};
  
// Do not edit below this line
module.exports = pascal;
