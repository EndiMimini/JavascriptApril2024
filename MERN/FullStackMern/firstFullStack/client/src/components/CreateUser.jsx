import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Input } from '@mui/material';

const CreateUser = () => {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setError] = useState('')
  const navigate = useNavigate()

  const handleUserCreation = (e) => {
    e.preventDefault();
    const newUser = {
      first_name,
      last_name,
      age,
      email,
      under18: age < 18?true:false
    }
    if (first_name.length<2 || last_name.length>20 || last_name.length<2 || age < 1 || age > 150 || email.length< 5){
      setError('Please enter the correct information, else you are not going anywhere!')
    }
    else{
      axios.post(`http://localhost:8000/api/users`, newUser)
        .then(res => {
            navigate('/')
        })
        .catch(function (error) {
          setError('Please enter the correct information, else you are not going anywhere!')
        });
    }
  }
  return (
    <div>
      <h1 className='text-center'>Add new user</h1>
      { errors && <p className='text-danger text-center'>{errors}</p> }
      <form className='w-50 m-auto' onSubmit={handleUserCreation}>
        <div className="mb-3">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" className='form-control' value={first_name} onChange={(e)=>setFirst_name(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" className='form-control' value={last_name} onChange={(e)=>setLast_name(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="age">Age:</label>
          <input type="number" className='form-control' value={age} min={1} max={150} onChange={(e)=>setAge(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input type="text" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button className='btn btn-success'>Create User</button>
      </form>
    </div>
  )
}

export default CreateUser
