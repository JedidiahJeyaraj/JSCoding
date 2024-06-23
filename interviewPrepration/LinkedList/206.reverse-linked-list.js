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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = null;
  while (head) {
    let temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }
  return node;
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

console.log(reverseList(head));
