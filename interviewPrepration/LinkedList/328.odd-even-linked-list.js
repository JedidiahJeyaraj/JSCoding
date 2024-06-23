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
var oddEvenList = function (head) {
  console.log(JSON.stringify(head));
  if (head === null || head.next === null) return head;
  let oddNodes = new ListNode(0);
  let evenNodes = new ListNode(0);
  let oddPointer = oddNodes;
  let evenPointer = evenNodes;
  let i = 1;
  while (head !== null) {
    if (i % 2 === 0) {
      evenPointer.next = head;
      evenPointer = evenPointer.next;
    } else {
      oddPointer.next = head;
      oddPointer = oddPointer.next;
    }
    head = head.next;
    i++;
  }

  evenPointer.next = null;
  oddPointer.next = evenNodes.next;
  return oddNodes.next;
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

console.log(JSON.stringify(oddEvenList(head)));
