/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  let leftListVal = []; // stack

  while (fastPointer !== null) {
    leftListVal.push(slowPointer.val);
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  let maxSum = Number.MIN_SAFE_INTEGER;
  while (slowPointer !== null) {
    let sum = leftListVal.pop() + slowPointer.val;
    maxSum = Math.max(maxSum, sum);
    slowPointer = slowPointer.next;
  }
  return maxSum;
};

let first = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);
let sixth = new ListNode(6);

let head = first;
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;

console.log(pairSum(head));
