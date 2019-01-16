const Node = function() {
  this.words = {};
  this.isWord = false;
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = new Node();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let ptr = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!ptr.words[word[i]]) {
      ptr.words[word[i]] = new Node();
    }
    ptr = ptr.words[word[i]];
  }
  ptr.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, root, i) {
  if (!root && !i) {
    return this.search(word, this.root, 0);
  }
  if (i >= word.length || !root) {
    return (root && root.isWord) || false;
  }
  if (word[i] === '.') {
    for (const key in root.words) {
      if (this.search(word, root.words[key], i + 1)) {
        return true;
      }
    }
  }
  return this.search(word, root.words[word[i]], i + 1);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
