//method one
const reverseString = function(string) {
    return string.split('').reverse('').join('');
};

//method two
const reverseString = function(string) {
    let newString = '';

    for (x = string.length -1; x >= 0; x--) {
        newString += string[x];
    };
    return newString;
};



// Do not edit below this line
module.exports = reverseString;
