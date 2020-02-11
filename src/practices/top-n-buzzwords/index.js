function getTopN(numToys, topToys, toys, numQuotes, quotes) {
  const freq = createFreq(quotes);
  const pq = new PriorityQueue({
    comparator: (a, b) => (freq[a] !== freq[b] ? freq[a] <= freq[b] : a < b),
  });
  for (const key of toys) {
    pq.enqueue(key);
    if (pq.length > topToys) {
      pq.dequeue();
    }
  }
  const arr = [];
  while (pq.length) {
    arr.push(pq.dequeue());
  }
  return arr.reverse();
}

function createFreq(quotes) {
  const freq = {};
  for (const quote of quotes) {
    for (const w of quote.split(' ')) {
      const word = w.toLowerCase();
      freq[word] = (freq[word] || 0) + 1;
    }
  }
  return freq;
}

class PriorityQueue {
  constructor({ comparator }) {
    this.arr = [];
    this.comparator = comparator;
  }

  enqueue(val) {
    this.arr.push(val);
    moveUp(this.arr, this.arr.length - 1, this.comparator);
  }

  dequeue() {
    const output = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    moveDown(this.arr, 0, this.comparator);
    return output;
  }

  get length() {
    return this.arr.length;
  }
}

function moveUp(arr, i, comparator) {
  const p = Math.floor((i - 1) / 2);
  const isValid = p < 0 || comparator(arr[p], arr[i]);
  if (!isValid) {
    [arr[i], arr[p]] = [arr[p], arr[i]];
    moveUp(arr, p, comparator);
  }
}

function moveDown(arr, i, comparator) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left])) &&
    (right >= arr.length || comparator(arr[i], arr[right]));
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
    [arr[i], arr[next]] = [arr[next], arr[i]];
  }
}

(() => {
  const result = getTopN(6, 2, ['elmo', 'elsa', 'legos', 'drone', 'tablet', 'warcraft'], 6, [
    "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
    'The new Elmo dolls are super high quality',
    'Expect the Elsa dolls to be very popular this year, Elsa!',
    "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
    'For parents of older kids, look into buying them a drone',
    'Warcraft is slowly rising in popularity ahead of the holiday season',
  ]);
  console.log(result); // [ 'elmo', 'elsa' ]
})();
