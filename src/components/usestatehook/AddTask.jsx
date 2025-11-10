import React, { useState } from 'react'

const AddTask = () => {
     const Fruit=["orange","Apple"]

     const [displayfruits,setDisplayfruits]=useState()
     const[add, setadd]=useState()
     function save(){
        // setFruit([...Fruit,add])
        // setadd('')
      
        Fruit.push(add)
        setDisplayfruits(Fruit)
        console.log(Fruit);
        console.log(displayfruits);
        
        
     }
  return (
    <div style={{textAlign:'center'}}>
        <input placeholder='Enter Fruit' type="text" onChange={(e)=>setadd(e.target.value)}/>
        <button onClick={save}>Save</button>
        <h3>{Fruit}</h3>
      
    </div>
  )
}

export default AddTask
