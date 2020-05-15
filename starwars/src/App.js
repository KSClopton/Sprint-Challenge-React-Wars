import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import {CharacterCard} from "./components/Character"

// useEffect(() => {
//   axios.get(`https://pokeapi.co/api/v2/pokemon/`)
//   .then(results => {
//     setData(results.data)
//   })
//   .catch(err => {
//     console.log('Something in the API is not working!')
//   })
// })
// useEffect(() => {
//   axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
//   .then(results => {
//     setData(results.data)
//   })
//   .catch(err => {
//     console.log('Something in the API is not working!')
//   })
// })



const App = () => {
  const [swdata, setData] = useState([])
  
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people`)
    .then(results => {
      console.log('testing', results.data.results)
      setData(results.data.results)
      console.log(swdata)
  
    })
    .catch(err => {
      console.log('Something in the API is not working!')
    })
  }, [])

  return (
    <div>
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h2></h2>
    </div>
      <div>
        <CharacterCard data={swdata}/>
      </div>
    </div>
  )
  
}


export default App;
