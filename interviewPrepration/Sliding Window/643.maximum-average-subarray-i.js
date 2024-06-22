// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxAvg = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  let sum = 0;
  while (end < nums.length) {
    sum += nums[end];
    if (end - start + 1 === k) {
      maxAvg = Math.max(maxAvg, sum / k);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return maxAvg;
};

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
