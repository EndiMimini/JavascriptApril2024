import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import NewPet from './components/NewPet'
import Pet from './components/Pet'
import EditPet from './components/EditPet'
function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets/new" element={<NewPet />} />
      <Route path="/pets/:id" element={<Pet/>}/>
      <Route path="/pets/:id/edit" element={<EditPet/>}/>
    </Routes>

    </BrowserRouter>

  )
}

export default App
