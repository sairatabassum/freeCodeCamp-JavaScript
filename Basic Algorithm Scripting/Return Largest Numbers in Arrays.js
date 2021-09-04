function largestOfFour(arr) {
  let res = [];
  let v = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (v < arr[i][j]) {
        v = arr[i][j];
      }
    }
    res.push(v);
    v = Number.NEGATIVE_INFINITY;
  }
  return res;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
