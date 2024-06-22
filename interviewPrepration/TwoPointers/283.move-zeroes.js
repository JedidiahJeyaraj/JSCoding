// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  console.log(nums);
  let i = 0; // will keep track of zero nums
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
