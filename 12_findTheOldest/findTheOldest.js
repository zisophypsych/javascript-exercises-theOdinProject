const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    const sortedArray = array.sort((a,b) => ((a.yearOfDeath || currentYear) - a.yearOfBirth) > 
    ((b.yearOfDeath || currentYear) - b.yearOfBirth) ? -1 : 1);
    return sortedArray[0];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
