import React, { useState } from 'react'

const Unitscal = () => {
    const[Units ,setUnits]=useState("")
    const[TotalUnits ,setTotalUnits]=useState("")
    function find(){
        if(Units>0 && Units<=100){
            setTotalUnits(Units*5)
        }
        else if(Units>100 && Units<=200){
            setTotalUnits(Units*7)
        }
        else{
            setTotalUnits(Units*10)
        }

    }

  return (
    <div style={{textAlign:'center'}}>
      <input placeholder='Enter the Units' type="number" onChange={(e)=>(setUnits(e.target.value))}/>
      <button onClick={find}>Find</button>
      <h3>{TotalUnits}</h3>
    </div>
  )
}

export default Unitscal
