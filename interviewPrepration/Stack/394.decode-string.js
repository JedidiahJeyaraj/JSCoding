// https://leetcode.com/problems/decode-string/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let currentString = "";
  let currentNum = 0;
  for (let char of s) {
    if (char === "[") {
      stack.push(currentString);
      stack.push(currentNum);
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      let num = stack.pop();
      let previousString = stack.pop();
      currentString = previousString + currentString.repeat(num);
    } else if (char >= "0" && char <= "9") {
      currentNum = currentNum * 10 + parseInt(char);
    } else {
      currentString += char;
    }
  }
  return currentString;
};

// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("100[leetcode]"));
