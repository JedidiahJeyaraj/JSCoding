// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let maxVowelCount = Number.MIN_SAFE_INTEGER;
  let i = 0;
  let j = 0;
  let vowelCount = 0;
  while (j < s.length) {
    if (checkVowel(s[j])) {
      vowelCount++;
    }
    if (j - i + 1 === k) {
      maxVowelCount = Math.max(maxVowelCount, vowelCount);
      if (checkVowel(s[i])) {
        vowelCount--;
      }
      i++;
    }
    j++;
  }
  return maxVowelCount;
};
/**
 * @param {string} s
 * @return {boolean}
 */
const checkVowel = (c) => {
  return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
};

console.log(maxVowels("abciiidef", 3));
