const Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
};

const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.data = {
    hash: {},
    size: 0,
  };
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.get = function(key) {
  if (this.data.hash[key]) {
    this.disconnect(key);
    this.moveHead(key);
    return this.data.hash[key].value;
  }
  return -1;
};

LRUCache.prototype.disconnect = function(key) {
  this.data.hash[key].next.prev = this.data.hash[key].prev;
  this.data.hash[key].prev.next = this.data.hash[key].next;
};

LRUCache.prototype.moveHead = function(key) {
  if (this.head.next === this.data.hash[key]) {
    return;
  }
  this.head.next.prev = this.data.hash[key];
  this.data.hash[key].next = this.head.next;
  this.data.hash[key].prev = this.head;
  this.head.next = this.data.hash[key];
};

LRUCache.prototype.moveTail = function() {
  delete this.data.hash[this.tail.prev.key];
  this.data.size -= 1;
  this.tail.prev.prev.next = this.tail;
  this.tail.prev = this.tail.prev.prev;
};

LRUCache.prototype.put = function(key, value) {
  if (!this.data.hash[key]) {
    this.data.hash[key] = new Node(key, value);
    this.data.size += 1;
  } else {
    this.data.hash[key].value = value;
    this.disconnect(key);
  }
  this.moveHead(key);
  if (this.data.size > this.capacity) {
    this.moveTail();
  }
};

export default LRUCache;
