// https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length === 0) return -1;
  let leftSum = 0;
  let rightSum = nums.reduce((sum, x) => sum + x);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (rightSum === leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
