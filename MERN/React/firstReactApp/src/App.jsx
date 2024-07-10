import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './views/Main'
import Person from './components/Person'
function App() {


  return (
    <>
    <Navbar/>
    <Person firstName = 'Endi' lastName = 'Mimini'/>
    <Person firstName = 'Not' lastName = 'Someone'/>
    <Person firstName = 'Klea' lastName = 'Manushi'/>

    </>
    
  )
}

export default App
