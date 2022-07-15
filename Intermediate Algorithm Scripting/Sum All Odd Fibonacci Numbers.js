function sumFibs(num) {
  let num1=0;
  let num2=1;
  let num3;
  let sum=1;
  for(let i=0;i<num-1;i++){
    num3=num1+num2;
    console.log(num3);
    if(num3%2!=0&&num3<=num){
      sum+=num3;
    }
    num1=num2;
    num2=num3;
    if(num3>=num)break;
  }
  return sum;
}

console.log(sumFibs(1000));
