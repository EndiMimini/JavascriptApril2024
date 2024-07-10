import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
import AlertDialog from './AlertDialog';
import UpdateDialogProduct from './UpdateDialogProduct';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsightsIcon from '@mui/icons-material/Insights';
const DisplayOneProduct = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams()
    console.log(id)
    const navigate = useNavigate()
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [title, setTitle] = useState('')
    const [image, setImage]= useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const [like, setLike] = useState(0)
    const [views, setViews] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data.product)
            setTitle(res.data.product.title)
            setDescription(res.data.product.description)
            setImage(res.data.product.image)
            setLike(res.data.product.likes)
            setViews(res.data.product.views)
            setFormSubmitted(false)

        })

      }, [formSubmitted]);


    const handleUpdate = () => {
      axios.patch(`http://localhost:8000/api/products/${product._id}`, {title:title, description:description})
      .then(res => {
          setError('')
          setFormSubmitted(true)
      })
    }
        
    const handleDelete = () => {
      
      axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => {
          navigate('/products')
      })
    }
    const handleLike = (id) => {
      axios.patch(`http://localhost:8000/api/products/like/${product._id}`)
      .then(res => {
        setLike(res.data.product.likes)
      })
    }
      
  return (
    <div className='w-50 m-auto'>
      <div className="d-flex justify-content-between">
      <h1 className='text-center'>Single product information</h1>
      <UpdateDialogProduct title={title} setTitle={setTitle} description={description} setDescription={setDescription} setError = {setError} error={error} handleUpdate = {handleUpdate}/>

      </div>
      <div className='text-center'>
        <img style={{width:'160px', height:'160px', borderRadius:'50%', padding:'4px', border:'1px solid gainsboro'}} src={product.image} alt={product.title} />
       
        <p>{product.title}</p>
        <p>{product.description} </p>
        <p>Price: ${product.price} </p>
        <div className="d-flex justify-content-evenly align-items-center w-50 m-auto">
        <AlertDialog handleDelete={handleDelete}/>
        <div className="d-flex align-items-center">
        <ThumbUpIcon onClick={handleLike} style={{color:'green'}}/>
        <p className='m-0 mx-3'>{like} {like==1?<span>Like</span>:<p>Likes</p>}</p>
        </div>
        <div className="d-flex align-items-center">
          <p className='m-0 mx-1'>{views}</p>
        <InsightsIcon style={{color:'hotpink'}}/>

        </div>

        </div>
      </div>
    </div>
  )
}

export default DisplayOneProduct;
