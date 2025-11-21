import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to=''>Home</Link>

      <Link to='/game'>Game</Link>
      <Link to='/forms/formdata'><Button>Form</Button></Link>

      {/* <NavLink to='/game' style={({isActive})=> {color=isActive ? 'red' : 'green'}}>game</NavLink>
                              <NavLink to=''>Home</NavLink> */}


       <NavLink
      to='/PerfectNumber'
      style={({isActive})=>({ color: isActive ? 'red':'green'})}
      >
        PerfectNumber
      </NavLink>


      <NavLink
        to='/game'
        style={({ isActive }) => ({ color: isActive ? 'red' : 'green' })}
      >
        game
      </NavLink>


      <NavLink
        to=''
        style={({ isActive }) => ({ color: isActive ? 'red' : 'green' })}
      >
        intro
      </NavLink>

      <NavLink
        to='/reverse'
        style={({ isActive }) => ({ color: isActive ? 'red' : 'green' })}
        >
          Reverse
        </NavLink>

     





    </div>
  )
}

export default Nav