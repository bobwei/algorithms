const Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.next = this.prev = null;
};

const insertAfter = (r1, r2) => {
  r1.next.prev = r2;
  r2.next = r1.next;
  r1.next = r2;
  r2.prev = r1;
};

const removeLinks = (r) => {
  r.prev.next = r.next;
  r.next.prev = r.prev;
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.data = {};
  this.size = 0;
  this.capacity = capacity;
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.data[key]) {
    return -1;
  }
  removeLinks(this.data[key]);
  insertAfter(this.head, this.data[key]);
  return this.data[key].value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (!this.data[key]) {
    this.data[key] = new Node(key, value);
    this.size += 1;
  } else {
    this.data[key].value = value;
    removeLinks(this.data[key]);
  }
  insertAfter(this.head, this.data[key]);
  if (this.size > this.capacity) {
    delete this.data[this.tail.prev.key];
    this.size -= 1;
    removeLinks(this.tail.prev);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
