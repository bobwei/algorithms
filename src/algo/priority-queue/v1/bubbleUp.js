import swap from './swap';

const fn = (arr, i, comparator) => {
  if (i <= 0) {
    return;
  }
  const p = Math.floor((i - 1) / 2);
  const isValid = comparator(arr[p], arr[i]) <= 0;
  if (!isValid) {
    swap(arr, i, p);
    fn(arr, p, comparator);
  }
};

export default fn;
