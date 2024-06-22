class Stack {
  #arr = [];
  #top;
  #capacity;

  constructor(size) {
    this.#top = -1;
    this.#capacity = size;
  }

  isFull() {
    return this.#top === this.#capacity - 1;
  }
  isEmpty() {
    return this.#top === -1;
  }
  push(x) {
    if (this.isFull()) {
      throw new Error("STACK OVERFLOW");
    }
    this.#arr[++this.#top] = x;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("STACK EMPTY");
    }
    return this.#arr[this.#top--];
  }
  printStack() {
    for (let i = 0; i <= this.#top; i++) {
      console.log(this.#arr[i]);
    }
  }
}

let stackClass = new Stack(5);
console.log(stackClass.isEmpty());
stackClass.push(1);
stackClass.push(2);
stackClass.push(3);
stackClass.push(4);
stackClass.push(5);
console.log(stackClass.pop())
stackClass.push(6);
stackClass.printStack();
