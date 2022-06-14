const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    if (arr.length == 0) {
        return 0;

    } else if (arr.length == 1) {
        return arr[0];
    } else {
        let i = arr.length;
        let number = 0;
        while (i > 0) {
            number += arr[i - 1]


            i--;
        }

        return number;
    }
};

const multiply = function(arr) {

    let arrLength = arr.length;
    let number = 1;
    while (arrLength > 0) {
        number *= arr[arrLength - 1];
        arrLength--;
    }
    return number;

};

const power = function(a, b) {


    return Math.pow(a, b);;

};

const factorial = function(a) {

    if (a == 0) {
        return 1;
    } else if (a == 1) {
        return 1;
    } else {



        return factorial(a - 1) * a;

    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};