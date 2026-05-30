const permutations = function(array) {
    if (array.length < 2) return [array];
    
    let shorterArrayPermutations = permutations(array.slice(0, array.length - 1));
    let arrayPermutations = [];
    for (const element of shorterArrayPermutations) {
        for (let i = 0; i <= element.length; i++) {
            arrayPermutations.push(element.toSpliced(i, 0, array.at(-1)));
        }
    }
    return arrayPermutations;
};
  
// Do not edit below this line
module.exports = permutations;
