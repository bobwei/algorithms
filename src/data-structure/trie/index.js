class Node {
  constructor() {
    this.chars = {};
    this.isWord = false;
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
    ptr.isWord = true;
  }

  startsWith(str) {
    let ptr = this.root;
    for (const c of str) {
      if (!(c in ptr.chars)) {
        return false;
      }
      ptr = ptr.chars[c];
    }
    return true;
  }

  search(word) {
    let ptr = this.root;
    for (const c of word) {
      if (!(c in ptr.chars)) {
        return false;
      }
      ptr = ptr.chars[c];
    }
    return ptr.isWord;
  }

  dfs(root = this.root, selected = '', output = []) {
    if (root.isWord) {
      output.push(selected);
    }
    for (const c in root.chars) {
      this.dfs(root.chars[c], selected + c, output);
    }
    return output;
  }
}

export default Trie;
