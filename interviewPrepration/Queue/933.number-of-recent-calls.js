// https://leetcode.com/problems/number-of-recent-calls/?envType=study-plan-v2&envId=leetcode-75

var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  while (this.requests[0] < t - 3000) {
    this.requests.shift();
  }
  return this.requests.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter();
var param_1 = obj.ping(1);
var param_2 = obj.ping(100);
var param_3 = obj.ping(3001);
var param_4 = obj.ping(3002);
