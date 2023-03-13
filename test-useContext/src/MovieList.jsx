import React, { useContext, useState } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieProvider'

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext)

  return (
    <ul>
        {movies.map((movie) => {
            return <Movie name={movie.name} price={movie.price} key={movie.id} />
        })}
    </ul>
  )
}

export default MovieList