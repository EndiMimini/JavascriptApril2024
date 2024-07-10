import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const NewPet = () => {
    const navigate = useNavigate()
    const [name, setName]= useState('')
    const [type, setType]= useState('')
    const [description, setDescription]= useState('')
    const [skill1, setSkill1]= useState('')
    const [skill2, setSkill2]= useState('')
    const [skill3, setSkill3]= useState('')
    const [errors, setErrors]= useState('') 

    const createPet = (e) => {
        e.preventDefault();
        if (name.length<3 || description.length<3 || type.length < 3){
            setErrors('Name, type and description are required and should be at least 3 characters.')
        }
        else if (errors.length<1){
            axios.get(`http://localhost:8000/api/pets/${name}`)
                .then(res => {
                    setErrors('Pet exists')
                } )
                .catch(err => {
                    setErrors('Something went wrong on our end! Please try again.')
                    console.log(err)}
                )
        }
        
        else{
            let newPet = {
                name:name,
                type: type,
                description: description,
                skill1: skill1,
                skill2: skill2,
                skill3:skill3
            }
            axios.post('http://localhost:8000/api/pets', newPet)
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
        <h3>Know a pet needing a home?</h3>

        <form onSubmit={createPet}>
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
            <button className='btn btn-success'>Add pet</button>

        </form>
      
    </div>
  )
}

export default NewPet
