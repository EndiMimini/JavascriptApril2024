import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import User from './components/User'
import Form from './components/Form'

function App() {
  const [users, setUsers] = useState([])
  const [usersChanged, setUsersChanged] = useState(false)
  useEffect(()=>{
    axios.get("http://localhost:8000/api/users")
    .then(res=>{
      console.log(setUsers(res.data.users))
      setUsersChanged(false)
    })
    .catch(err=>console.log(err))
}, []);  // This

  return (
    <>
    <Form usersChanged={usersChanged} setUsersChanged={setUsersChanged} />
     <ul>
        {
            users.map( (user, index) => 
              <User firstName={user.firstName} lastName={user.lastName} />
            )
        }
        </ul>
      
    </>
  )
}

export default App
