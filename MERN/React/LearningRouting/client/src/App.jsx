import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Create from './components/Create';
import Results from './components/Results';
import SinglePost from './components/SinglePost';
function App() {
  const [firstName, setFirstName] = useState("")
  const [comment, setComment] = useState("")
  const [posts, setPosts] = useState([])

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create' element={<Create posts={posts} setPosts={setPosts}/>} />
          <Route path='/results' element={<Results posts={posts}/>} />
          <Route path='/results/:id' element={<SinglePost posts={posts}/>}/>
        </Routes>
    
      </BrowserRouter>
      
    </>
  )
}

export default App
