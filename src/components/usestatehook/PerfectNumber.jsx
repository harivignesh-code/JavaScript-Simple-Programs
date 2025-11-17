import { useParams } from "react-router-dom";

function PerfectNumber  (num)  {

  let {number} =useParams()
  console.log(number);
  
  // var sum=0;
  // for(var i=1;i<num;i++){
  //   if(num&i===0){
  //       sum+=i
  //   }
  // }
  return (
    <div>
      <h1>{number}</h1>

    </div>

  )
}
// console.log(PerfectNumber(6));
// console.log(PerfectNumber(28));
// console.log(PerfectNumber(24));

export default PerfectNumber