import React from 'react'

const MoviePage = () => {
  
  let movie=[
    {
      Movie:"Theri",
      Hero:"Vijay Kumar",
      Heroine:"Sam"
    },
    {
      Movie:"VVS",
      Hero:"Siva",
      Heroine:"Sri Divya"
    },
    {
      Movie:"Vanamagan",
      Hero:"Jayam",
      Heroine:"Sayyesha"
    }

  ]

  return (
    <div>
      {
        movie.map(film =><div style={{backgroundColor:'red',width:'100px',height:'250px'}}>
          <p>Movie :{film.Movie}</p>
          <p>Hero :{film.Hero}</p>
          <p>Heroine :{film.Heroine}</p>
          </div>
          )
      }
    </div>
  )
}

export default MoviePage