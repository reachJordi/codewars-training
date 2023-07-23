function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let sumOfPoints = classPoints.reduce(function(a, b){
        return a + b;
    });
    return yourPoints > sumOfPoints/classPoints.length;
}

console.log(betterThanAverage([2,3,],5)); // true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); // false

// refactor
function betterThanAverageRefactored(classPoints, yourPoints) {
    // Your code here
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

console.log(betterThanAverageRefactored([2,3,],5)); // true
console.log(betterThanAverageRefactored([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverageRefactored([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); // false