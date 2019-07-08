const debounce = (mSec, fn) => {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), mSec);
  };
};

export default debounce;
