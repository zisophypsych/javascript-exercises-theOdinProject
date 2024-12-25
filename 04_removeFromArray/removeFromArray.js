const removeFromArray = function(...theArgs) {
    const onlyArray = [];
    for (const arg of theArgs) {
        if (Array.isArray(arg)) {
            onlyArray.push(arg);
        }
    }
    return onlyArray;
};



// Do not edit below this line
module.exports = removeFromArray;
