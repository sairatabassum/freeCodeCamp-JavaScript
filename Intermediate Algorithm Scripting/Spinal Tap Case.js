function spinalCase(str) {
  let str2;
  str2 = str.toLowerCase();
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "_") {
      res += "-";
    } else if (
      str[i] === str[i].toUpperCase() &&
      str[i - 1] != " " &&
      str[i] != str[0] &&
      str[i] != "-"&&
      str[i-1] != "_"
    ) {
      res += "-";
      res += str2[i];

    } else {
      res += str2[i];

    }
  }
  console.log(res);

  return res;
}

spinalCase("The_Andy_Griffith_Show");
