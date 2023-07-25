function createPhoneNumber(numbers){
    return (
      numbers.splice(0,3).join('').padStart(4,'(').padEnd(5,')') + ' ' + 
      numbers.splice(0,3).join('') +'-' + 
      numbers.splice(0,4).join('')
    );
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890