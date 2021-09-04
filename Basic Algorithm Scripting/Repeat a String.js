function repeatStringNumTimes(str, num) {
  let s = '';
  for (let i = 1; i <= num; i++) {
    s += str;
  }
  return s;
}

console.log(repeatStringNumTimes('abc', 3));
