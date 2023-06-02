const removeFromArray = function(array, ...arg) {
   return array.filter(value => !arg.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
