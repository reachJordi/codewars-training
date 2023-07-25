function isIsogram(str){
    // \w matches any word character
    // . maches any character
    // * matches the previous token between zeroo and unlimited times
    return !/(\w).*\1/i.test(str);
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true

function isIsogram2(str){
	return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram2("Dermatoglyphics")); // true
console.log(isIsogram2("isogram")); // true
console.log(isIsogram2("aba")); // false
console.log(isIsogram2("moOse")); // false
console.log(isIsogram2("isIsogram")); // false
console.log(isIsogram2("")); // true