// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75
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
/**,
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head === null) return null;
  let newNode = new ListNode(0);
  newNode.next = head;

  let slowPointer = newNode;
  let fastPointer = head;
  while (fastPointer != null && fastPointer.next != null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  slowPointer.next = slowPointer.next.next;
  return newNode.next;
};

let first = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);

let head = first;
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

console.log(deleteMiddle(head));
