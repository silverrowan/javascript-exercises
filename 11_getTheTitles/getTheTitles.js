const getTheTitles = function(bookList) {
    let titlesOnly = [];
    for (let n in bookList) {
        titlesOnly.push(bookList[n].title);
    };
    return titlesOnly;
};

// Do not edit below this line
module.exports = getTheTitles;

/*

create object bookTitles by copying obj books
    with a filter?

For each array item
    return array item title
lol nope.
*/