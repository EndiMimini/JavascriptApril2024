import axios from 'axios'
import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const createUser =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/users", {
            firstName: firstName,
            lastName: lastName
        })
    .then(res=>{
        console.log(res)
        setFirstName(null)
        setLastName(null)
    })
    .catch(err=>console.log(err))

    }

  return (
    <div>
        <form onClick={createUser}>
            <p>Form here</p>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter first name' />
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Enter last name' />

            <button>Create</button>
        </form>
      
    </div>
  )
}

export default Form
