var Leaderboard = function() {
  this.map = {};
  this.arr = [];
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
  if (!(playerId in this.map)) {
    this.map[playerId] = score;
    const index = lowerBound(this.arr, score);
    this.arr.splice(index, 0, score);
  } else {
    const preScore = this.map[playerId];
    this.reset(playerId);
    this.addScore(playerId, preScore + score);
  }
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
  return this.arr.slice(0, K).reduce((acc, cur) => acc + cur, 0);
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
  const index = lowerBound(this.arr, this.map[playerId]);
  this.arr.splice(index, 1);
  delete this.map[playerId];
};

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target >= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
