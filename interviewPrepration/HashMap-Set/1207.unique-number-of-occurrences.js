// https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let occurrences = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (occurrences.get(arr[i])) {
      occurrences.set(arr[i], occurrences.get(arr[i]) + 1);
    } else {
      occurrences.set(arr[i], 1);
    }
  }
  let uniqueValues = new Set(occurrences.values());
  return occurrences.size === uniqueValues.size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
