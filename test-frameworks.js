const assertEquals = (actual, expected) => actual === expected;

const checkEvenNum = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

module.exports = { checkEvenNum, assertEquals };

//console.log(assertEquals([1, 2, 3, 4, 5, 6]));
//console.log(assertEquals([0, 1, 2]));
//console.log(assertEquals([1, 3, 5]));