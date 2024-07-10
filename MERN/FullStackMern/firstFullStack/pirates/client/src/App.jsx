import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Display from './components/Display'
import Add from './components/Add'
import View from './components/View'
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Display/>} />
          <Route path="/pirates" element={<Display/>} />
          <Route path="/pirates/new" element={<Add/>} />
          <Route path="/pirates/:id" element={<View/>} />

      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
