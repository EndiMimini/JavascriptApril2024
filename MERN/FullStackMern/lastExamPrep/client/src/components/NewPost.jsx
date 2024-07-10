import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const NewPost = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState('')

    const createPost = (e) =>{
        e.preventDefault()
        if (title.length < 2 || description.length < 2){
            setErrors("Title and Description must be at least 2 characters long")
        }
        else{
            let newPost = {
                title: title,
                description: description,
            }
            axios.post('http://localhost:8000/api/posts', newPost)
            .then(res => navigate('/'))
        }
    }
  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={createPost}>
        {errors? <p>{errors}</p>:null}
        <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
            <label>Description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button>Create draft post</button>
      </form>
    </div>
  )
}

export default NewPost
