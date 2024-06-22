// https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let finalStringArr = [];
  for (ch of s) {
    if (ch === "*") finalStringArr.pop();
    else finalStringArr.push(ch);
  }
  return finalStringArr.join("");
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
