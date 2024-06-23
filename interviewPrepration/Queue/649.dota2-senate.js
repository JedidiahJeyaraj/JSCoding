// https://leetcode.com/problems/dota2-senate/?envType=study-plan-v2&envId=leetcode-75

class Queue {
  #arr = [];
  #front;
  #rear;
  #capacity;

  constructor(size) {
    this.#capacity = size;
    this.#front = -1;
    this.#rear = -1;
  }

  isFull() {
    if (this.#front === 0 && this.#rear === this.#capacity - 1) {
      return true;
    }
    return false;
  }

  isEmpty() {
    return this.#front === -1;
  }

  enQueue(ele) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }
    if (this.#front === -1) {
      this.#front = 0;
    }
    this.#rear++;
    this.#arr[this.#rear] = ele;
  }

  deQueue() {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    let ele = this.#arr[this.#front];
    if (this.#front >= this.#rear) {
      this.#front = -1;
      this.#rear = -1;
    } else {
      this.#front++;
    }
    return ele;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Empty Queue");
      return -1;
    }
    for (let i = this.#front; i <= this.#rear; i++) {
      console.log(this.#arr[i]);
    }
  }
}

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let votingQueue = new Queue(senate.length);
  let rCount = 0;
  let dCount = 0;
  for (let voter of senate) {
    votingQueue.enQueue(voter);
    if (voter === "R") rCount++;
    else dCount++;
  }

  let rBan = 0;
  let dBan = 0;

  while (!votingQueue.isEmpty() && rCount != 0 && dCount !== 0) {
    let voter = votingQueue.deQueue();
    if (voter == "R") {
      if (rBan > 0) {
        rBan--;
        rCount--;
      } else {
        dBan++;
        votingQueue.enQueue(voter);
      }
    } else {
      if (dBan > 0) {
        dBan--;
        dCount--;
      } else {
        rBan++;
        votingQueue.enQueue(voter);
      }
    }
  }
  console.log(rCount, dCount);
  return rCount > dCount ? "Radiant" : "Dire";
};

console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));
console.log(predictPartyVictory("DDRRR"));
