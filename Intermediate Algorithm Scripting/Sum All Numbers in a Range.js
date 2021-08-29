'use strict';

function sumAll(arr) {
  let sum = 0;
  let [a, b] = [arr[0], arr[1]];
  if (a > b) {
    [a, b] = [b, a];
  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));
