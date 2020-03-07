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
  for (const c of word) {
    if (!(c in ptr.chars)) {
      ptr.chars[c] = new Node();
    }
    ptr = ptr.chars[c];
  }
  ptr.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, i = 0, ptr = this.root) {
  if (i >= word.length) {
    return ptr.isEnd;
  }
  if (word[i] === '.') {
    for (const c in ptr.chars) {
      if (this.search(word, i + 1, ptr.chars[c])) {
        return true;
      }
    }
    return false;
  }
  return word[i] in ptr.chars && this.search(word, i + 1, ptr.chars[word[i]]);
};

class Node {
  constructor() {
    this.chars = {};
    this.isEnd = false;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
