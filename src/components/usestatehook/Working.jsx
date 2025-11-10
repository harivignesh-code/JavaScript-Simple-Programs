import React, { useState } from 'react'

const Working = () => {

    const[name,setname]=useState("hari")
    const[mailId, setmailId]=useState("mail")
    const[Password, setPassword]=useState("pass")
    const[Address,setAddress]=useState("Street")
    const[PhoneNumber, setPhoneNumber]=useState("1234567890")
    

    function detailsHandler(a){
        console.log(a);
        console.log(a.target);
    }

    let [num1, setnum1]=useState(0)
    let [num2, setnum2]=useState(0)
    let [result, setResult]=useState("000")

    function findsum(){
        console.log(num1);
        console.log(num2);
        
        let answer=parseInt(num1)+parseInt(num2)
        setResult(answer)
    }
  return (
    <div>
        <input placeholder='Enter Your Name'onChange={(a)=>setname(a.target)}/>
        <input placeholder='Enter Your gmail id' type="gmail" onChange={(a)=>setmailId(a.target)} />
        <input placeholder='Enter Your Password' type="password" onChange={(a)=>setPassword(a.target)}/>
        <input placeholder='Enter Your Address'onChange={(a)=>setAddress(a.target)} />
        <input placeholder='Enter Your ph Number' type="number" onChange={(a)=>setPhoneNumber(a.target)}/>

        <input placeholder='Number' type="numbe r" onChange={(a)=>setnum1(a.target.value)}/>
        <input placeholder='Number' type="number" onChange={(a)=>setnum2(a.target.value)}/>

        <button onClick={findsum}>Sum</button>
        <p>{result}</p>

      
    </div>
  )
}

export default Working
