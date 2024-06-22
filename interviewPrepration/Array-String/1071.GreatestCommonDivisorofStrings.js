/* 
	For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

let gcd = (n, m) => {
  while (m != 0) {
    let temp = m;
    m = n % m;
    n = temp;
  }
  return n;
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let gcdString = "";
  if (str1 + str2 === str2 + str1) {
    let gcdIndex = gcd(str1.length, str2.length);
    gcdString = str1.substring(0, gcdIndex);
  }
  console.log(gcdString);
};

gcdOfStrings("ABCABC", "ABC");

// gcd(3, 12);
