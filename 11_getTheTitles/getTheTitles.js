const getTheTitles = function(object) {
    titles = [];
    for (item of object) {
        titles.push(item.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
