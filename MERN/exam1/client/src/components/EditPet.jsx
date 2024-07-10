import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const EditPet = () => {
    const navigate = useNavigate()
    const [pet, setPet] = useState({})
    const [name, setName]= useState('')
    const [type, setType]= useState('')
    const [description, setDescription]= useState('')
    const [skill1, setSkill1]= useState('')
    const [skill2, setSkill2]= useState('')
    const [skill3, setSkill3]= useState('')
    const [errors, setErrors]= useState('') 


    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            setPet(res.data.pet)
            setName(res.data.pet.name)
            setType(res.data.pet.type)
            setDescription(res.data.pet.description)
            setSkill1(res.data.pet.skill1 || '')
            setSkill2(res.data.pet.skill2 || '')
            setSkill3(res.data.pet.skill3 || '')
        })
        .catch(err => console.log(err))
    }, [])
    
    const editPet = (e) => {
        e.preventDefault();
        if (name.length<3 || description.length<3 || type.length < 3){
            setErrors('Name, type and description are required and should be at least 3 characters.')
        }
        else{
            let updatedPet = {
                name:name,
                type: type,
                description: description,
                skill1: skill1,
                skill2: skill2,
                skill3:skill3
            }
            axios.patch(`http://localhost:8000/api/pets/${id}`, updatedPet)
                .then(res => navigate('/') )
                .catch(err => {
                    setErrors('Something went wrong on our end! Please try again.')
                    console.log(err)})
        }
    }
  return (

<div>
        <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <Link to={'/'}>Back to home</Link>
            
        </div>
        <h3>Edit {pet.name}</h3>

        <form onSubmit={editPet}>
            <div className="row">

                <div className="col-lg-6">
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} className='form-control' onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type">Type</label>
                        <input type="text" value={type} className='form-control' onChange={(e)=>setType(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <input type="text" value={description} className='form-control' onChange={(e)=>setDescription(e.target.value)} />
                    </div>
                    </div>
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label htmlFor="skill1">Skill 1</label>
                        <input type="text" value={skill1} className='form-control' onChange={(e)=>setSkill1(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="skill2">Skill 2</label>
                        <input type="text" value={skill2} className='form-control' onChange={(e)=>setSkill2(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="skill3">Skill 3</label>
                        <input type="text" value={skill3} className='form-control' onChange={(e)=>setSkill3(e.target.value)} />
                    </div>
                </div>
            
            </div>
            { errors && errors.length>1? <p className='text-danger'>{errors}</p>:null}
            <button className='btn btn-success'>Update pet</button>

        </form>
      
    </div>
  )
}

export default EditPet
