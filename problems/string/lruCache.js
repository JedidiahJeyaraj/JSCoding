class LRU {
  constructor(max = 5) {
    this.max = max;
    this.cache = new Map();
  }

  first() {
    return this.cache.keys().next();
  }

  get(key) {
    let item = this.cache.get(key);
    if (item) this.set(key, item);
    return item;
  }

  set(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.max) {
      this.cache.delete(this.first().value);
    }
    this.cache.set(key, value);
  }
}

const lru = new LRU(5);
lru.set(1, "a");
lru.set(2, "b");
lru.set(3, "c");
lru.set(4, "d");
lru.set(5, "e");
lru.set(6, "f");

console.log(lru.cache);
console.log(lru.get(4));
console.log(lru.cache);
lru.set(1, "a");
console.log(lru.get(8));
console.log(lru.cache);
