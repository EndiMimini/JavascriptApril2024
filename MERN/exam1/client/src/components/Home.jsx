import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [pets, setPets] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then(res => {
            console.log(res.data.pets)
            setPets(res.data.pets)}
        )
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <Link to={'/pets/new'}>Add a pet to the shelter</Link>
            
        </div>
        <h3>These pets are looking for a new home</h3>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                pets.map((pet, i) => {
                    return (
                        <tr key={i}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={`/pets/${pet._id}`}>Details</Link> | <Link to={`/pets/${pet._id}/edit`}>Edit</Link> 
                            </td>
                        </tr>
                    )
                })
                }
                
                
            </tbody>
            </table>
      
    </div>
  )
}

export default Home
