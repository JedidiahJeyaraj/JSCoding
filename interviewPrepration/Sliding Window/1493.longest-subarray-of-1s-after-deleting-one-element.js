// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let maxCount = Number.MIN_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  let deletedCount = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      deletedCount++;
    }
    if (deletedCount > 1) {
      if (nums[left] === 0) deletedCount--;
      left++;
    }
    maxCount = Math.max(maxCount, right - left + 1);
    right++;
  }
  return maxCount - 1;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));
