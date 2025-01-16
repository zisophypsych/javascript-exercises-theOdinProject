const palindromes = function (a) {
    cleanedString = a.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    joined = cleanedString.split('').reverse().join('');
    if (joined === cleanedString){
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
