import React, { useState } from 'react'

const Task = () => {

  const [CostPrice, setCostPrice] = useState(0)
  const [SalesPrice, setSalesPrice] = useState(0)
  const [answer, setanswer] = useState(0)
  const [prl, setprl] = useState("")

  function find() {

    let cp = CostPrice * 1  
    let sp = SalesPrice * 1 

    let result = sp - cp

    if (result > 0) {
      setprl("Profit")
      setanswer(result)
    } else if (result < 0) {
      setprl("Loss")
      setanswer(-result)
    } else {
      setprl("No Profit / No Loss")
      setanswer(0)
    }
  }

  return (
    <div style={{textAlign:'center'}}>
      <p>Find the profit or loss</p><br />

      <input
        placeholder='Cost Price'
        type="number"
        onChange={(e) => setCostPrice(e.target.value)}
      />

      <input
        placeholder='Selling Price'
        type="number"
        onChange={(e) => setSalesPrice(e.target.value)}
      />

      <button onClick={find}>Find</button>

      <h3>{prl} : {answer}</h3>
    </div>
  )
}

export default Task
