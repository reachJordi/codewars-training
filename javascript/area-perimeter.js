const areaOrPerimeter = function(l , w) {
// Return your answer
    let area = l * w;
    let perimeter = (l + w) * 2;

    return l === w ? area : perimeter;
};