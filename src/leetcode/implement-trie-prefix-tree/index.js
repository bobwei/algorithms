const Node = function() {
  this.chars = {};
  this.isWord = false;
};

var Trie = function() {
  this.root = new Node();
};

Trie.prototype.insert = function(word) {
  let ptr = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!ptr.chars[word[i]]) {
      ptr.chars[word[i]] = new Node();
    }
    ptr = ptr.chars[word[i]];
  }
  ptr.isWord = true;
};

Trie.prototype.search = function(word) {
  let ptr = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!ptr.chars[word[i]]) {
      return false;
    }
    ptr = ptr.chars[word[i]];
  }
  return ptr.isWord;
};

Trie.prototype.startsWith = function(prefix) {
  let ptr = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (!ptr.chars[prefix[i]]) {
      return false;
    }
    ptr = ptr.chars[prefix[i]];
  }
  return true;
};
