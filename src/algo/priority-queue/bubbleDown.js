import swap from './swap';

const fn = (arr, i, comparator) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || comparator(arr[i], arr[left]) <= 0) &&
    (right >= arr.length || comparator(arr[i], arr[right]) <= 0);
  if (!isValid) {
    const next = right >= arr.length || comparator(arr[left], arr[right]) <= 0 ? left : right;
    swap(arr, i, next);
    fn(arr, next, comparator);
  }
};

export default fn;
