/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.map = {};
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  for (const word of dict) {
    for (let i = 0; i < word.length; i++) {
      const key = createKey(word, i);
      if (!(key in this.map)) {
        this.map[key] = new Set();
      }
      this.map[key].add(word);
    }
  }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  for (let i = 0; i < word.length; i++) {
    const key = createKey(word, i);
    if (key in this.map) {
      if (this.map[key].size > 1 || this.map[key].keys().next().value !== word) {
        return true;
      }
    }
  }
  return false;
};

function createKey(word, i) {
  return word.substring(0, i) + '*' + word.substring(i + 1);
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
