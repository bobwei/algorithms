function permute(n, selected = [], output = []) {
  if (!isValid(selected)) {
    return output;
  }
  if (selected.length >= n) {
    output.push([...selected]);
    return output;
  }
  for (let i = 0; i < 2; i++) {
    selected.push(i);
    permute(n, selected, output);
    selected.pop();
  }
  return output;
}

function isValid(selected) {
  if (selected.length < 3) {
    return true;
  }
  const length = selected.length;
  if (
    selected[length - 1] === selected[length - 2] &&
    selected[length - 2] === selected[length - 3]
  ) {
    return false;
  }
  return true;
}

export default permute;
