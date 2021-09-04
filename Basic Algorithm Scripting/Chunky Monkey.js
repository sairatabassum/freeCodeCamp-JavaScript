function chunkArrayInGroups(arr, size) {
  let res = [];
  let t = [];
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (cnt === size) {
      t.push(res);
      res = [];
      cnt = 0;
    }

    res.push(arr[i]);
    cnt++;
  }
  t.push(res);
  return t;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
