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

let queue = new Queue(5);
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
console.log(`dequeue ${queue.deQueue()}`)
queue.enQueue(6);
queue.display();
