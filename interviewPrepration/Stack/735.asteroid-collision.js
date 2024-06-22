// https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let result = [];
  for (let i = 0; i < asteroids.length; i++) {
    let last = result[result.length - 1];
    let current = asteroids[i];
    if (result.length === 0 || current > 0 || last < 0) {
      result.push(current);
    } else if (-current === last) {
      result.pop();
    } else if (-current > last) {
      result.pop();
      i--;
    }
  }
  return result;
};

// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([8, -8]));
// console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([-2, -1, 1, 2]));
