function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  const vals = Array.from(arguments).slice(0, 1);
  const arr1 = vals[0];
  const res = [];

  for (let i = 0; i < arr1.length; i++) {
    let cnt = 0;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (valsToRemove[j] === arr1[i]) {
        cnt = 1;
      }
    }
    if (!cnt) res.push(arr1[i]);
  }
  console.log(res);
  return res;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
