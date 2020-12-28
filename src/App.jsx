import React, { useState, useEffect } from 'react'
import { Search, Pokemon } from './components'
import './App.css'
import { getPokemonById } from './api'

/**
 * Primary App
 *
 * @returns {function} react component
 */
export const App = () => {
  const [initialSearch, setInitialSearch] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState({})

  /**
   * Updates the currentPokemon state
   *
   * @param {object} newPokemon - Object containing pokemon info
   */
  const updateCurrentPokemon = (newPokemon) => {
    setCurrentPokemon(newPokemon)
  }

  /**
   * Gets data for a pokemon chosen at random
   */
  const getRandomPokemon = async () => {
    const randomPokemonNumber = Math.floor(Math.random() * 898 + 1)
    const newPokemon = await getPokemonById(randomPokemonNumber)

    setCurrentPokemon(newPokemon)
    setInitialSearch(true)
  }

  useEffect(() => {
    if (!initialSearch) {
      getRandomPokemon()
    }
  }, [initialSearch])

  return (
    <div className="App">
      <h1>Warlock Dex</h1>
      <h2>Search for a Pokemon!</h2>

      <Search submitCallback={updateCurrentPokemon} />
      <Pokemon pokemon={currentPokemon} />
    </div>
  )
}
