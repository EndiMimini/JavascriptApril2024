import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons]= useState([])
  useEffect(()=>{
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res=>{
        console.log(res)
        setPokemons(res.data.results)
    
      })},
  []);  
  return (
    <>
      <div>
      <div>
        {
            pokemons.map( (pokemon, index) => 
              <div key={ index }>
                <p>{ pokemon.name}</p>
                <a target='blank' href={pokemon.url}>View { pokemon.name} info</a>  
              </div>
            )
        }
        </div>
        </div>
    </>
  )
}

export default App
