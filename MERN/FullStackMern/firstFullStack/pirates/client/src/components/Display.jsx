import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Custom.css'

const Display = () => {
    const [pirates, setPirates] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => setPirates(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                setPirates(pirates.filter(pirate => pirate._id !== id))
            })
            .catch(err => console.log(err))
    }
  return (
    <div>
        <div className="d-flex justify-content-evenly nav">
            <h1>Pirate Crew</h1>
            <Link className='customButton' to={'/pirates/new'}>Add pirate</Link>
        </div>
        <div className='mainContent'>

        
        {
            pirates.map((pirate, i) => {
                return <div className='singlePirate d-flex justify-content-evenly' key={i}>
                    <img src={pirate.image} alt={pirate.name} />
                    <div>

                        <h2>{pirate.name}</h2>
                        <div className='d-flex justify-content-evenly'>
                        <Link className='customButton' to={`/pirates/${pirate._id}`}>View pirate</Link>
                        <button className='customButtonRed' onClick={()=>handleDelete(pirate._id)}>Walk the plank</button>
                
                        </div>
                        
                    </div>
                    </div>
            })
        }
        </div>
      
    </div>
  )
}

export default Display
