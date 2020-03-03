/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  const m = votes[0].length;
  const freq = createFreq(votes, m);
  return Object.keys(freq)
    .sort((c1, c2) => {
      for (let i = 0; i < m; i++) {
        if (freq[c1][i] !== freq[c2][i]) {
          return freq[c1][i] > freq[c2][i] ? -1 : 1;
        }
      }
      return c1 < c2 ? -1 : 1;
    })
    .join('');
};

function createFreq(votes, m) {
  const freq = {};
  for (const vote of votes) {
    for (let i = 0; i < m; i++) {
      const c = vote[i];
      if (!(c in freq)) freq[c] = new Array(m).fill(0);
      freq[c][i] += 1;
    }
  }
  return freq;
}
