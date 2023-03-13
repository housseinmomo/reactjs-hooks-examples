import React, { useState } from 'react'
import { useContext } from 'react'
import { MovieContext } from './MovieProvider'

const AddMovie = () => {

    const [name, setName]   = useState("")
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault()
        
        setMovies([...movies, {
            name, 
            price,
            id: 100
        }])
        setName("")
        setPrice("")
    }

  return (
    <form onSubmit={addMovie}>
        <input type="text" name="name" placeholder='name' onChange={updateName}/>
        <input type="text" name="price" placeholder='price' onChange={updatePrice} />
        <button>Submit</button>
    </form>
  )
}

export default AddMovie