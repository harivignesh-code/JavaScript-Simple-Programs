import React, { useState } from 'react'
const Bgchanger = () => {

 const[color,setcolor]=useState('')



  return (
    <div style={{backgroundColor:color}}>
      <h2>Change Background color</h2>
      <button onClick={()=>setcolor('red')}>Red</button>
      <button onClick={()=>setcolor("Green")}>Green</button>
      <button onClick={()=>setcolor("Yellow")}>Yellow</button>
      <button onClick={()=>setcolor("Orange")}>Orange</button>
    </div>
  )

}
export default Bgchanger
