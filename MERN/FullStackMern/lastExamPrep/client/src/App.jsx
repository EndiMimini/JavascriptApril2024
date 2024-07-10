import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Posts from './components/Posts'
import NewPost from './components/NewPost'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Posts />} />
      <Route path="/home" element={<Posts />} />
      <Route path="/post/new" element={<NewPost />} />


    </Routes>


    </BrowserRouter>
    
    </>
  )
}

export default App
