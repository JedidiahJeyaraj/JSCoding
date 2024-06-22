/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxKidCandy = 0;
  let outputArr = new Array(candies.length).fill(false);
  candies.forEach((kid) => {
    if (maxKidCandy < kid) maxKidCandy = kid;
  });
  candies.forEach((kid, index) => {
    if (maxKidCandy <= kid + extraCandies) {
      outputArr[index] = true;
    }
  });
  console.log(outputArr);
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
