const palindromes = function (string) {
    console.log(string);
    let pucntuationless = string.replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("!", "")
    .replaceAll(" ", "");
    let lowerCase = pucntuationless.toLowerCase();
    let reversed = lowerCase.split("").reverse().join("");
    if (reversed == lowerCase) return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
