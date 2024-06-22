// https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  if (grid[0].length !== grid.length) return 0;
  let count = 0;
  let rows = [];
  let columns = [];
  grid.forEach((val) => {
    rows.push(val.toString());
  });
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (columns[j]) {
        columns[j] += "," + grid[i][j].toString();
      } else columns[j] = grid[i][j].toString();
    }
  }
  for (let row of rows) {
    for (let col of columns) {
      if (row === col) count++;
    }
  }
  return count;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
