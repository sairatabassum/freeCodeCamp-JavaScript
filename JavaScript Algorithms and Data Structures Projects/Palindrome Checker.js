function palindrome(str) {
  let s='';
  let s1='';
  for(let i=str.length-1;i>=0;i--){
    if((str[i]>='a'&&str[i]<='z')|| (str[i]>='A'&&str[i]<='Z')||
    (str[i]>='0'&&str[i]<='9'))
    {s+=str[i].toLowerCase();}
  }
  for(let j=0;j<str.length;j++){
    if((str[j]>='a'&&str[j]<='z')|| (str[j]>='A'&&str[j]<='Z')||    (str[j]>='0'&&str[j]<='9'))
    {s1+=str[j].toLowerCase();}
  }
  return s===s1;
}



console.log(palindrome("A man, a plan, a canal. Panama"));
