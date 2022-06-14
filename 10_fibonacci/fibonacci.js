const fibonacci = function(number) {

    if (parseInt(number) < 0) {
        return "OOPS";

    } else {
        number = parseInt(number)
        let n1 = 0;
        let n2 = 1;
        let nextTerm = 0;
        for (let i = 2; i <= number; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm
        }

        return n2;

    }

};

// Do not edit below this line
module.exports = fibonacci;