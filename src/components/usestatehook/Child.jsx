import React from 'react'

const child = ({movie,price}) => {
  return (
    <div>
        <p>This is movie page</p>
        <p>The movie name is {movie}</p>
        <p>Ticket price is {price}</p>
        </div>
  )
}

export default child