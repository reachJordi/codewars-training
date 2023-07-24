function solution(str){
    const result = str.match(/.{1,2}/g) ?? [];
    result[result.length-1] = (str.length & 2 != 0) ? result[result.length-1] + '_' : result[result.length-1]; 
    return result;
}

console.log(solution("abcdef")); //["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []