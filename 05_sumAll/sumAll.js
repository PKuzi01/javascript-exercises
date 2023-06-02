const sumAll = function(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return "error";
    };

    if (firstNumber < 0 || secondNumber < 0) {
        return "error";
    };

    if (firstNumber > secondNumber) {
        const temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    };
    
    let sumVal = 0;
    for (x = firstNumber; x <= secondNumber; x++) {
        sumVal += x;
    };
    return sumVal;
};

// Do not edit below this line
module.exports = sumAll;
