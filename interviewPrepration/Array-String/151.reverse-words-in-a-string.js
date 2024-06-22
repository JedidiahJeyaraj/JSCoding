/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim().split(" ");
  console.log(s);
  let newString = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "") continue;
    newString.push(s[i]);
  }
  return newString.join(" ");
};

console.log(reverseWords("a good   example"));
