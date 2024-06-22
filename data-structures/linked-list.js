class Node {
  value;
  next;
  constructor(d) {
    this.value = d;
    this.next = null;
  }
}

class LinkedList {
  head;
  constructor(head = null) {
    this.head = head;
  }
}

let first = new Node(1);
let second = new Node(2);
let third = new Node(23);
let fourth = new Node(4);
let fifth = new Node(55);
let sixth = new Node(66);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;

let linkedList = new LinkedList(first);

while(linkedList.head !==null) {
  console.log(linkedList.head.value);
  linkedList.head = linkedList.head.next;
}