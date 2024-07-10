import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MultiActionAreaCard from './MultiActionAreaCard'

const DisplayUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
        .then(res => {
            setUsers(res.data.users)
        })
      }, []);
  return (
    <div>
        <h1 className='text-center'>All users below:</h1>
        <div className=''>
        {
            users.map((user, index)=>(
                
                <MultiActionAreaCard key={index} first_name = {user.first_name} age={user.age} email = {user.email} _id = {user._id}/>
            ))
            
            }
            
        </div>
    </div>
  )
}

export default DisplayUsers;
