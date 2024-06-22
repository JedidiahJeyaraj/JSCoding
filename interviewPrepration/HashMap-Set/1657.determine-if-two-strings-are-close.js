// https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  let freq1 = new Array(26).fill(0);
  let freq2 = new Array(26).fill(0);

  for (let char of word1) {
    freq1[char.charCodeAt() - "a".charCodeAt()]++;
  }

  for (let char of word2) {
    freq2[char.charCodeAt() - "a".charCodeAt()]++;
  }

  for (let i = 0; i < 26; i++) {
    if (
      (freq1[i] === 0 && freq2[i] !== 0) ||
      (freq2[i] === 0 && freq1[i] !== 0)
    )
      return false;
  }

  freq1.sort();
  freq2.sort();

  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
};

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));
