const Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.data = {};
  this.size = 0;
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.moveToHead = function(node) {
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
  node.prev = this.head;
};

LRUCache.prototype.disconnect = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.data[key]) {
    return -1;
  }
  this.disconnect(this.data[key]);
  this.moveToHead(this.data[key]);
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
    this.disconnect(this.data[key]);
  }
  this.moveToHead(this.data[key]);
  if (this.size > this.capacity) {
    delete this.data[this.tail.prev.key];
    this.size -= 1;
    this.disconnect(this.tail.prev);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
