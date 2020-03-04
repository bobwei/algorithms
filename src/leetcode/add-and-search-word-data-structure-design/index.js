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
WordDictionary.prototype.search = function(word, index = 0, ptr = this.root) {
  if (index >= word.length) {
    return ptr.isEnd;
  }
  if (word[index] === '.') {
    for (let i = 0; i < 26; i++) {
      const c = String.fromCharCode('a'.charCodeAt(0) + i);
      if (c in ptr.chars && this.search(word, index + 1, ptr.chars[c])) {
        return true;
      }
    }
    return false;
  }
  const c = word[index];
  if (c in ptr.chars && this.search(word, index + 1, ptr.chars[c])) {
    return true;
  }
  return false;
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
