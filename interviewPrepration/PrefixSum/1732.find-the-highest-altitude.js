// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let highestAltitude = 0; // since starts from 0
  let altitude = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude = altitude + gain[i];
    highestAltitude = Math.max(highestAltitude, altitude);
  }
  return highestAltitude;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
