/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const output = [];
  const m = firstList.length;
  const n = secondList.length;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (isOverlapping(firstList[i], secondList[j])) {
      output.push([
        Math.max(firstList[i][0], secondList[j][0]),
        Math.min(firstList[i][1], secondList[j][1]),
      ]);
    }
    if (firstList[i][1] < secondList[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return output;
};

function isOverlapping(l1, l2) {
  if (l1[0] > l2[0]) {
    return isOverlapping(l2, l1);
  }
  return l1[1] >= l2[0];
}
