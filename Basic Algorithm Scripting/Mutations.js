function mutation(arr) {
  let ar1 = arr[0].toLowerCase().split('');
  let ar2 = arr[1].toLowerCase().split('');

  return ar2.every(x => {
    return ar1.includes(x);
  });
}

console.log(mutation(['hello', 'Hello']));
