var arrayOfSheep = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

// with FOR...OF
function countSheeps(arrayOfSheep) {
    let sheeps = 0;
    for(sheep of arrayOfSheep) {
        if(sheep) {
            sheeps+=1;
        }
    }
    return sheeps;
}

console.log(countSheeps(arrayOfSheep));

// with FOR EACH
let sheeps1 = 0;

arrayOfSheep.forEach((item, index) => {
    if(item) sheeps1+=1;
});

console.log(sheeps1);

// with FILTER
function countSheeps2(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps2(arrayOfSheep));