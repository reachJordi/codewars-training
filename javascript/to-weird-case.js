function toWeirdCase(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
    
    // Convert each word to weird case and join them back to form the sentence
    // passing a function to every element in the calling array
    return words.map(convertToWeirdCase).join(' ');
}
  
// Function to convert a word to weird case
function convertToWeirdCase(word) {
    return word.split('').map((char, index) => {
        // Toggle the case of each character based on its index
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}

console.log(toWeirdCase('This is a test')); // 'ThIs Is A TeSt'

// other options
function toWeirdCase(string){
    return string.split(' ').map(function(word){
        return word.split('').map(function(letter, index){
            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('');
    }).join(' ');
}

