function fearNotLetter(str) {
  let result;
  let start = str.charCodeAt(0);
  let end = str.charCodeAt(str.length - 1);
  let j = 0;

  for (let i = start; i < end; i++) {
    if (str.charCodeAt(j) != i) {
      result = String.fromCharCode(i);
      break;
    }
    j++;
  }

  console.log(result);
  return result;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
