import React from 'react'
import Chil from './Chil'
import Mob from './Mob'

const Pare = () => {

    let word="hari"
    let mobiles=[
        {
            brand:"moto",
            price:16500,
            manufacture:"Coibatore"
        },
        {
            brand:"vivo",
            price:20000,
            manufacture:"puliyangulam"
        },
        {
            brand:"Samsung",
            price:16500,
            manufacture:"kerala"
        }
        

    ]
  return (
    <div>
      <Chil name={mobiles}/>
      <Mob abs={word}/>
    </div>
  )
}

export default Pare
