import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Pet = () => {
    const navigate = useNavigate()
    const [pet, setPet] = useState({})
    const {id} = useParams()
    console.log(id, 'iddd')
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            setPet(res.data.pet)}
        )
        .catch(err => console.log(err))
    }, [])
    const handleDelete = (idOfPet)=>{
        axios.delete(`http://localhost:8000/api/pets/${idOfPet}`)
        .then(res => navigate('/')
        )
        .catch(err => console.log(err))
    }
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <Link to={'/'}>Back to home</Link>
            
        </div>
        <h3>Pet shelter</h3>
        <h5>Details about {pet.name}</h5>
        <h5>Pet type {pet.type}</h5>
        <h5>Pet desription {pet.description}</h5>
        <h6>Skills:</h6>
        {
            pet.skill1 && pet.skill1.length>1?<p>{pet.skill1}</p>:null
            
        }
        {
            pet.skill2 && pet.skill2.length>1?<p>{pet.skill2}</p>:null
            
        }
        {
            pet.skill3 && pet.skill3.length>1?<p>{pet.skill3}</p>:null
            
        }


        <button className='btn btn-danger' onClick={()=>handleDelete(pet._id)}>Adopt {pet.name}</button>
      
    </div>
  )
}

export default Pet
