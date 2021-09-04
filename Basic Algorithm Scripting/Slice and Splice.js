function frankenSplice(arr1, arr2, n) {
  let res = [];
  if (arr2.length === 0) {
    res = [...arr1];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (i === n) {
      for (let j = 0; j < arr1.length; j++) {
        res.push(arr1[j]);
      }
    }
    res.push(arr2[i]);
  }
  return res;
}

console.log(frankenSplice([1, 2, 3, 4], [], 0));
