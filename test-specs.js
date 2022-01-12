const { checkEvenNum, assertEquals } = require("./test-frameworks.js");

const checkArray1 = () => {
    // arrange
    const expected = 3;
    const array1 = [1, 2, 3, 4, 5, 6];

    // act
    const actual = checkEvenNum(array1);

    //assert
    const result = assertEquals(actual, expected);

    //report

    console.log(`Count of array1 should be ${expected}: ${result}`);

}

const checkArray2 = () => {
    // arrange
    const expected = 2;
    const array2 = [0, 1, 2];

    // act
    const actual = checkEvenNum(array2);

    //assert
    const result = assertEquals(actual, expected);

    //report
    console.log(`Count of array2 should be ${expected}: ${result}`);

}

const checkArray3 = () => {
    // arrange
    const expected = 0;
    const array3 = [1, 3, 5];

    // act
    const actual = checkEvenNum(array3);

    //assert
    const result = assertEquals(actual, expected);

    //report
    console.log(`Count of array3 should be ${expected}: ${result}`);

}

module.exports = { checkArray1, checkArray2, checkArray3 };