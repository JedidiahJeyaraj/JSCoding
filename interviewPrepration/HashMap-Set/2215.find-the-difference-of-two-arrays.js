// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let ansArray = [[], []];
  nums1 = nums1.sort();
  nums2 = nums2.sort();

  for (let i = 0; i < nums1.length; i++) {
    if (i > 0 && nums1[i] === nums1[i - 1]) continue;
    if (!BS(nums2, nums1[i])) {
      ansArray[0].push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (i > 0 && nums2[i] === nums2[i - 1]) continue;
    if (!BS(nums1, nums2[i])) {
      ansArray[1].push(nums2[i]);
    }
  }
  return ansArray;
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var BS = function (arr, k) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === k) return true;
    else if (arr[mid] < k) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

// console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
