import React from 'react'

import Retro from './Retro'


const parent = () => {
    let movie='Retro'
    let price=200

    let details= [
  { name: "Rajinikanth", role: "Manickam", age: 35 },   // Baashha (1995)
  { name: "Kamal Haasan", role: "Sridhar", age: 30 },   // Sigappu Rojakkal (1978)
  { name: "Sridevi", role: "Viji", age: 22 }            // Moondram Pirai (1982)
                  ];
 console.log(details);
    
  return (
    <div>
       <p>This is movie page</p>
       <Child name={movie} amount={price} />
        
      
    </div>
  )
}

export default parent
