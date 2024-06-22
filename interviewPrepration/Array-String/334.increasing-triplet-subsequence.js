// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;
  let first = { ele: Number.MAX_SAFE_INTEGER, index: Number.MAX_SAFE_INTEGER };
  let second = { ele: Number.MAX_SAFE_INTEGER, index: Number.MAX_SAFE_INTEGER };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first.ele && i <= second.index) {
      first.ele = nums[i];
      first.index = i;

      second.ele = Number.MAX_SAFE_INTEGER;
      second.index = Number.MAX_SAFE_INTEGER;
    } else if (nums[i] <= second.ele && i <= second.index) {
      second.ele = nums[i];
      second.index = i;
    } else {
      console.log(first, second);
      return true;
    }
  }
  console.log(first, second);
  return false;
};

// console.log(increasingTriplet([1, 2, 1, 3]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
