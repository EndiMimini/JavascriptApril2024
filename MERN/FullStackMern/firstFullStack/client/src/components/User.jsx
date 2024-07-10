import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
import AlertDialog from './AlertDialog';
import UpdateDialog from './UpdateDialog';
const User = () => {
    const [user,setUser] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const [age, setAge] = useState()
    const [formSubmited, setFormSubmitted] = useState(false)

    const [error, setError] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => {
            setUser(res.data.user)
            setAge(res.data.user.age)
            setFormSubmitted(false)
        })
      }, [formSubmited]);


    const handleUpdate = () => {
      axios.patch(`http://localhost:8000/api/users/${user._id}`, {age:age, under18: age < 18?true:false})
      .then(res => {
          setError('')
          setFormSubmitted(true)
      })
    }
        
    const handleDelete = () => {
      
      axios.delete(`http://localhost:8000/api/users/${id}`)
      .then(res => {
          navigate('/')
      })
    }
      
  return (
    <div className='w-50 m-auto'>
      <h1 className='text-center'>Single user information</h1>
      <div className='text-center'>
        {user.under18?<FaceIcon/> :<FaceRetouchingOffIcon/>}
        {user.under18?<p className='text-danger'>Under 18</p>:<p className='text-success'>Over 18</p>}
        <p>{user.first_name} {user.last_name}</p>
        <p>{user.age} </p>
        <p>{user.email} </p>
        <UpdateDialog age={age} setAge={setAge} setError = {setError} error={error} handleUpdate = {handleUpdate}/>
        <AlertDialog handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default User
