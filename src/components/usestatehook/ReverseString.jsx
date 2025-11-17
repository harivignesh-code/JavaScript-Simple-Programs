import React from 'react'

const ReverseString = () => {
    let str='Harivignesh';
    let rev='';
    for(let i=str.length-1;i>=0;i++){
        rev=rev+str[i];
    }
    console.log("Given String "+str);
    console.log("Reversed "+rev);
    
    
  return (
    <div>ReverseString</div>
  )
}

export default ReverseString