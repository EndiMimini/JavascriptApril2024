import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
const View = () => {
    const {id} = useParams()
    const [pirate, setPirate] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                setPirate(res.data.result)
            })
            .catch(err => console.log(err))
        
    }, [])
  return (

    <div>
        <Link to={'/pirates'}>Back to pirates</Link>
        <img src={pirate.image} alt={pirate.name} />
      <h3>{pirate.name}</h3>
        <p>Position: {pirate.crewPosition}</p>
        <p>Treasures: {pirate.nrOfTreasure}</p>
        <p>Catch Phrase: {pirate.catchPhrase}</p>
        <h6>Attributes of this pirate:</h6>
        {pirate.petLeg?<p>Pet leg</p>:null}
        {pirate.hookHand?<p>Hook Hand </p>:null}
        {pirate.eyePatch?<p>Eye Patch </p>:null}

    </div>
  )
}

export default View
