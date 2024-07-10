import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateProduct = () => {
  const [errors, setError] = useState('')
  const navigate = useNavigate()

  const handleUserCreation = (e) => {
    e.preventDefault();
    const newProduct = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      image: e.target.image.value

    }
    if (newProduct.title.length<2 || newProduct.description.length<2 || newProduct.description.length>255 || newProduct.price < 1 || newProduct.image.length<10){
      setError('Please enter the correct information, else you are not going anywhere!')
    }
    else{
      axios.post(`http://localhost:8000/api/products`, newProduct)
        .then(res => {
            navigate('/products')
        })
        .catch(function (error) {
          setError('Please enter the correct information, else you are not going anywhere!')
        });
    }
  }
  return (
    <div>
      <h1 className='text-center'>Add new product</h1>
      { errors && <p className='text-danger text-center'>{errors}</p> }
      <form className='w-50 m-auto' onSubmit={handleUserCreation}>
        <div className="mb-3">
          <label htmlFor="first_name">Title:</label>
          <input type="text" placeholder='Enter product title' className='form-control' name='title'/>
        </div>
        <div className="mb-3">
          <label htmlFor="last_name">Description:</label>
          <textarea className='form-control'name='description'/>
        </div>
        <div className="mb-3">
          <label htmlFor="age">Price:</label>
          <input type="number" placeholder='Enter price' className='form-control' min={1} max={150} name='price'/>
        </div>
        <div className="mb-3">
          <label htmlFor="image">Image:</label>
          <input type="text" placeholder='Enter image url' className='form-control' name='image'/>
        </div>
        <button className='btn btn-success'>Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct
