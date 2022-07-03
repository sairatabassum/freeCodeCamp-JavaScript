function diffArray(arr1, arr2) {
  const newArr = [];
  const temp=[...arr1,...arr2];
  
  for(let i=0;i<temp.length;i++){
    let cnt=0;
    for(let j=0;j<temp.length;j++){
    if(temp[i]===temp[j])cnt++;
  } 
  if(cnt===1){
    newArr.push(temp[i]);
  }
  cnt=0;
  }
  
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
