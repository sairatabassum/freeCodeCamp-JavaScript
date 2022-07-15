function translatePigLatin(str) {
  const isVowel = function (i) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u")
      return true;
    else return false;
  };

  if (isVowel(str[0])) {
    str += "way";
  } else {
    let i = 0,
      cnt = 0;
    let k = "";
    while (!isVowel(str[i]) && i < str.length) {
      cnt++;
      k += str[i];
      i++;
    }
    console.log(cnt, k);
    str = str.slice(cnt) + k + "ay";
  }

  console.log(str);
  return str;
}

translatePigLatin("rhythm");
