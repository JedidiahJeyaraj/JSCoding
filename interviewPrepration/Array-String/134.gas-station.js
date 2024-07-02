// https://leetcode.com/problems/gas-station/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let total_gas_used = 0;
  let start = 0;
  let gas_used = 0;

  for (let i = 0; i < n; i++) {
    total_gas_used += gas[i] - cost[i];
    gas_used += gas[i] - cost[i];
    if (gas_used < 0) {
      gas_used = 0;
      start = i + 1;
    }
  }
  return total_gas_used < 0 ? -1 : start;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
