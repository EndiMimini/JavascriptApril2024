import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MultiActionAreaCardProducts from './MultiActionAreaCardProducts'
const DisplayProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
        .then(res => {
            setProducts(res.data.products)
        })
      }, []);
  return (
    <div>
        <h1 className='text-center'>All products below:</h1>
        <div className=''>
        {
            products.map((item, index)=>(
    
                <MultiActionAreaCardProducts key={index} image={item.image} title = {item.title} description={item.description} price = {item.price} _id = {item._id}/>
            ))
            
            }
            
        </div>
    </div>
  )
}

export default DisplayProducts;
