import React, { Children, useState } from 'react'
import { createContext } from 'react'

export const MovieContext = createContext()
   

const MovieProvider = ( {children} ) => {
  
  const [movies, setMovies] = useState([
    {
        name: "Harry Potter",
        price: '$10',
        id: 201
    },
    {
        name: "Game of throne",
        price: '$15',
        id: 202
    },
    {
        name: "Inception",
        price: '$8',
        id: 203
    },
  ])



  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  )


}

export default MovieProvider