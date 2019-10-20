/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  const trie = new Trie();
  for (const path of folder) {
    trie.add(path.substring(1).split('/'));
  }
  return folder.filter((path) => trie.search(path.substring(1).split('/')));
};

class Node {
  constructor() {
    this.chars = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(word) {
    let ptr = this.root;
    for (const c of word) {
      if (!(c in ptr.chars)) {
        ptr.chars[c] = new Node();
      }
      ptr = ptr.chars[c];
    }
    ptr.isEnd = true;
  }

  search(word) {
    let ptr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      ptr = ptr.chars[c];
      if (ptr.isEnd && i !== word.length - 1) {
        return false;
      }
    }
    return true;
  }
}
