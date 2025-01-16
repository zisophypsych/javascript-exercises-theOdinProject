const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    const sortedArray = array.sort((a,b) => ((a.yearOfDeath || currentYear) - a.yearOfBirth) > 
    ((b.yearOfDeath || currentYear) - b.yearOfBirth) ? -1 : 1);
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
