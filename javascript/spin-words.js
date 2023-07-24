function spinWords(string){
    let sentence = '';
    string.split(' ').forEach(element => {
      element = (element.length >= 5) ? element.split("").reverse().join("") : element;
      sentence += element + ' ';
    });
    return sentence.trim();
}


console.log(spinWords("Welcome")) // "emocleW"
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")) // "This is rehtona test"
console.log(spinWords("You are almost to the last test")) // "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more")); // "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one")); // "ylsuoireS this is the last one"

// refactored solution

/* map() -> method creates a new array populated with the results
            of calling a provided function on every element in the 
            calling array.
*/
function spinWordsRefactored(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

console.log(spinWords("Welcome")) // "emocleW"
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")) // "This is rehtona test"
console.log(spinWords("You are almost to the last test")) // "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more")); // "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one")); // "ylsuoireS this is the last one"