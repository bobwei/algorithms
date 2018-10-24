/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

const TrieNode = function() {
  this.chars = {};
  this.word = null;
};

const insert = (root, str) => {
  let ptr = root;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (!ptr.chars[c]) {
      ptr.chars[c] = new TrieNode();
    }
    ptr = ptr.chars[c];
  }
  ptr.word = str;
};

const startsWith = (root, c) => {
  return root.chars[c];
};

const search = (root, c) => {
  return root.chars[c].word;
};

const dfs = (board, i, j, root, selected, output) => {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || !root) {
    return;
  }
  const c = board[i][j];
  if (!startsWith(root, c)) {
    return;
  }
  if (selected[i][j]) {
    return;
  }
  const word = search(root, c);
  if (word) {
    output.add(word);
  }
  selected[i][j] = true;
  dfs(board, i - 1, j, root.chars[c], selected, output);
  dfs(board, i, j + 1, root.chars[c], selected, output);
  dfs(board, i + 1, j, root.chars[c], selected, output);
  dfs(board, i, j - 1, root.chars[c], selected, output);
  selected[i][j] = false;
};

var findWords = function(board, words) {
  if (!board.length || !board[0].length) {
    return [];
  }
  const root = new TrieNode();
  for (let i = 0; i < words.length; i++) {
    insert(root, words[i]);
  }
  const selected = [...new Array(board.length)].map(() => new Array(board[0].length).fill(false));
  const output = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, root, selected, output);
    }
  }
  return [...output];
};
