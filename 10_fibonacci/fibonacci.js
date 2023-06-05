const fibonacci = function(post) {
    if (post < 0) {
        return `Nope, we don't accept negatives.`;
    } else if (post == 0) {
        return 0;
    } else if (post == 1) {
        return 1;
    } else {
        return fibonacci(post - 1) + fibonacci(post - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
