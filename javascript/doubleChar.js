function doubleChar(str) {
    let result = '';
    str.split('').forEach(function(letter) {
        result += letter + letter;
    });
    return result;
}

console.log(doubleChar("abcd")); // "aabbccdd"
console.log(doubleChar("Adidas")); // AAddiiddaass
console.log(doubleChar("1337")); // 11333377
console.log(doubleChar("illuminati")); //iilllluummiinnaattii
console.log(doubleChar("123456")); // 112233445566