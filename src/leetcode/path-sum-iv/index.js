/**
 * @param {number[]} nums
 * @return {number}
 */

const toTriple = (n) => {
  return [Math.floor(n / 100), Math.floor((n % 100) / 10), Math.floor((n % 10) / 1)];
};

const isChild = (p, c) => {
  if (p[0] + 1 === c[0] && Math.floor((c[1] - 1) / 2) === p[1] - 1) {
    return true;
  }
  return false;
};

const getChild = (nums, node) => {
  if (!nums.length) {
    return null;
  }
  const child = toTriple(nums[0]);
  if (isChild(node, child)) {
    return child;
  }
  return null;
};

var pathSum = function(nums) {
  if (!nums.length) {
    return 0;
  }
  const queue = [toTriple(nums.shift())];
  let output = 0;
  while (queue.length) {
    const node = queue.shift();
    const left = getChild(nums, node);
    if (left) {
      left[2] += node[2];
      queue.push(left);
      nums.shift();
    }
    const right = getChild(nums, node);
    if (right) {
      right[2] += node[2];
      queue.push(right);
      nums.shift();
    }
    if (!left && !right) {
      output += node[2];
    }
  }
  return output;
};
