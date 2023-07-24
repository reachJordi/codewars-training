String.prototype.toJadenCase = function () {
    return this.split(" ").map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
};
  
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());