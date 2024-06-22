// https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let maxCount = Number.MIN_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  let zeros = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeros++;
    }

    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    maxCount = Math.max(maxCount, right - left + 1);
    right++;
  }
  return maxCount;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
