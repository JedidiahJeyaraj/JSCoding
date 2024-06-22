// https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || i === 0) &&
      (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)
    ) {
      n--;
      flowerbed[i] = 1;
      if (n === 0) return true;
    }
  }
  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
