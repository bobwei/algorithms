const createSampler = ({ k }) => {
  const arr = [];
  let i = 0;
  return {
    sample: (element) => {
      if (i < k) {
        arr.push(element);
      } else {
        const r = Math.floor(Math.random() * (i + 1));
        if (r < k) {
          arr[r] = element;
        }
      }
      i += 1;
    },
    getData: () => {
      return arr;
    },
  };
};

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const { sample, getData } = createSampler({ k: 1 });
  const { nums } = this;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      sample(i);
    }
  }
  return getData()[0];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.pick(target)
 */
