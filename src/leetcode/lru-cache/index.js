/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.length = 0;
  this.map = {};
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
  if (!(key in this.map)) {
    return -1;
  }
  disconnect(this.map[key]);
  insertAfter(this.map[key], this.head);
  return this.map[key].val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (!(key in this.map)) {
    this.map[key] = new Node(key, value);
    this.length += 1;
  } else {
    this.map[key].val = value;
    disconnect(this.map[key]);
  }
  insertAfter(this.map[key], this.head);
  if (this.length > this.capacity) {
    delete this.map[this.tail.prev.key];
    this.length -= 1;
    disconnect(this.tail.prev);
  }
};

function insertAfter(a, b) {
  a.next = b.next;
  a.next.prev = a;
  b.next = a;
  a.prev = b;
}

function disconnect(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
