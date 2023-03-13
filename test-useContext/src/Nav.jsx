import React from 'react'
import { MovieContext } from './MovieProvider'
import { useContext } from 'react'
import  './App.css'

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext)

  return (
    <nav>
        <h3>Dev Mugen</h3>
        <p>List of Movies: {movies.length}</p>
    </nav>
  )
}

export default Nav