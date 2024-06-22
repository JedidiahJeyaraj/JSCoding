// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let compressedString = "";
  for (let i = 0; i < chars.length; ) {
    let currentLetter = chars[i];
    let count = 0;
    while (i < chars.length && currentLetter === chars[i]) {
      count++;
      ++i;
    }
    compressedString += currentLetter;
    if (count > 1) {
      compressedString += count;
    }
  }
  console.log(compressedString);
  compressedString.split("").forEach((char, index) => {
    chars[index] = char;
  });
  return compressedString.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
