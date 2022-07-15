function myReplace(str, before, after) {
  let arr = [];
  let mt = "";
  let res="";
  let s2;
  if(before.charAt(0)>='a'&&before.charAt(0)<='z'){
s2=after.charAt(0).toLowerCase();
  }
  else{
    s2=after.charAt(0).toUpperCase();

  }
  const after1=s2+after.slice(1);
 
  return str.replace(before, after1);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
