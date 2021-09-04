function confirmEnding(str, target) {
  let k = str.length - 1;
  if (str.length < target.length) return false;
  else {
    for (let i = target.length - 1; i >= 0; i--) {
      if (str[k] !== target[i]) {
        return false;
      }
      k--;
    }
  }
  return true;
}

console.log(confirmEnding('Congratulation', 'on'));
