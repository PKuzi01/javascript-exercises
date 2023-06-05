const palindromes = function (string) {
    let lowerCase = string.toLowerCase('');
    let removePunctuation = lowerCase.replace(/[^a-z]/g, "")
    let splitResult = removePunctuation.split('');
    let reverseResult = splitResult.reverse();
    let finalResult = reverseResult.join('');
    
    if (finalResult == removePunctuation) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
