const areaOrPerimeter = function(l , w) {
// Return your answer
    let area = l * w;
    let perimeter = (l + w) * 2;

    return l === w ? area : perimeter;
};

console.log(areaOrPerimeter(6, 10)); // 32
console.log(areaOrPerimeter(3, 3)); // 9