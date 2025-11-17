
function PerfectNumber  (num)  {
  var sum=0;
  for(var i=1;i<num;i++){
    if(num&i===0){
        sum+=i
    }
  }
  return sum===num;
}
console.log(PerfectNumber(6));
console.log(PerfectNumber(28));
console.log(PerfectNumber(24));

export default PerfectNumber