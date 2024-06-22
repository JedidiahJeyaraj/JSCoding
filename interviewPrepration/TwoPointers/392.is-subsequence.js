// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;
  let sPointer = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[sPointer] === t[i]) {
      sPointer++;
      if (sPointer >= s.length) return true;
    }
  }
  return false;
};

isSubsequence("abc", "ahbgdc");
