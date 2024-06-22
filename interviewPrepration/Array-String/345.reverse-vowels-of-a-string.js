// https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let i = 0;
  let j = s.length - 1;
  s = s.split("");
  while (i < j) {
    let iChar = s[i];
    let jChar = s[j];
    if (!vowels.includes(iChar)) i++;
    else if (!vowels.includes(jChar)) j--;
    else {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      i++;
      j--;
    }
  }
  return s.join("");
};

console.log(reverseVowels("leetcode"));
