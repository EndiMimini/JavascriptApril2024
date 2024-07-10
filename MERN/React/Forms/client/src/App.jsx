import './App.css'
import Form from './components/Form'
import Display from './views/Display'
import { useState } from 'react'
function App() {
 const [users, setUsers] = useState([]) 

  return (
    <>
      <Form setUsers={setUsers} users={users}/>
      <Display users={users} setUsers={setUsers}/>
    </>
  )
}

export default App
