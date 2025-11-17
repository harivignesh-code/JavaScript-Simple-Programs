import React from 'react'
import { Card,Button } from 'react-bootstrap'
const Retro = (props) => {
  return (
    <div>
        {
            props.ret.map(d=><div>
                <p>{d.Retroname}</p>
                <p>{d.Retrorole}</p>
                <p>{d.Retroage}</p>
                </div>)
        }
      
    </div>
  )
}

export default Retro
