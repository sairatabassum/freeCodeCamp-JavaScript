function findLongestWordLength(str) {
  let arr = str.split(' ');
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count < arr[i].length) {
      count = arr[i].length;
    }
  }
  return count;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
