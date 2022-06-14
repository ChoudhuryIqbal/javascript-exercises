const palindromes = function(str) {
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    arrayStr = str.split("")
    reversedStr = str.split("").reverse().join();
    return (arrayStr == reversedStr)

};

// Do not edit below this line
module.exports = palindromes;