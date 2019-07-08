const throttle = (mSec, fn) => {
  let timestamp = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - timestamp > mSec) {
      timestamp = now;
      fn(...args);
    }
  };
};

export default throttle;
