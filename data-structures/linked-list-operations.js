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

  insertAtBeginning(newData) {
    let newNode = new Node(newData);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(newData) {
    let newNode = new Node(newData);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = null;
    let last = this.head;
    while (last.next !== null) {
      last = last.next;
    }
    last.next = newNode;
    return;
  }

  deleteNode(key) {
    let index = this.#indexof(key);
    let node = this.head;
    if (index === 0) {
      if (node !== null) {
        node = node.next;
        this.head = node;
      } else {
        console.error("INDEX out of Bound");
        return -1;
      }
    }
    while (--index) {
      if (node.next !== null) {
        node = node.next;
      } else {
        console.error("INDEX out of Bound");
        return -1;
      }
    }
    node.next = node.next.next;
  }

  #indexof(key) {
    let index = -1;
    let node = this.head;
    while (node) {
      ++index;
      if (node.value === key) return index;
      node = node.next;
    }
    return index;
  }

  search(key) {
    if (this.head === null) {
      return false;
    }
    let node = this.head;
    while (node.next !== null) {
      if (node.value === key) {
        return node;
      }
      node = node.next;
    }
    return false;
  }

  sort() {}

  print() {
    let headNode = this.head;
    process.stdout.write("HEAD->")
    while (headNode !== null) {
      process.stdout.write(headNode.value + "->");
      headNode = headNode.next;
    }
  }
}

let ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(4);
ll.insertAtBeginning(8);
ll.insertAtEnd(3);
// console.log(JSON.stringify(ll.head, null, 4));
ll.print();

ll.deleteNode(4);
ll.print();
// console.log(JSON.stringify(ll.head, null, 4));
