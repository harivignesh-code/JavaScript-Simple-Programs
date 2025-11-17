import React, { useState } from 'react'

const Paper = () => {
    let [userone,setuserone]=useState('')
    let [usertwo,setusertwo]=useState('')
    let [res,setres]=useState('')

    function one(e){
        setuserone(e.target.value)
    }

    function two(e){
        setusertwo(e.target.value)
    }

  return (
    <div>
        <h3>Playerone</h3>
        <select value={userone} onChange={one}>
            <option value=''>Select</option>
            <option value='Stone'>Stone</option>
            <option value='paper'>paper</option>
            <option value='Scissor'>Scissor</option>
        </select>

        <h3>Playertwo</h3>
        <select value={usertwo} onChange={two}>
            <option value=''>Select</option>
            <option value='Stone'>Stone</option>
            <option value='paper'>paper</option>
            <option value='Scissor'>Scissor</option>
        </select>
    </div>
  )
}

export default Paper