import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Add = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [nrOfTreasure, setnrOfTreasure] = useState('')
    const [crewPosition, setcrewPosition] = useState('Captain')
    const [catchPhrase, setcatchPhrase] = useState('')
    const [petLeg, setpetLeg] = useState(false)
    const [eyePatch, seteyePatch] = useState(false)
    const [hookHand, sethookHand] = useState(false)
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    const createPirate = (e) => {
        e.preventDefault();
        if (name.length < 2 || image.length < 2 || nrOfTreasure < 1 || crewPosition.length < 2 || catchPhrase.length < 2) {
            setErrors('Please include all the required information!')
        }
        else{
            let newPirate = {
                name: name,
                image: image,
                nrOfTreasure: nrOfTreasure,
                crewPosition: crewPosition,
                catchPhrase: catchPhrase,
                petLeg: petLeg,
                eyePatch: eyePatch,
                hookHand: hookHand
            
            }
            axios.post('http://localhost:8000/api/pirates', newPirate)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
        }
        
    };
  return (
    <div>
      <form onSubmit={createPirate}>
        {errors ? <p style={{color: 'red'}}>{errors}</p> : ''}
        <div>
            <label htmlFor="">Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Image:</label>
            <input type="text" onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Number of Treasure:</label>
            <input type="number" onChange={(e) => setnrOfTreasure(e.target.value)} />
        </div>
        <div>
            <label htmlFor='catchPhase'>Catch Phrase</label>
            <input type="text" onChange={(e) => setcatchPhrase(e.target.value)} />
        </div>
        <div>
            <label htmlFor='crewPosition'>Crew Position</label>
            <select name="crewPosition" id="crewPosition" onChange={(e) => setcrewPosition(e.target.value)}>
                <option value="Captain">Captain</option>
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
            </select>
        </div>
        <div>
            <label htmlFor='petLeg'>Pet Leg</label>
            <input type="checkbox" onChange={(e) => setpetLeg(e.target.checked)} />
        </div>
        <div>
            <label htmlFor='eyePatch'>Eye Patch</label>
            <input type="checkbox" onChange={(e) => seteyePatch(e.target.checked)} />
        </div>
        <div>
            <label htmlFor='hookHand'>Hook Hand</label>
            <input type="checkbox" onChange={(e) => sethookHand(e.target.checked)} />
        </div>
        <button>Add pirate</button>

      </form>
    </div>
  )
}

export default Add
