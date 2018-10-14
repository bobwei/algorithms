const Node = function() {
  this.chars = {};
  this.isWord = false;
};

const Trie = function() {
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
  return this;
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

Trie.prototype.dfs = function(root = this.root, selected = [], output = []) {
  if (root.isWord) {
    output.push(selected.join(''));
  }
  for (const key in root.chars) {
    selected.push(key);
    this.dfs(root.chars[key], selected, output);
    selected.pop();
  }
  return output;
};

export default Trie;
