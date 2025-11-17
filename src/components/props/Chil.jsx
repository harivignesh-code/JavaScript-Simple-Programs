import React from 'react'

const Chil = (props) => {
  return (
    <div>
      {
        props.name.map(mob=><div>
            <p>{mob.brand}</p>
            <p>{mob.price}</p>
            <p>{mob.manufacture}</p>
        </div>)
      }
    </div>
  )
}

export default Chil
